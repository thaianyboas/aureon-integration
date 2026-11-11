"""AUREON: smaller and fewer downloads for the Floor Studio (owner 2026-11-11: "muito lento").

Bundles, language files and furniture models are sent gzip-compressed when the browser accepts it (about a third of
the size; the 3D bundle goes from 1 MB to 0.3 MB). The compressed bytes are kept in memory, keyed by path, size and
modification time, so an updated file is compressed again. Files whose address carries a content hash (``?v=``) may be
kept by the browser, so opening the Floor Studio again does not ask for them at all.
"""

from __future__ import annotations

from collections import OrderedDict
import gzip
import mimetypes
from pathlib import Path

from aiohttp import web
from homeassistant.core import HomeAssistant

COMPRESSIBLE = {".js", ".json", ".glb", ".gltf", ".txt", ".svg", ".css", ".html", ".obj", ".mtl"}
MAX_CACHE_BYTES = 80 * 1024 * 1024
MAX_FILE_BYTES = 60 * 1024 * 1024
NO_CACHE = "no-cache"
IMMUTABLE = "public, max-age=31536000, immutable"

_DATA = "aureon_floor_fast_cache"


def _compress(file: Path) -> tuple[bytes, tuple[str, int, int]] | None:
    """The gzip bytes of a file and its key (in the executor); None for files too large to keep."""
    stat = file.stat()
    if stat.st_size > MAX_FILE_BYTES:
        return None
    # mtime=0: the same file always gives the same bytes
    return gzip.compress(file.read_bytes(), compresslevel=6, mtime=0), (str(file), stat.st_mtime_ns, stat.st_size)


def _key(file: Path) -> tuple[str, int, int]:
    stat = file.stat()
    return (str(file), stat.st_mtime_ns, stat.st_size)


async def async_file_response(
    hass: HomeAssistant,
    request: web.Request,
    file: Path,
    cache_control: str,
    content_type: str | None = None,
    extra_headers: dict[str, str] | None = None,
) -> web.StreamResponse:
    """Send a file, gzip-compressed when the browser accepts it and the type compresses well."""
    headers = {"Cache-Control": cache_control, **(extra_headers or {})}
    accepts_gzip = "gzip" in request.headers.get("Accept-Encoding", "").lower()
    if not accepts_gzip or file.suffix.lower() not in COMPRESSIBLE:
        if content_type:
            headers["Content-Type"] = content_type
        return web.FileResponse(file, headers=headers)
    cache: OrderedDict[tuple[str, int, int], bytes] = hass.data.setdefault(_DATA, OrderedDict())
    key = await hass.async_add_executor_job(_key, file)
    etag = f'"{key[1]:x}-{key[2]:x}-gz"'
    headers.update({"ETag": etag, "Vary": "Accept-Encoding"})
    if request.headers.get("If-None-Match") == etag:
        return web.Response(status=304, headers=headers)
    body = cache.get(key)
    if body is None:
        result = await hass.async_add_executor_job(_compress, file)
        if result is None:
            if content_type:
                headers["Content-Type"] = content_type
            return web.FileResponse(file, headers=headers)
        body, key = result
        for old in [k for k in cache if k[0] == key[0]]:
            cache.pop(old)
        cache[key] = body
        while sum(len(b) for b in cache.values()) > MAX_CACHE_BYTES and len(cache) > 1:
            cache.popitem(last=False)
    else:
        cache.move_to_end(key)
    kind = content_type or mimetypes.guess_type(file.name)[0] or "application/octet-stream"
    return web.Response(body=body, headers={**headers, "Content-Type": kind, "Content-Encoding": "gzip"})


def frontend_cache_control(request: web.Request, path: str, main_bundle: str) -> str:
    """Files with a content hash in the address may be kept; the main bundle and everything else is checked."""
    if request.query.get("v") and path != main_bundle:
        return IMMUTABLE
    return NO_CACHE
