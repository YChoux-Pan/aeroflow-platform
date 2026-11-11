# Project journal

Reverse-chronological engineering log. Add an entry for significant decisions,
upstream snapshots, releases, and unresolved risks. This is not a changelog;
record the reasoning and the evidence.

## 2026-11-11 — Platform consolidation and v1.1.0

**Context:** AeroFlow Lab existed as a working DSH plugin but had only OBJ
import, no persistent project repository, and no reproducible prompt/skills
layer.

**Done:**

- Migrated the plugin into a monorepo under `aeroflow-platform/plugin`.
- Renamed the package to `aeroflow-dsh-plugin` and bumped to `1.1.0`.
- Added OBJ/GLB/self-contained glTF import with asynchronous attachment,
  material preservation, typed errors, and stale-request disposal.
- Added an original Formula 01 racing test asset and deterministic generator.
- Added the prompt specification, templates, examples, generated packages, and
  an offline compiler.
- Vendored and documented five upstream skill/tooling groups, with pinned
  commits and license audit.
- Added CI, release packaging, installation, architecture, validation, and
  maintenance documentation.

**Known limitations:**

- Visual/WebGL acceptance still requires a manual DSH check.
- The aerodynamic field is a visual proxy; no validated CFD.
- Compressed glTF and external glTF resources are deliberately unsupported.
- The old `@local/aeroflow-lab` install must be removed before installing the
  renamed package.

**Next:** manual light/dark visual pass; in-app import format hint; Prompt Lab
panel in the plugin.

## 2026-11-05 — Initial AeroFlow Lab plugin

**Context:** Build an interactive 3D wind-tunnel experience inspired by a dark
teal automotive HUD reference video.

**Done:**

- Five parametric test articles.
- Wind speed/direction controls, streamlines, wake, force-balance drift.
- Drag, dynamic pressure, power, Reynolds, CdA telemetry.
- Automatic and manual flow palettes.
- Bilingual UI and composer launcher.
- Packaged as a DSH Web bundle.

**Lessons:**

- Client slots and module-loader wiring must be verified before visual polish.
- The data path from simulation to React must be throttled to avoid re-render
  pressure.
- A separate import module keeps vehicle loading testable without WebGL.

## Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-11-11 | Rename package to `aeroflow-dsh-plugin` | Stable public identity; no npm scope ownership assumption |
| 2026-11-11 | Reject compressed glTF | No decoder assets bundled; offline reliability over silent failure |
| 2026-11-11 | Preserve glTF materials | Imported vehicles should retain authored PBR appearance |
| 2026-11-11 | Keep camera-prompts metadata-only | Upstream had no license at snapshot time |
| 2026-11-11 | Commit built `client.js` | Other computers can install without a Node build |
| 2026-11-11 | Use a deterministic prompt compiler | Reproducibility and reviewable prompt changes |
| 2026-11-11 | Keep prompt and plugin layers separate | Design iteration should not require a plugin rebuild |
