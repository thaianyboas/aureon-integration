"""AUREON: the owner's own furniture models (.glb), served to signed-in Home Assistant users only.

Files live in `<config>/aureon_models/` (outside `www`, so `/local` never serves them). Any authenticated user may
read them, as with the building itself; anonymous requests get 401 from Home Assistant's auth middleware. Only
administrators may add models (a .zip or one .glb from the editor's "Import furniture"); nothing is ever deleted.
"""

from __future__ import annotations

import io
import json
import os
from pathlib import Path
import re
import struct
from typing import Any
import zipfile

from aiohttp import web
from homeassistant.components import websocket_api
from homeassistant.components.http import KEY_HASS, HomeAssistantView
from homeassistant.core import HomeAssistant, callback
import voluptuous as vol

from .const import DOMAIN

MODELS_DIR = "aureon_models"
URL = "/api/neonplan3d/aureon_models/{name}"
_NAME = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,119}\.glb$")
MAX_BYTES = 24 * 1024 * 1024
_REGISTERED = f"{DOMAIN}_aureon_models_registered"


def model_file(config_dir: str, name: str) -> Path | None:
    """The model file for a request name, None for anything else (in the executor)."""
    if not _NAME.match(name) or ".." in name:
        return None
    root = (Path(config_dir) / MODELS_DIR).resolve()
    file = (root / name).resolve()
    if file.parent != root or not file.is_file() or file.stat().st_size > MAX_BYTES:
        return None
    return file


class AureonModelView(HomeAssistantView):
    """GET one model; Home Assistant checks the session token or a signed path before this runs."""

    url = URL
    name = f"{DOMAIN}:aureon_models"
    requires_auth = True

    async def get(self, request: web.Request, name: str) -> web.StreamResponse:
        hass: HomeAssistant = request.app[KEY_HASS]
        file = await hass.async_add_executor_job(model_file, hass.config.config_dir, name)
        if file is None:
            raise web.HTTPNotFound
        return web.FileResponse(
            file,
            headers={
                "Content-Type": "model/gltf-binary",
                "Cache-Control": "private, max-age=3600",
                "X-Content-Type-Options": "nosniff",
            },
        )


CATALOG = "catalog.json"
_TYPE = re.compile(r"^[a-z][a-z0-9_]{0,40}$")
MAX_LIST = 300


def glb_bounds(file: Path) -> list[float] | None:
    """Size (x, y, z in metres) of a .glb from the min/max of its POSITION accessors and node translations/scales.

    Only the JSON chunk is read; rotations are not applied (a turned node gives an approximate box). None if unreadable.
    """
    try:
        with file.open("rb") as f:
            head = f.read(20)
            if len(head) < 20 or head[:4] != b"glTF":
                return None
            length, kind = struct.unpack("<II", head[12:20])
            if kind != 0x4E4F534A or length > 8 * 1024 * 1024:
                return None
            doc = json.loads(f.read(length))
        accessors = doc.get("accessors", [])
        meshes = doc.get("meshes", [])
        lo, hi = [float("inf")] * 3, [float("-inf")] * 3

        def visit(index: int, offset: list[float], scale: list[float], depth: int) -> None:
            if depth > 32 or index >= len(doc.get("nodes", [])):
                return
            node = doc["nodes"][index]
            t = node.get("translation", [0, 0, 0])
            s = node.get("scale", [1, 1, 1])
            off = [offset[k] + t[k] * scale[k] for k in range(3)]
            sc = [scale[k] * s[k] for k in range(3)]
            if "mesh" in node and node["mesh"] < len(meshes):
                for prim in meshes[node["mesh"]].get("primitives", []):
                    acc = prim.get("attributes", {}).get("POSITION")
                    if acc is None or acc >= len(accessors):
                        continue
                    a = accessors[acc]
                    if "min" not in a or "max" not in a:
                        continue
                    for k in range(3):
                        v1, v2 = off[k] + a["min"][k] * sc[k], off[k] + a["max"][k] * sc[k]
                        lo[k] = min(lo[k], v1, v2)
                        hi[k] = max(hi[k], v1, v2)
            for child in node.get("children", []):
                visit(child, off, sc, depth + 1)

        scenes = doc.get("scenes", [])
        roots = scenes[doc.get("scene", 0)].get("nodes", []) if scenes else range(len(doc.get("nodes", [])))
        for r in roots:
            visit(r, [0, 0, 0], [1, 1, 1], 0)
        if lo[0] == float("inf"):
            return None
        return [round(hi[k] - lo[k], 3) for k in range(3)]
    except (OSError, ValueError, KeyError, TypeError, IndexError, struct.error):
        return None


def _catalog(root: Path) -> dict[str, dict[str, Any]]:
    """Optional `catalog.json` next to the models: display name, furniture type, height above the floor, mirror."""
    try:
        raw = json.loads((root / CATALOG).read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}
    out: dict[str, dict[str, Any]] = {}
    files = raw.get("files", {}) if isinstance(raw, dict) else {}
    if not isinstance(files, dict):
        return {}
    for name, info in list(files.items())[:MAX_LIST]:
        if not isinstance(name, str) or not _NAME.match(name) or not isinstance(info, dict):
            continue
        entry: dict[str, Any] = {}
        if isinstance(info.get("name"), str):
            entry["name"] = info["name"][:80]
        if isinstance(info.get("type"), str) and _TYPE.match(info["type"]):
            entry["type"] = info["type"]
        if isinstance(info.get("mount_y"), (int, float)) and 0 <= info["mount_y"] <= 5:
            entry["mount_y"] = float(info["mount_y"])
        if info.get("mirror") is True:
            entry["mirror"] = True
        out[name] = entry
    return out


def list_models(config_dir: str) -> list[dict[str, Any]]:
    """The owner's models with their size (in the executor). Missing folder: empty list."""
    root = (Path(config_dir) / MODELS_DIR).resolve()
    if not root.is_dir():
        return []
    catalog = _catalog(root)
    out = []
    for file in sorted(root.iterdir())[:MAX_LIST]:
        if model_file(config_dir, file.name) is None:
            continue
        size = glb_bounds(file)
        if size is None:
            continue
        info = catalog.get(file.name, {})
        out.append(
            {
                "file": file.name,
                "url": URL.replace("{name}", file.name),
                "size": size,
                "bytes": file.stat().st_size,
                **info,
            }
        )
    return out


UPLOAD_URL = "/api/neonplan3d/aureon_models_upload"
MAX_UPLOAD = 120 * 1024 * 1024
MAX_MEMBERS = 400
MAX_CATALOG = 1024 * 1024


def _write_atomic(path: Path, data: bytes) -> None:
    tmp = path.with_name(f".{path.name}.part")
    tmp.write_bytes(data)
    os.replace(tmp, path)


def _valid_glb(data: bytes) -> bool:
    """A binary glTF within the size limit whose JSON chunk parses and holds at least one mesh."""
    if len(data) < 20 or data[:4] != b"glTF" or len(data) > MAX_BYTES:
        return False
    length, kind = struct.unpack("<II", data[12:20])
    if kind != 0x4E4F534A or 20 + length > len(data):
        return False
    try:
        doc = json.loads(data[20 : 20 + length])
    except ValueError:
        return False
    return isinstance(doc, dict) and bool(doc.get("meshes"))


def import_models(config_dir: str, data: bytes, name: str | None) -> dict[str, Any]:
    """Stores uploaded models (a .zip or one .glb) in <config>/aureon_models (in the executor).

    Only plain `.glb` names and `catalog.json` are taken from a zip (any folder inside it, the base name counts);
    everything else is skipped. Nothing is deleted: a model of the same name is replaced, catalog entries are merged.
    """
    root = (Path(config_dir) / MODELS_DIR).resolve()
    models: dict[str, bytes] = {}
    catalog_raw: bytes | None = None
    skipped: list[str] = []
    if data[:4] == b"glTF":
        if not name or not _NAME.match(name) or ".." in name:
            raise ValueError("name")
        models[name] = data
    elif data[:2] == b"PK":
        try:
            archive = zipfile.ZipFile(io.BytesIO(data))
        except zipfile.BadZipFile as err:
            raise ValueError("zip") from err
        infos = [i for i in archive.infolist() if not i.is_dir()]
        if len(infos) > MAX_MEMBERS or sum(i.file_size for i in infos) > MAX_UPLOAD * 3:
            raise ValueError("too_large")
        for info in infos:
            base = info.filename.replace("\\", "/").rsplit("/", 1)[-1]
            if base.startswith("._") or base.startswith("."):
                continue  # macOS resource forks and hidden files
            if base == CATALOG and info.file_size <= MAX_CATALOG:
                catalog_raw = archive.read(info)
            elif _NAME.match(base) and ".." not in base and info.file_size <= MAX_BYTES:
                models[base] = archive.read(info)
            else:
                skipped.append(base[:120])
    else:
        raise ValueError("format")
    bad = sorted(n for n, d in models.items() if not _valid_glb(d))
    for n in bad:
        del models[n]
    root.mkdir(parents=True, exist_ok=True)
    added, replaced = [], []
    for n, d in sorted(models.items()):
        (replaced if (root / n).exists() else added).append(n)
        _write_atomic(root / n, d)
    names = 0
    if catalog_raw is not None:
        try:
            incoming = json.loads(catalog_raw.decode("utf-8"))
        except (UnicodeDecodeError, ValueError):
            incoming = None
        files = incoming.get("files") if isinstance(incoming, dict) else None
        if isinstance(files, dict):
            try:
                current = json.loads((root / CATALOG).read_text(encoding="utf-8"))
            except (OSError, ValueError):
                current = {}
            merged = (
                current.get("files") if isinstance(current, dict) and isinstance(current.get("files"), dict) else {}
            )
            for key, info in list(files.items())[:MAX_LIST]:
                if isinstance(key, str) and _NAME.match(key) and ".." not in key and isinstance(info, dict):
                    merged[key] = {k: info[k] for k in ("name", "type", "mount_y", "mirror") if k in info}
                    names += 1
            _write_atomic(root / CATALOG, json.dumps({"files": merged}, ensure_ascii=False, indent=1).encode("utf-8"))
    return {"added": added, "replaced": replaced, "invalid": bad, "skipped": skipped[:50], "names": names}


class AureonModelUploadView(HomeAssistantView):
    """POST a .zip or one .glb (raw body, `?name=` for a single model); administrators only."""

    url = UPLOAD_URL
    name = f"{DOMAIN}:aureon_models_upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app[KEY_HASS]
        user = request.get("hass_user")
        if user is None or not user.is_admin:
            raise web.HTTPForbidden
        body = bytearray()
        async for chunk in request.content.iter_chunked(1 << 16):
            body += chunk
            if len(body) > MAX_UPLOAD:
                return self.json({"error": "too_large"}, status_code=413)
        try:
            result = await hass.async_add_executor_job(
                import_models, hass.config.config_dir, bytes(body), request.query.get("name")
            )
        except ValueError as err:
            return self.json({"error": str(err)}, status_code=400)
        return self.json(result)


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/aureon_models/list"})
@websocket_api.async_response
async def ws_list_models(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """The editor's "My furniture": every own model in <config>/aureon_models (signed-in users, read only)."""
    models = await hass.async_add_executor_job(list_models, hass.config.config_dir)
    connection.send_result(msg["id"], {"models": models})


@callback
def async_register(hass: HomeAssistant) -> None:
    """Register the views and the list command once per run (views cannot be unregistered)."""
    if hass.data.get(_REGISTERED):
        return
    hass.http.register_view(AureonModelView())
    hass.http.register_view(AureonModelUploadView())
    websocket_api.async_register_command(hass, ws_list_models)
    hass.data[_REGISTERED] = True
