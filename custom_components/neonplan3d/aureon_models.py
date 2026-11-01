"""AUREON: the owner's own furniture models (.glb), served to signed-in Home Assistant users only.

Files live in `<config>/aureon_models/` (outside `www`, so `/local` never serves them). Any authenticated user may
read them, as with the building itself; anonymous requests get 401 from Home Assistant's auth middleware.
"""

from __future__ import annotations

from pathlib import Path
import re

from aiohttp import web
from homeassistant.components.http import KEY_HASS, HomeAssistantView
from homeassistant.core import HomeAssistant

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


def async_register(hass: HomeAssistant) -> None:
    """Register the view once per run (views cannot be unregistered)."""
    if hass.data.get(_REGISTERED):
        return
    hass.http.register_view(AureonModelView())
    hass.data[_REGISTERED] = True
