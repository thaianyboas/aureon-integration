# AUREON Integration

Dedicated **HACS Integration distribution repository** for the AUREON Floor Studio Python backend and NeonPlan3D frontend assets.

**Status: owner test package.** `master` carries the generated `custom_components/aureon_floor` package built from the dashboard commit in `SOURCE_COMMIT`, for the owner's own Home Assistant. It is not a final release and not a visual approval.

- **Own domain `aureon_floor` (since 2026-11-05, owner decision).** AUREON Floor Studio is separate from the official NeonPlan 3D: own folder, WebSocket commands, URLs (`/aureon_floor_static`, panel `/aureon-floor-studio`) and stores (`.storage/aureon_floor.*`). An update of the official integration can no longer replace it. On first start it **copies** plan, pictures, history, packs, pack licence, Assist and locating settings from `.storage/neonplan3d.*` (or the older `floorplan_3d.*`); those stores are never changed or deleted. Its own stores are never overwritten by a later copy.
- The browser element names (`neonplan3d-panel`, `neonplan3d-card`) stay those of NeonPlan, so existing dashboard cards keep working. Therefore the official NeonPlan 3D should not stay installed next to it; when it is, AUREON shows a notification asking to remove it.
- Add `https://github.com/thaianyboas/aureon-integration` in HACS as a custom repository of type *Integration*, branch `master`. Make a full Home Assistant backup before switching.
- See [OWNER_TEST_2026-11-01.md](https://github.com/thaianyboas/aureon-dashboard/blob/master/OWNER_TEST_2026-11-01.md).

## Source of truth

The authoritative source, tests and build scripts are in [AUREON Dashboard](https://github.com/thaianyboas/aureon-dashboard), branch `master`. This repository is for the eventual distribution of a reviewed, generated integration package. Do not maintain a second independent source fork.

## CI and publishing

See [CI.md](CI.md): what the two workflows prove, the publish order (commit the dashboard first, then package) and how to diagnose a failure.

## Candidate build

The [Prepare AUREON integration candidate](../../actions/workflows/candidate.yml) workflow runs on pushes to `master` and can also be started manually. It checks out the exact dashboard commit recorded in `SOURCE_COMMIT`, installs locked dependencies, runs frontend/module/backend and publication-gate tests, rebuilds and verifies committed bundles, packages the integration with the upstream license and source provenance, checks its checksums and migration contract, and uploads a **review-only Actions artifact**. It does not commit generated integration files, publish a release, or change any Home Assistant installation.

## Safety

- Production migration and rollback are being validated by the owner's test; keep a full backup.
- The integration uses its own domain `aureon_floor`; the official NeonPlan 3D should still not be installed next to it (shared browser element names).
- Do not upload apartment floorplans, tokens, licenses, or paid asset packs to this public repository.
- Preserve stable AUREON Dashboard v0.28.0 until release gates pass.
- No Home Assistant runtime test or HACS installation is claimed.

See [distribution strategy](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/DISTRIBUTION_TARGET.md) and [migration and rollback](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/NEONPLAN_MIGRATION_AND_ROLLBACK.md).

## Development branch

Verified changes are published directly to `master`, without development branches or releases. `main` is retained as the original preparation checkpoint. The repository remains unpromoted: no `custom_components` installation payload is published on either branch. `SOURCE_COMMIT` identifies a review candidate, not installation approval.

## Current review candidate

The pinned source includes shared per-user platform pages, bounded SpotifyPlus category/pagination browsing and a physical Real rendering path. Browser artifacts include synthetic page layouts all five renderer modes and native editor drawing/undo/round-trip checks, alongside the generated integration package. See [source validation and remaining work](https://github.com/thaianyboas/aureon-dashboard/blob/70235d3877bab23509877c0739c2b005208bffb5/floor-studio/PLATFORM_VALIDATION_2026-10-30.md). These tests do not establish real Home Assistant, device, streaming, migration or visual acceptance. Development and production acceptance remain incomplete; stable HACS promotion remains blocked.

Share-template exports now remove nested HA links, local module/action/media settings and personal image rules. Full backups preserve the owner's bindings. This does not publish or anonymize a floor plan automatically.

## Native editor fidelity and associations

The latest source also embeds the original native card in Startseite and preserves the shared music controller, destination and dashboard shell across internal navigation. See the [implementation checkpoint](https://github.com/thaianyboas/aureon-dashboard/blob/7995e8e3c160139c83e060e29b095201bdae0844/floor-studio/HOME_MEDIA_CHECKPOINT_2026-10-31.md). Premium room images, private uploads and native room thumbnails remain pending; visual and production acceptance remain incomplete.

The pinned candidate adds native room/object/opening bindings with server admin validation, revision conflict handling and isolated persistence tests. It audits all 615 entries of the supplied NeonPlan3D 2.0.7 ZIP and records source invariants plus ten side-by-side native editor scenarios. Official private licensing APIs and supporting ESP32/pack-signing sources are restored; storefront calls remain absent from public UI and startup. See the [fidelity matrix](https://github.com/thaianyboas/aureon-dashboard/blob/70235d3877bab23509877c0739c2b005208bffb5/floor-studio/NEONPLAN_FIDELITY_AUDIT.md). This is not a 100% fidelity, completed visual design or installation claim. No intermediate Home Assistant test is requested.

## Switching from the earlier package (domain `neonplan3d`) — 2026-11-05

Before 2026-11-05 this package and the official *NeonPlan 3D* both installed into `custom_components/neonplan3d`, so
an update of the official one overwrote AUREON. Switching to the separated package:

1. Full Home Assistant backup.
2. HACS: remove the official *NeonPlan 3D* (if listed) and redownload *AUREON Floor Studio*; restart Home Assistant.
3. Settings → Devices & services → Add integration → **AUREON Floor Studio** (once). The plan is copied over.
4. Check the plan in the sidebar entry *AUREON Floor Studio*; then delete the old *NeonPlan 3D* entry in Devices &
   services and, if HACS left it, the folder `custom_components/neonplan3d`. `.storage/neonplan3d.*` stays as a copy.

## Imported plan outline editing — 2026-11-02

Owner-requested editor update, built from the exact revision in SOURCE_COMMIT.
In the 2D editor, select a room and enable **Edit plan outline**
(**Editar contorno da planta** / **Grundrisskontur bearbeiten**). Walls then take
priority over nearby furniture and openings; turn this off to select objects
normally. Drag the visible wall or its corner handles, or pick any numbered edge
in the room inspector and edit its endpoint coordinates. Remove/restore a wall
without deleting its room or floor, including exterior walls and both sides of
shared dividers. Undo/redo and parent save/reopen were checked in local compiled
editor fixtures, including the owner's private backup (never in this repository).

Redownload AUREON Integration in HACS, restart Home Assistant and refresh the
browser. Updating only the dashboard does not install these editor resources.
No physical iSG/phone or live owner HA validation has been claimed.


## Plan loading recovery — 2026-11-02

Building reads now end with a localized error and Retry after 12 seconds without
an answer. Optional packs cannot block showing a received plan. Replacing the HA
connection reloads the plan, and late responses cannot overwrite a recovered plan.
All changes are generated from SOURCE_COMMIT. Browser tests simulate missing and
late replies; no owner PC/iSG/phone latency improvement is claimed without an
actual device measurement. Redownload this integration in HACS and restart HA.
