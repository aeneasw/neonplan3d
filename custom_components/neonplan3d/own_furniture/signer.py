"""The own signing key: added to the pack check in memory as a studio key, and used to sign the own pack.

A studio key is NeonPlan's own mechanism for customers' furniture: NeonPlan accepts packs signed with it
only when their id starts with "studio." and they carry neither Pro features nor modules. Before the key is
used, a self-test signs exactly such forbidden packs and checks that NeonPlan refuses them - if NeonPlan
ever changed that check, the key is taken out again and nothing is signed.

No Home Assistant imports here, so the tests can run it against packs.py alone.
"""

from __future__ import annotations

import base64
import hashlib
import json
from types import ModuleType
from typing import Any

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

from .const import PACK_ID, PACK_NAME, PUBLISHER


class SignerError(Exception):
    """The key cannot be used; `code` says why."""

    def __init__(self, code: str, detail: str = "") -> None:
        super().__init__(f"{code}: {detail}" if detail else code)
        self.code = code
        self.detail = detail


_TEST_ITEM = {
    "id": "selbsttest",
    "name": {"de": "Selbsttest"},
    "size": [0.1, 0.1, 0.1],
    "parts": [{"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "body"}],
}


class Signer:
    """Signs the own pack with a private key and registers its public half with NeonPlan."""

    def __init__(self, seed: bytes, packs: ModuleType) -> None:
        self._private = Ed25519PrivateKey.from_private_bytes(seed)
        raw = self._private.public_key().public_bytes(serialization.Encoding.Raw, serialization.PublicFormat.Raw)
        self.public = base64.b64encode(raw).decode()
        self.key_id = hashlib.sha256(raw).hexdigest()[:12]
        self.packs = packs
        self.installed = False

    # --- registration -------------------------------------------------------------------------------

    def install(self) -> None:
        """Add the key as a studio key, then prove that NeonPlan limits it; raises SignerError."""
        keys = getattr(self.packs, "PACK_PUBLIC_KEYS", None)
        studio = getattr(self.packs, "STUDIO_KEYS", None)
        if not isinstance(keys, dict) or not isinstance(studio, set):
            raise SignerError("unsupported", "PACK_PUBLIC_KEYS/STUDIO_KEYS")
        for name in ("verify_pack", "validate_payload", "canonical", "PackError"):
            if not hasattr(self.packs, name):
                raise SignerError("unsupported", name)
        keys[self.key_id] = self.public
        studio.add(self.key_id)
        self.installed = True
        try:
            self._self_test()
        except SignerError:
            self.uninstall()
            raise
        except Exception as err:  # anything unexpected: better not sign at all
            self.uninstall()
            raise SignerError("self_test_failed", repr(err)) from err

    def uninstall(self) -> None:
        """Take the key out of NeonPlan again (installed furniture stays)."""
        keys = getattr(self.packs, "PACK_PUBLIC_KEYS", {})
        if isinstance(keys, dict) and keys.get(self.key_id) == self.public:
            del keys[self.key_id]
        studio = getattr(self.packs, "STUDIO_KEYS", None)
        if isinstance(studio, set):
            studio.discard(self.key_id)
        self.installed = False

    def _self_test(self) -> None:
        packs = self.packs
        good = self._payload([_TEST_ITEM], "studio.selbsttest", "Selbsttest", 1)
        try:
            # without a key list: exactly what NeonPlan's import does
            packs.verify_pack(self._signed(good))
        except packs.PackError as err:
            raise SignerError("self_test_failed", f"own furniture refused: {err.code}") from err
        feature = (list(getattr(packs, "KNOWN_FEATURES", [])) or ["weather"])[0]
        forbidden = {
            "foreign_id": {**good, "id": "mastershort.selbsttest"},
            "pro_feature": {**good, "features": [feature]},
            "module": {**good, "items": [], "module": {"api": 1, "kind": "voice", "code": "export default {};"}},
        }
        for case, payload in forbidden.items():
            try:
                packs.verify_pack(self._signed(payload))
            except packs.PackError:
                continue
            raise SignerError("not_restricted", case)

    # --- signing ------------------------------------------------------------------------------------

    @staticmethod
    def _payload(items: list[dict[str, Any]], pack_id: str, name: str, release: int) -> dict[str, Any]:
        return {
            "format": "fp3dpack",
            "version": 1,
            "id": pack_id,
            "name": name,
            "publisher": PUBLISHER,
            "description": "Eigene Möbel, privat signiert",
            "release": release,
            "licensee": None,
            "instance": None,
            "items": items,
        }

    def _signed(self, payload: dict[str, Any]) -> str:
        sig = base64.b64encode(self._private.sign(self.packs.canonical(payload))).decode()
        return json.dumps({"payload": payload, "signature": {"key": self.key_id, "sig": sig}}, ensure_ascii=False)

    def pack(self, items: list[dict[str, Any]], release: int, name: str = PACK_NAME) -> str:
        """The signed own pack, checked exactly like NeonPlan checks it on import."""
        if not self.installed:
            raise SignerError("not_active")
        payload = self._payload(items, PACK_ID, name, release)
        try:
            self.packs.validate_payload(payload)
        except self.packs.PackError as err:
            raise SignerError("invalid", err.detail or err.code) from err
        text = self._signed(payload)
        try:
            self.packs.verify_pack(text)
        except self.packs.PackError as err:
            raise SignerError("invalid", err.detail or err.code) from err
        return text

    def check_item(self, item: dict[str, Any]) -> dict[str, Any]:
        """One item checked with NeonPlan's own schema; raises SignerError("invalid")."""
        try:
            return self.packs.ITEM_SCHEMA(item)
        except Exception as err:  # voluptuous.Invalid, without importing voluptuous here
            raise SignerError("invalid", str(err)) from err
