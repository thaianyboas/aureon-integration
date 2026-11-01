"""Narrow native plan bindings. Geometry and assets are never accepted from this API."""

from __future__ import annotations

from copy import deepcopy
import re
from typing import Any

ROOM_FIELDS = {
    "area_id": None,
    "climate.temperature": {"sensor"},
    "climate.humidity": {"sensor"},
    "climate.co2": {"sensor"},
}
FURNITURE_FIELDS = {
    "entity": {
        "light",
        "switch",
        "fan",
        "climate",
        "media_player",
        "vacuum",
        "camera",
        "alarm_control_panel",
        "binary_sensor",
        "sensor",
        "input_boolean",
        "lock",
        "cover",
        "water_heater",
        "plant",
    },
    "power": {"sensor"},
    "state_entity": {"binary_sensor", "input_boolean", "person", "device_tracker", "switch", "sensor"},
    "room_sensor": {"sensor"},
    "status": {"sensor", "binary_sensor"},
}
OPENING_FIELDS = {
    "contact": {"binary_sensor", "sensor", "input_boolean"},
    "contact2": {"binary_sensor", "sensor", "input_boolean"},
    "tilt": {"binary_sensor", "sensor"},
    "cover": {"cover"},
    "lock": {"lock"},
    "position": {"sensor"},
}
BINDING_FIELDS = {"room": ROOM_FIELDS, "furniture": FURNITURE_FIELDS, "opening": OPENING_FIELDS}
COLLECTIONS = {"room": "rooms", "furniture": "furniture", "opening": "openings"}


def bind_plan(
    building: dict[str, Any], floor_id: str, kind: str, target_id: str, field: str, value: str | None
) -> dict[str, Any]:
    """Copy exactly one permitted binding, refusing missing or ambiguous targets."""
    fields = BINDING_FIELDS.get(kind, {})
    if field not in fields:
        raise ValueError("Unsupported binding field")
    if value is not None and (not isinstance(value, str) or len(value) > 255):
        raise ValueError("Invalid binding value")
    if (
        value not in (None, "none")
        and field != "area_id"
        and (not re.fullmatch(r"[a-z_]+\.[a-z0-9_]+", value) or value.split(".")[0] not in fields[field])
    ):
        raise ValueError("Incompatible entity domain")
    if field == "area_id" and value == "none":
        value = None
    copy = deepcopy(building)
    floors = [floor for floor in copy.get("floors", []) if floor.get("id") == floor_id]
    targets = [
        target for floor in floors for target in floor.get(COLLECTIONS[kind], []) if target.get("id") == target_id
    ]
    if len(floors) != 1 or len(targets) != 1:
        raise ValueError("Plan target missing or ambiguous; refresh the plan")
    target = targets[0]
    if field.startswith("climate."):
        target["climate"] = {**(target.get("climate") or {}), field.split(".")[1]: value}
    else:
        target[field] = value
    return copy
