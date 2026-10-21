"""Own furniture: models from Blender, Rhino and co. turned into pack furniture, on the panel's "Eigene Möbel" page.

On every start an own key (made once per installation, kept in .storage) is added to the pack check - only in
memory, as a studio key, which NeonPlan limits to "studio.*" furniture without Pro features or modules. A self-test
proves that limit before anything is signed. All own furniture lives in one pack, imported through the normal
pack import.
"""

from __future__ import annotations

import base64
from dataclasses import dataclass, field
import logging
import os
import time
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .. import packs
from .const import DATA_OWN_FURNITURE, LEGACY_STORAGE_KEY_SEED, STORAGE_KEY_SEED
from .library import Library
from .signer import Signer, SignerError
from .upload import Session, UploadView
from .websocket import async_register_commands

_LOGGER = logging.getLogger(__name__)
_VIEW_REGISTERED = f"{DATA_OWN_FURNITURE}_view"

__all__ = ["Runtime", "async_register", "async_setup", "async_unload"]


@dataclass
class Runtime:
    """What the page's commands need."""

    library: Library
    signer: Signer | None = None
    key_id: str = ""
    error: str | None = None
    detail: str = ""
    sessions: dict[str, Session] = field(default_factory=dict)


async def _seed(hass: HomeAssistant) -> bytes:
    """The private key's seed: made once, kept in .storage (and so in every Home Assistant backup)."""
    store: Store[dict[str, Any]] = Store(hass, 1, STORAGE_KEY_SEED, private=True)
    data = await store.async_load() or {}
    if not data.get("seed"):
        # the key of the former separate integration: the pack it signed stays valid
        legacy: Store[dict[str, Any]] = Store(hass, 1, LEGACY_STORAGE_KEY_SEED, private=True)
        data = await legacy.async_load() or {}
        if not data.get("seed"):
            data = {"seed": base64.b64encode(os.urandom(32)).decode(), "created": time.time()}
        await store.async_save(data)
    return base64.b64decode(data["seed"])


def async_register(hass: HomeAssistant) -> None:
    """The websocket commands and the upload (once per run: views cannot be unregistered)."""
    async_register_commands(hass)
    if not hass.data.get(_VIEW_REGISTERED):
        hass.http.register_view(UploadView())
        hass.data[_VIEW_REGISTERED] = True


async def async_setup(hass: HomeAssistant) -> None:
    """Load the library and add the own key to the pack check."""
    library = Library(hass)
    await library.async_load()
    runtime = Runtime(library)
    signer = Signer(await _seed(hass), packs)
    runtime.key_id = signer.key_id
    try:
        signer.install()
    except SignerError as err:
        runtime.error, runtime.detail = err.code, err.detail
        _LOGGER.warning("Own furniture key not active: %s %s", err.code, err.detail)
    else:
        runtime.signer = signer
    hass.data[DATA_OWN_FURNITURE] = runtime


def async_unload(hass: HomeAssistant) -> None:
    """Take the key out again; imported furniture stays."""
    runtime: Runtime | None = hass.data.pop(DATA_OWN_FURNITURE, None)
    if runtime and runtime.signer:
        runtime.signer.uninstall()
