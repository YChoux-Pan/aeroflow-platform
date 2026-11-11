# Architecture

## Repository layers

```text
AeroFlow Platform
├── plugin/        runtime bundle (DSH Client + no-op Host)
├── prompts/       design specifications and prompt compiler outputs
├── skills/        pinned upstream knowledge + project-owned skill
├── models/        original 3D test assets
├── scripts/       verification, prompt compiler, install/package helpers
└── docs/          decisions, installation, maintenance, journal
```

The repository is a monorepo, not a package at its root. The only DSH bundle is
`plugin/package.json`; everything else is design/engineering context or tooling.

## Plugin runtime

AeroFlow has three cooperating layers:

1. **Host half** (`plugin/index.js`) — deliberately empty. The lab is a client-side
   visualization; no ambient host authority is required.
2. **Client bootstrap** (`plugin/source/entry.jsx`) — registers a lazy module
   factory with DSH's `__ModuleLoader__` and injects the host React runtime.
3. **Client UI** (`plugin/source/client.jsx`) — registers:
   - a launch strip in `conversation.input.dock`;
   - a frame-wide overlay in `shell.overlay`;
   - locale dictionaries for English and Chinese.

The client bundle is built ahead of time and committed as
`plugin/client.js`. React is external; Three.js and its loaders are bundled.

## State and data flow

```text
React settings ──► scene.update(settings)
                         │
                         ├── vehicle import / scale
                         ├── flow-field particle state
                         ├── body force balance
                         └── renderer.render
                         │
                         ▼
                 onTelemetry (≈7 Hz)
                         │
                         ▼
              HUD values + rolling chart
```

The React layer owns user intent and persists it in module memory while the
overlay is closed. The Three.js scene owns high-frequency simulation and
rendering. Telemetry is the only high-frequency path back into React.

## Import pipeline

```text
file input / drop
  → read as text (OBJ/glTF) or ArrayBuffer (GLB)
  → importers.inspectAsset
      ├── OBJ validation
      └── glTF JSON / GLB JSON-chunk validation
          ├── reject external resources
          ├── reject Draco/Meshopt/KTX2 requirements
          └── parse with GLTFLoader
  → buildImportedVehicle
      ├── preserve glTF PBR materials
      ├── hard-surface treatment for OBJ
      ├── remove lights/cameras
      ├── early edge overlay for low-poly meshes
      └── normalize length and ground contact
  → async attach to vehicle pivot
  → flow-field bounds refresh
```

Imports are asynchronous and tokenized. A newer import or overlay disposal
invalidates older loads; stale geometry is disposed instead of being attached.

## Aerodynamic model

The runtime uses a transparent drag model:

```text
A = width × height × areaFactor
q = 0.5 × ρ × v²
F_drag = q × Cd × A
P_drag = F_drag × v
Re = v × L / ν
```

Constants: sea-level ρ = 1.225 kg/m³ and ν = 1.81×10⁻⁵ m²/s.

The body drift is an intentionally exaggerated visual balance driven by
`F_drag`; it is not rigid-body dynamics. The streamline field is an artistic,
divergence-tolerant vector field around the visual bounding volume. It is not a
Navier–Stokes solution and is never described as one.

## Prompt engineering layer

`scripts/prompt-engine.mjs` validates a JSON specification and deterministically
emits Markdown for:

- design brief;
- four-view concept sheet;
- separate clean reference prompts;
- image-to-3D handoff;
- cinematic shot;
- technical blueprint.

The package contains no API client. Users can copy the generated prompts into
any image or 3D generation backend.

## Skills layer

The five upstream source groups are pinned in `skills/SOURCES.json`. Upstream
files are kept in `skills/vendor/<id>/` with their licenses. Project-owned
adaptation lives in `skills/aeroflow-vehicle-prompt-engineer/`.

## Failure boundaries

- Missing WebGL: boot error with retry, not a blank slot.
- Bad imported mesh: localized error, previous model restored.
- Unsupported compressed glTF: explicit message, no decoder fetch.
- Missing bundle activation: documented install recovery.
- No CFD: explicit disclaimer in the HUD, README, and prompts.

## Extension points

- New test articles: `plugin/source/models.js` and `physics.js`.
- New import formats: `plugin/source/importers.js` + a test fixture.
- New prompt output modes: `scripts/prompt-engine.mjs` + schema + template.
- New skills: new `skills/vendor/<id>/` with `SOURCE.md` and license.
- New models: generator script under `plugin/tools/`, assets and manifest under
  `models/racing/`.
