# Racing models

## Included assets

| File | Purpose | Format |
|---|---|---|
| `models/racing/aeroflow-formula-01.glb` | Preferred import/test fixture | Binary glTF 2.0 |
| `models/racing/aeroflow-formula-01.gltf` | Embedded glTF loader test | glTF 2.0 JSON |
| `models/racing/aeroflow-formula-01.obj` | OBJ loader test | Wavefront OBJ |
| `models/racing/manifest.json` | Dimensions, sizes, SHA-256 hashes | JSON |

**AeroFlow Formula 01** is an original, brand-free open-wheel racing concept.
It was generated from Three.js primitives; it does not reproduce a real team
car, production car, or sponsor livery.

Dimensions (meters, before AeroFlow display normalization):

- length 4.575
- width 2.200
- height 1.430

## Generate

```bash
cd plugin/tools
node generate-racing-model.mjs
```

The generator:

- builds the car from primitives;
- exports GLB via `GLTFExporter`;
- exports embedded glTF;
- exports OBJ via `OBJExporter`;
- calculates and writes SHA-256 hashes and dimensions to `manifest.json`.

The script uses a minimal `FileReader` shim because GLTFExporter uses the browser
File API for its final Blob assembly.

## Import test

```bash
cd plugin/tools
node run-import-smoke.mjs
```

This loads all three formats through the real `source/importers.js` path and
asserts normalized bounds and multi-mesh structure. It also tests unsupported
external resources, compressed glTF, and an invalid GLB header.

## Use in AeroFlow Lab

1. Open the lab.
2. In **Import vehicle mesh**, choose the `.glb`.
3. Wait for parsing; the car is normalized and grounded automatically.
4. Set real length/width/height and Cd for the aerodynamic proxy.
5. The model's display scale and the drag calculation are independent; the mesh
   is not a validated physical model.

## Licensing

The model and generator are original AeroFlow work, MIT-licensed with the
repository. No third-party vehicle geometry or trademark is included.
