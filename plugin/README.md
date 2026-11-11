# AeroFlow Lab — DSH plugin

A persistent DSH Web UI plugin: a modular, real-time 3D wind tunnel for any
vehicle or bluff body.

Part of the [AeroFlow Platform](../README.md). Install using
[`../docs/installation.md`](../docs/installation.md).

## What it does

- Adds an **AeroFlow wind tunnel** launch strip above the message composer.
- Opens an immersive, full-frame wind-tunnel console.
- Includes a Hellcat-inspired widebody, GT coupe, cargo rig, quadrotor, winged
  pod, and bluff-pod model, plus **OBJ / GLB / self-contained glTF** import
  (16 MB limit).
- Preserves glTF PBR materials; OBJ receives the AeroFlow hard-surface treatment.
- Rejects unsupported compressed glTF and external resource references with a
  clear localized error.
- Lets you steer the continuous wind vector (0–359°) and set 0–100 m/s wind.
- Renders a white-smoke streamline field around the specimen: soft camera-facing
  ribbons and puffs, body deflection, wake shedding, tunnel floor,
  force-balance drift, and a live drag arrow.
- Solves live drag (`F = ½ρv²CdA`), dynamic pressure, drag power, Reynolds
  number, CdA, and frontal area.
- Automatic white-smoke selection, with manual palette override.
- Bilingual UI (English / 简体中文), host theme tokens in the launcher, keyboard
  escape/close and focus trapping in the lab.

The flow field is a real-time white-smoke visual proxy. It is not a full CFD or
Navier–Stokes solver; the UI states this explicitly.

## Package layout

```
package.json            bundle + client manifest, display resources
cordis.patch.yml        profile row
index.js                no-op Host half
client.js               built, self-contained client artifact
locale/en.json          display metadata + UI copy
locale/zh.json          display metadata + UI copy
icon.svg                original plugin icon
LICENSE                 MIT license for the plugin
source/                 development sources (not loaded by the bundle)
  smoke-field.js        white-smoke ribbons, puffs, and particle field
tools/                  build and import-smoke tooling (not runtime)
README.md               this file
THIRD_PARTY_NOTICES.md  Three.js MIT notice
```

## Import support

| Format | Materials | Notes |
|---|---|---|
| OBJ | AeroFlow override | Wavefront geometry only |
| GLB | Preserved PBR | Recommended |
| glTF | Preserved PBR | Must embed resources as data URIs |

Not supported: Draco, Meshopt, KTX2, external `.bin`/texture files, animations.

## Rebuild

The production bundle is built from `source/entry.jsx` with esbuild. React is
external and supplied by the DSH client module loader; Three.js is bundled.

```powershell
cd tools
pnpm install
node build.mjs
node run-import-smoke.mjs
```

`client.js` is the installed runtime. Do not add a `react` runtime dependency.
`source/` and `tools/` are development-only and excluded from `files`; the
self-contained runtime is `client.js`, `index.js`, the patch, locales, and the
display resources.

## License

MIT for the plugin; Three.js is MIT. See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).
