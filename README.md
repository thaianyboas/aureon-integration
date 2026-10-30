# AUREON Integration

Dedicated **HACS Integration distribution repository** for the AUREON Floor Studio Python backend and NeonPlan3D frontend assets.

**Status: preparation only — NOT READY TO INSTALL.** The repository intentionally does not yet contain `custom_components/neonplan3d` on its default branch. Do not add this repository to HACS yet.

## Source of truth

The authoritative source, tests and build scripts are in [AUREON Dashboard](https://github.com/thaianyboas/aureon-dashboard), branch `master`. This repository is for the eventual distribution of a reviewed, generated integration package. Do not maintain a second independent source fork.

## Candidate build

The [Prepare AUREON integration candidate](../../actions/workflows/candidate.yml) workflow runs on pushes to `master` and can also be started manually. It checks out the exact dashboard commit recorded in `SOURCE_COMMIT`, installs locked dependencies, runs frontend/module/backend and publication-gate tests, rebuilds and verifies committed bundles, packages the integration with the upstream license and source provenance, checks its checksums and migration contract, and uploads a **review-only Actions artifact**. It does not commit generated integration files, publish a release, or change any Home Assistant installation.

## Safety

- Keep the official NeonPlan3D integration installed in production until migration and rollback are validated.
- The modified integration uses the same `neonplan3d` domain as the official version. Do not install both in one Home Assistant instance.
- Do not upload apartment floorplans, tokens, licenses, or paid asset packs to this public repository.
- Preserve stable AUREON Dashboard v0.28.0 until release gates pass.
- No Home Assistant runtime test or HACS installation is claimed.

See [distribution strategy](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/DISTRIBUTION_TARGET.md) and [migration and rollback](https://github.com/thaianyboas/aureon-dashboard/blob/master/floor-studio/NEONPLAN_MIGRATION_AND_ROLLBACK.md).

## Development branch

Verified changes are published directly to `master`, without development branches or releases. `main` is retained as the original preparation checkpoint. The repository remains unpromoted: no `custom_components` installation payload is published on either branch. `SOURCE_COMMIT` identifies a review candidate, not installation approval.

## Current review candidate

The pinned source includes shared per-user platform pages, bounded SpotifyPlus category/pagination browsing and a physical Real rendering path. Browser artifacts include synthetic page layouts all five renderer modes and native editor drawing/undo/round-trip checks, alongside the generated integration package. See [source validation and remaining work](https://github.com/thaianyboas/aureon-dashboard/blob/e44e4a003a08c6b75d73e15d0f0e165bd65f18c0/floor-studio/PLATFORM_VALIDATION_2026-10-30.md). These tests do not establish real Home Assistant, device, streaming, migration or visual acceptance. Development and production acceptance remain incomplete; stable HACS promotion remains blocked.

Share-template exports now remove nested HA links, local module/action/media settings and personal image rules. Full backups preserve the owner's bindings. This does not publish or anonymize a floor plan automatically.
