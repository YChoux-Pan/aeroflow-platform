# Validation

## Automated checks

Run from the repository root:

```bash
node scripts/verify.mjs
```

This checks:

- plugin manifest shape, package identity, version consistency;
- `client.js` exists, contains the module loader, and contains no bundled React;
- English/Chinese locale dictionaries have exactly the same keys;
- all prompt examples validate and generated Markdown is current;
- every skills vendor folder has a `SOURCE.md` and a license or explicit
  license-gap record;
- the racing asset manifest hashes match the GLB/glTF/OBJ files;
- required documentation files exist.

Run the import smoke test:

```bash
cd plugin/tools
node run-import-smoke.mjs
```

It exercises:

- the original racing model in GLB, glTF, and OBJ;
- normalized bounds and multi-mesh presence;
- rejection of external glTF resources;
- rejection of Draco-class compression requirements;
- rejection of an invalid GLB header.

Then build:

```bash
cd plugin/tools
node build.mjs
node --check ../client.js
```

CI runs the verification and build on every push and pull request.

## Manual visual verification

A headless test cannot establish what the browser renders. Before a release,
check in DSH Web/Desktop:

### Launcher

- Strip appears above the composer without breaking the composer layout.
- Light and dark host themes remain legible.
- Keyboard focus reaches the strip; Enter opens the lab.

### Lab layout

- Full-frame overlay fits 1280×720, 1440×900, and a narrow window.
- No horizontal overflow.
- Left/right rails scroll independently; header remains visible.
- Close, Escape, and backdrop click work.
- Focus is trapped while the dialog is open and returns to the launcher after
  close.

### 3D/WebGL

- Test section, platform, vehicle, streamlines, and grid render.
- No blank canvas or GPU error.
- ISO, side, and top views frame the vehicle.
- Wind speed changes increase flow motion; wind direction rotates the field.
- Force vector toggle and drag telemetry update.
- Pause freezes motion; reset restores time and camera.
- Auto palette changes with specimen/load; manual palettes override.

### Imports

- Import `aeroflow-formula-01.glb`: model appears, materials are preserved.
- Import `aeroflow-formula-01.gltf`: same behavior.
- Import `aeroflow-formula-01.obj`: hard-surface treatment appears.
- Import an invalid file: readable localized error; previous model remains.
- Import a compressed glTF: explicit unsupported-compression message.
- Close the lab during a slow import; no uncaught promise/console noise.

### Locales and themes

- Switch between English and Chinese; no raw keys appear.
- Check light and dark host themes; the launcher should use host theme tokens.
- The lab intentionally uses its own dark technical palette; confirm text
  contrast on the overlay at normal OS scaling (100%, 125%, 150%).

## Verification status

This repository records automated validation in CI. Visual/WebGL verification is
manual because the build and Node test environment cannot render the DSH page.
Do not claim a visual pass from an automated check alone.

## Reporting a regression

Open an issue with:

- DSH version and OS;
- plugin version (`plugin/package.json`);
- import file name and format (do not attach private models);
- console error text if any;
- screenshot of the lab layout if the problem is visual;
- exact steps to reproduce.
