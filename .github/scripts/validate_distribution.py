#!/usr/bin/env python3
"""Validate the AUREON integration distribution repository (no network, no Home Assistant, standard library only).

Each check prints PASS or a FAIL with the reason and how to fix it; the script exits 1 if any check failed, so the
workflow reports every problem of a run at once instead of stopping at the first. Run locally from the repository
root with: python3 .github/scripts/validate_distribution.py
"""
from __future__ import annotations

import hashlib
import json
import os
import py_compile
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PACKAGE = ROOT / "custom_components" / "neonplan3d"
FAILURES: list[str] = []
GH = os.environ.get("GITHUB_ACTIONS") == "true"


def fail(check: str, reason: str, fix: str, file: str | None = None) -> None:
    FAILURES.append(check)
    print(f"FAIL [{check}] {reason}\n     How to fix: {fix}")
    if GH:  # an annotation on the run page, pointing at the file when known
        where = f" file={file}" if file else ""
        print(f"::error{where},title={check}::{reason} — {fix}")


def ok(check: str, detail: str) -> None:
    print(f"PASS [{check}] {detail}")


def load_json(path: Path, check: str):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        fail(check, f"{path.relative_to(ROOT)} is missing", "regenerate the package from aureon-dashboard (see CI.md)", str(path.relative_to(ROOT)))
    except json.JSONDecodeError as err:
        fail(check, f"{path.relative_to(ROOT)} is not valid JSON: {err}", "fix the JSON syntax", str(path.relative_to(ROOT)))
    return None


def check_repository_files() -> None:
    missing = [p for p in ("README.md", "LICENSE", "hacs.json", ".github/workflows/candidate.yml", ".github/workflows/validate.yml") if not (ROOT / p).is_file()]
    if missing:
        fail("repository", f"missing files: {', '.join(missing)}", "restore them from git history")
    else:
        ok("repository", "README, LICENSE, hacs.json and both workflows present")


def check_hacs() -> None:
    data = load_json(ROOT / "hacs.json", "hacs.json")
    if data is None:
        return
    problems = []
    if not isinstance(data.get("name"), str) or not data["name"].strip():
        problems.append("'name' must be a non-empty string")
    if data.get("content_in_root") is not False:
        problems.append("'content_in_root' must be false (the integration lives in custom_components/)")
    unknown = set(data) - {"name", "content_in_root", "render_readme", "homeassistant", "hacs", "zip_release", "filename", "hide_default_branch", "country", "persistent_directory"}
    if unknown:
        problems.append(f"unknown keys {sorted(unknown)}")
    if problems:
        fail("hacs.json", "; ".join(problems), "correct hacs.json to the HACS integration schema", "hacs.json")
    else:
        ok("hacs.json", f"HACS integration metadata valid ({data['name']})")


def check_integration_manifest() -> dict | None:
    if not PACKAGE.is_dir():
        ok("integration", "no package committed (allowed: repository without owner test package)")
        return None
    dirs = [p.name for p in (ROOT / "custom_components").iterdir() if p.is_dir()]
    if dirs != ["neonplan3d"]:
        fail("integration", f"custom_components must hold exactly one integration, found {sorted(dirs)}", "HACS installs one integration per repository; remove the others")
    manifest = load_json(PACKAGE / "manifest.json", "integration manifest")
    if manifest is None:
        return None
    problems = []
    for key in ("domain", "name", "codeowners", "documentation", "issue_tracker", "version", "iot_class", "integration_type"):
        if key not in manifest:
            problems.append(f"missing '{key}'")
    if manifest.get("domain") != "neonplan3d":
        problems.append(f"domain is {manifest.get('domain')!r}, expected 'neonplan3d'")
    if not re.fullmatch(r"\d+\.\d+\.\d+([.-][0-9A-Za-z.-]+)?", str(manifest.get("version", ""))):
        problems.append(f"version {manifest.get('version')!r} is not a version string HACS accepts")
    if problems:
        fail("integration manifest", "; ".join(problems), "the package must be built unchanged from aureon-dashboard", "custom_components/neonplan3d/manifest.json")
    else:
        ok("integration manifest", f"domain neonplan3d, version {manifest['version']}")
    # every Python file must compile (a syntax error would only show when Home Assistant loads it)
    bad = []
    with tempfile.TemporaryDirectory() as tmp:
        for py in sorted(PACKAGE.rglob("*.py")):
            try:
                py_compile.compile(str(py), cfile=os.path.join(tmp, "x.pyc"), doraise=True)
            except py_compile.PyCompileError as err:
                bad.append(f"{py.relative_to(ROOT)}: {err.msg.strip().splitlines()[-1]}")
    if bad:
        fail("python syntax", "; ".join(bad), "fix the source in aureon-dashboard and repackage")
    else:
        ok("python syntax", f"{len(list(PACKAGE.rglob('*.py')))} Python files compile")
    # JSON files shipped with the integration (translations, strings, language files)
    broken = []
    for js in sorted(PACKAGE.rglob("*.json")):
        try:
            json.loads(js.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, UnicodeDecodeError) as err:
            broken.append(f"{js.relative_to(ROOT)}: {err}")
    if broken:
        fail("integration json", "; ".join(broken), "fix the file in aureon-dashboard and repackage")
    else:
        ok("integration json", "all JSON files in the package parse")
    return manifest


def check_package_provenance(manifest: dict | None) -> None:
    if not PACKAGE.is_dir():
        return
    pin_file = ROOT / "SOURCE_COMMIT"
    pin = pin_file.read_text(encoding="utf-8").strip() if pin_file.is_file() else ""
    if not re.fullmatch(r"[0-9a-f]{40}", pin):
        fail("SOURCE_COMMIT", f"must be one full 40-character commit id, found {pin!r}", "write the dashboard commit the package was built from", "SOURCE_COMMIT")
        return
    package = load_json(ROOT / "MANIFEST.json", "MANIFEST.json")
    if package is None:
        return
    if package.get("source_commit") != pin:
        fail(
            "source pin",
            f"MANIFEST.json was built from {str(package.get('source_commit'))[:12]} but SOURCE_COMMIT names {pin[:12]}: the committed files may not be the code of the pinned commit",
            "commit the dashboard changes FIRST, then run scripts/package-hacs-integration-candidate.mjs (it refuses uncommitted sources) and copy the whole package including SOURCE_COMMIT",
            "MANIFEST.json",
        )
    else:
        ok("source pin", f"package built from the pinned commit {pin[:12]}")
    if package.get("domain") != "neonplan3d" or (manifest and package.get("version") != manifest.get("version")):
        fail("package manifest", "MANIFEST.json domain/version do not match the integration manifest", "repackage from aureon-dashboard", "MANIFEST.json")
    if package.get("installation_approved") is not False:
        fail("release guard", "MANIFEST.json must keep installation_approved: false (owner test package, not a release)", "repackage; releases need the documented approval", "MANIFEST.json")
    # file list and checksums: every packaged file is what was built, nothing added or missing
    listed = {f["path"]: f["sha256"] for f in package.get("files", []) if isinstance(f, dict) and "path" in f and "sha256" in f}
    listed = {p: h for p, h in listed.items() if p.startswith("custom_components/")}
    actual = {}
    for path in PACKAGE.rglob("*"):
        if path.is_file() and "__pycache__" not in path.parts and not path.name.endswith(".pyc"):
            actual[str(path.relative_to(ROOT)).replace(os.sep, "/")] = hashlib.sha256(path.read_bytes()).hexdigest()
    missing = sorted(set(listed) - set(actual))
    extra = sorted(set(actual) - set(listed))
    changed = sorted(p for p in set(listed) & set(actual) if listed[p] != actual[p])
    if missing or extra or changed:
        parts = []
        if missing:
            parts.append(f"missing {missing[:5]}")
        if extra:
            parts.append(f"not in MANIFEST {extra[:5]}")
        if changed:
            parts.append(f"checksum differs {changed[:5]}")
        fail("package files", "; ".join(parts), "copy the complete package generated by the packaging script, do not edit files by hand", "MANIFEST.json")
    else:
        ok("package files", f"{len(actual)} files match MANIFEST.json checksums")
    required = ["__init__.py", "manifest.json", "frontend/neonplan3d.js", "frontend/neonplan3d-3d.js", "frontend/neonplan3d-editor.js"]
    absent = [r for r in required if not (PACKAGE / r).is_file()]
    if absent:
        fail("required assets", f"missing {absent}", "repackage from aureon-dashboard")
    else:
        ok("required assets", "integration entry point and frontend bundles present")


def check_secrets() -> None:
    # a cheap guard against obvious credentials in the public distribution (the dashboard repo has the full gate)
    pattern = re.compile(r"(ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----|eyJhbGciOi[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.)")
    hits = []
    for path in ROOT.rglob("*"):
        if ".git" in path.parts or not path.is_file() or path.stat().st_size > 5_000_000:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        if pattern.search(text):
            hits.append(str(path.relative_to(ROOT)))
    if hits:
        fail("secrets", f"credential-like strings in {hits[:5]}", "remove them and rotate the credential")
    else:
        ok("secrets", "no token, key or private-key patterns found")


def main() -> int:
    check_repository_files()
    check_hacs()
    manifest = check_integration_manifest()
    check_package_provenance(manifest)
    check_secrets()
    if FAILURES:
        print(f"\n{len(FAILURES)} check(s) failed: {', '.join(FAILURES)}. See CI.md for diagnosis steps.")
        return 1
    print("\nPASS: AUREON integration distribution is consistent (owner test package, no automatic installation).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
