# AeroFlow Lab plugin guide

## What it is

A DSH Web UI client plugin that adds an interactive digital wind tunnel:

- launcher strip above the message composer;
- full-frame 3D lab with central vehicle, tunnel floor, HUD and side consoles;
- live white-smoke ribbons and soft puffs plus a drag-vector visualization;
- vehicle import from OBJ, GLB, or self-contained glTF.

The Host half is intentionally empty. There is no background service, no remote
API, and no telemetry upload.

## User controls

- **Specimen:** six parametric presets, including the Hellcat-inspired widebody,
  plus imported mesh.
- **Dimensions:** length, width, height, Cd, derived frontal area and mass.
- **Wind:** 0–100 m/s; direction 0–359° (0° flows left → right).
- **Flow:** automatic white-smoke palette or five manual palettes.
- **Playback:** run/pause, reset, elapsed time, streamlines toggle, force-vector
  toggle, auto-orbit.
- **Camera:** ISO, side, top; drag to orbit; scroll to zoom.
- **Import:** file picker or drag-and-drop.

## Import formats

| Format | Supported | Materials | Notes |
|---|---|---|---|
| `.obj` | Yes | AeroFlow hard-surface override | Wavefront geometry only; MTL not loaded |
| `.glb` | Yes | Preserved PBR | Preferred for complex assets |
| `.gltf` | Yes | Preserved PBR | Must embed buffers/textures as data URIs |

Limits and exclusions:

- Maximum file size: 16 MB.
- No Draco, Meshopt, or KTX2 decoding is bundled.
- No external `.bin` or texture loading.
- Imported models are normalized to the display tunnel; real dimensions and Cd
  remain editable and separate from the mesh.
- Light/camera nodes in a glTF are removed.
- Animations are not played.

A clean import should show the model grounded on the platform. The flow field
and aerodynamic bounds recalibrate for the imported silhouette.

## Physics and visual field

The drag model, constants and limitations are documented in
[`architecture.md`](architecture.md#aerodynamic-model). The body motion is a
force-balance visualization, not a free rigid-body simulation. The smoke field is
an artistic vector field and is not a CFD result.

## Smoke renderer

`source/smoke-field.js` converts the particle history into camera-facing ribbons
and soft puffs. It is tuned for white, layered smoke with additive white layers,
not neon lines. The reference analysis and tuning parameters are in
[`flow-visual-language.md`](flow-visual-language.md).

## Source modules

| File | Responsibility |
|---|---|
| `source/client.jsx` | React UI, slots, locale, import UX, state |
| `source/scene.js` | Three.js scene, camera, lights, smoke field lifecycle, animation |
| `source/smoke-field.js` | White-smoke ribbons, puffs, particle field and camera-facing geometry |
| `source/importers.js` | OBJ/GLB/glTF validation and loading |
| `source/models.js` | Procedural vehicle models and imported-mesh treatment |
| `source/physics.js` | Presets, drag calculations, formatting |
| `source/palettes.js` | Flow-color systems and auto palette |
| `source/entry.jsx` | DSH module-loader bootstrap |
| `locale/*.json` | Metadata and bilingual UI strings |

## Build and test

```bash
cd plugin/tools
pnpm install
node build.mjs
node run-import-smoke.mjs
```

`client.js` is committed. Do not add a React dependency; DSH exposes React to the
bundled factory.

## DSH slots

- `conversation.input.dock` — launcher strip, order 30.
- `shell.overlay` — full-frame lab, order 30.

If a future DSH release changes these slot names or contracts, update the
injection in `source/client.jsx` and verify with `Slots.listSubTree`.

## Known limitations

- Visual/WebGL rendering cannot be verified from a headless Node test.
- The visual particle field is not volume-conserving.
- OBJ materials are intentionally replaced for a consistent art style.
- glTF skinning and animation are static.
- Imported models are normalized visually; use the dimension controls for
  aerodynamic values.
- The plugin stores its session state in memory; it resets when the page reloads.
