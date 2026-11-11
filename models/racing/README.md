# Racing assets

All assets are original AeroFlow work (MIT with this repository) and contain no
real manufacturer, team, sponsor, or production-car geometry.

## Catalog

[`manifest.json`](manifest.json) is the source-of-truth index. Each model has its
own manifest with dimensions and SHA-256 records:

| Model | Design source | GLB | glTF | OBJ | Manifest |
|---|---|---|---|---|---|
| AeroFlow Formula 01 | hand-authored open-wheel concept | [GLB](aeroflow-formula-01.glb) | [glTF](aeroflow-formula-01.gltf) | [OBJ](aeroflow-formula-01.obj) | [manifest](aeroflow-formula-01.manifest.json) |
| AeroFlow GT3 Endurance | [GT3 prompt spec](../../prompts/examples/gt3-endurance.json) | [GLB](aeroflow-gt3-endurance.glb) | [glTF](aeroflow-gt3-endurance.gltf) | [OBJ](aeroflow-gt3-endurance.obj) | [manifest](aeroflow-gt3-endurance.manifest.json) |

The GT3 model was generated from the installed prompt package:
[`prompts/generated/gt3-endurance.md`](../../prompts/generated/gt3-endurance.md).

## Use

1. Open AeroFlow Lab.
2. Choose **Import vehicle mesh**.
3. Select the `.glb` (preferred), `.gltf`, or `.obj`.
4. Set real length, width, height, mass, and Cd for aerodynamic telemetry.

The importer normalizes the display size and grounds the model; mesh dimensions
are separate from the aerodynamic values.

## Regenerate

Formula 01:

```bash
cd plugin/tools
node generate-racing-model.mjs
```

GT3 Endurance:

```bash
cd plugin/tools
node generate-gt3-model.mjs
```

Both commands rewrite the binary assets and their per-model manifest; run
`node scripts/verify.mjs` afterward.

## Preview images

`previews/` contains offline software views of the GT3 OBJ. They are approximate
design previews, not captures of AeroFlow Lab. See
[`previews/README.md`](previews/README.md).
