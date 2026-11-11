# 3D reference template

This is the highest-value template for AeroFlow. A clean reference set is worth
more than a hundred cinematic renders.

## Golden rule

One prompt cannot produce a true multi-view 3D asset. Generate separate images
for at least these views:

1. front three-quarter
2. side profile
3. rear three-quarter

If the backend accepts a multi-image array, pass the three separate images.
Only use a composite when the backend forces a single image slot.

## Template — per view

```text
Clean asset reference of an original {vehicleClass}, {era}, {designLanguage}.
{stance}. {wheelToBodyPercent}% wheel-to-body proportion,
{wheelbasePercent}% wheelbase, {rideHeightMm} mm ride height.
{aero}. {materials}. {livery}.
{view} view, full vehicle visible including all four wheels,
centered, slight orthographic look, {lighting},
{background}, no shadows, no motion blur, no people, no text, no logos,
bilateral symmetry, crisp panel gaps, isolated.
```

## Prompt notes

- Use a plain white or light-gray background.
- Ask for even lighting; dramatic shadows hide the rocker and underbody.
- Keep the full car in frame. Never crop the wheels.
- Do not ask for a "dynamic angle" in a reference image.
- For F1/open-wheel, say "exposed wheels" and "no fenders".
- For a good 3D silhouette, add "hard-surface, clean panel gaps".
- Keep the same materials, wheels, and livery in every view prompt.
- If the model changes the design between views, generate all views from one
  design-sheet reference or use an image-conditioned workflow.

## Image-to-3D handoff

```text
Target: 15k–30k triangles for a player vehicle; 30k–60k for a hero showpiece.
Format: GLB, Y-up or state the axis convention.
Symmetry: mirror the left/right halves where possible.
Textures: bake livery and panel-line decals separately if the mesh pass loses
them.
Scale: state the real length in metres; AeroFlow normalizes display size.
```

AeroFlow Lab accepts uncompressed `.obj`, `.glb`, and self-contained `.gltf`.
It rejects Draco, Meshopt, KTX2, and external `.bin`/texture references because
no decoder assets are bundled.
