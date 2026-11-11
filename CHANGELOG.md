# Changelog

All notable changes to AeroFlow Platform are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
semantic versioning for the installable plugin.

## [Unreleased]

## [1.1.0] — 2026-11-11

### Added

- OBJ, GLB, and self-contained glTF import in AeroFlow Lab (16 MB limit).
- Asynchronous glTF loading with stale-request disposal and fallback handling.
- glTF PBR material preservation; OBJ retains the AeroFlow hard-surface
  treatment.
- Typed import errors for invalid files, external glTF resources, Draco /
  Meshopt / KTX2 compression, and meshes with no triangles.
- Original AeroFlow Formula 01 racing model in GLB, glTF, and OBJ, with a
  deterministic generator and SHA-256 manifest.
- Reproducible prompt engineering: JSON schema, taxonomy, templates, negative
  constraints, examples, generated packages, and a dependency-free compiler.
- Five-group skills library with pinned commits, descriptions, licenses, and
  `SOURCES.json`.
- Original `aeroflow-vehicle-prompt-engineer` skill.
- Project documentation, CI, release workflow, issue/PR templates, and
  maintenance journal.
- Renamed package from `@local/aeroflow-lab` to `aeroflow-dsh-plugin` for a
  stable public project identity.

### Changed

- Import panel and localization now describe OBJ/GLB/glTF instead of OBJ only.
- Plugin runtime version is aligned with the repository release.

### Fixed

- Imported mesh materials are disposed cleanly when a model is replaced.
- In-flight imports are invalidated when the overlay is closed.

## [1.0.1] — 2026-11-05

### Added

- Initial AeroFlow Lab DSH plugin: 3D wind tunnel, flow-field streamlines,
  force-balance motion, drag telemetry, palettes.
- Parametric GT coupe, cargo rig, quadrotor, winged pod, and bluff pod.
- Bilingual UI, composer launcher, full-frame lab overlay.

[1.1.0]: https://github.com/YChoux-Pan/aeroflow-platform/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/YChoux-Pan/aeroflow-platform/releases/tag/v1.0.1
