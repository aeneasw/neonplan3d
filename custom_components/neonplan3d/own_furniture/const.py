"""Constants of the own furniture (models from Blender, Rhino and co. turned into pack furniture)."""

from __future__ import annotations

from ..const import DOMAIN

# hass.data key of the runtime (the key and the library)
DATA_OWN_FURNITURE = f"{DOMAIN}_own_furniture"
WS_PREFIX = f"{DOMAIN}/own_furniture"
UPLOAD_URL = f"/api/{DOMAIN}/own_furniture/upload"

STORAGE_KEY_ITEMS = f"{DOMAIN}.own_furniture"
STORAGE_KEY_SEED = f"{DOMAIN}.own_furniture_key"
# the stores of the separate integration "NeonPlan 3D - Eigene Möbel" this replaces: taken over once, so the key
# (and with it the pack already imported) and the furniture stay
LEGACY_STORAGE_KEY_ITEMS = "neonplan_eigene_moebel.moebel"
LEGACY_STORAGE_KEY_SEED = "neonplan_eigene_moebel.schluessel"

# the one pack that carries all own furniture: NeonPlan only lets a studio key sign "studio.*" packs
PACK_ID = "studio.eigene-moebel"
PACK_NAME = "Eigene Möbel"
PUBLISHER = "Privat"

# uploads: pieces of at most 8 MB (Home Assistant takes at most 16 MB per request)
CHUNK_BYTES = 8 * 1024 * 1024
MAX_UPLOAD_BYTES = 300 * 1024 * 1024
MAX_SESSIONS = 3
SESSION_SECONDS = 3600
