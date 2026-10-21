"""Upload of model files in pieces (Home Assistant takes at most 16 MB per request)."""

from __future__ import annotations

from dataclasses import dataclass, field
from http import HTTPStatus
from pathlib import PurePosixPath
import re
import time
from typing import TYPE_CHECKING, Any

from aiohttp import web
from homeassistant.components.http import KEY_HASS, KEY_HASS_USER, HomeAssistantView

from ..const import DOMAIN
from .const import CHUNK_BYTES, DATA_OWN_FURNITURE, MAX_SESSIONS, MAX_UPLOAD_BYTES, SESSION_SECONDS, UPLOAD_URL

if TYPE_CHECKING:
    from . import Runtime

ALLOWED = (".glb", ".gltf", ".bin", ".obj", ".mtl", ".stl", ".json", ".fp3dpack")
_SESSION = re.compile(r"^[A-Za-z0-9-]{8,64}$")


@dataclass
class Session:
    """The files of one upload and, once read, the model."""

    files: dict[str, bytearray] = field(default_factory=dict)
    created: float = field(default_factory=time.monotonic)
    size: int = 0
    model: Any = None
    name: str = ""


def clean_name(name: str) -> str | None:
    base = PurePosixPath(name.replace("\\", "/")).name.strip()[:120]
    if not base or PurePosixPath(base.lower()).suffix not in ALLOWED:
        return None
    return base


def sessions_of(runtime: Runtime) -> dict[str, Session]:
    """The open uploads, without the ones that are too old."""
    now = time.monotonic()
    for key in [k for k, s in runtime.sessions.items() if now - s.created > SESSION_SECONDS]:
        del runtime.sessions[key]
    return runtime.sessions


class UploadView(HomeAssistantView):
    """POST ?session=…&file=…&offset=… with a piece of the file as body."""

    url = UPLOAD_URL
    name = f"api:{DOMAIN}:own_furniture:upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass = request.app[KEY_HASS]
        user = request.get(KEY_HASS_USER)
        if user is None or not user.is_admin:
            return self.json_message("admin only", HTTPStatus.FORBIDDEN)
        runtime: Runtime | None = hass.data.get(DATA_OWN_FURNITURE)
        if runtime is None:
            return self.json_message("not loaded", HTTPStatus.SERVICE_UNAVAILABLE)
        sid = request.query.get("session", "")
        name = clean_name(request.query.get("file", ""))
        try:
            offset = int(request.query.get("offset", "0"))
        except ValueError:
            offset = -1
        if not _SESSION.match(sid) or name is None or offset < 0:
            return self.json_message("bad request", HTTPStatus.BAD_REQUEST)
        body = await request.read()
        if len(body) > CHUNK_BYTES:
            return self.json_message("piece too large", HTTPStatus.REQUEST_ENTITY_TOO_LARGE)

        sessions = sessions_of(runtime)
        session = sessions.get(sid)
        if session is None:
            while len(sessions) >= MAX_SESSIONS:
                del sessions[min(sessions, key=lambda k: sessions[k].created)]
            session = sessions[sid] = Session()
        buf = session.files.setdefault(name, bytearray())
        if offset != len(buf):
            return self.json_message(f"expected offset {len(buf)}", HTTPStatus.CONFLICT)
        if session.size + len(body) > MAX_UPLOAD_BYTES:
            del sessions[sid]
            return self.json_message("upload too large", HTTPStatus.REQUEST_ENTITY_TOO_LARGE)
        buf.extend(body)
        session.size += len(body)
        session.model = None
        return self.json({"received": len(buf)})
