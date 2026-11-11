# Default negative constraints

Add these to every AeroFlow vehicle prompt unless there is a deliberate reason
not to.

## All outputs

```text
no brand logos, no sponsor marks, no team names, no watermark, no text,
no recognizable production-car body, no copied livery
```

## Image-to-3D references

```text
no motion blur, no cropped wheels, no partial car, no people, no driver,
no heavy shadows, no dramatic perspective, no fisheye distortion,
no asymmetric headlights, no mismatched wheels, no extra wheels,
no floating parts, no melted body panels, no visible seams from AI generation
```

## Concept sheets

```text
no inconsistent proportions between views, no different car in each view,
no overlapping views, no UI chrome, no decorative background clutter
```

## Cinematic images

```text
no illegible text, no extra cars unless requested, no distorted trackside
architecture, no duplicated wheels, no body panels clipping
```

## IP and safety

Do not generate a real team's 2026 car, a current production car's exact body,
or a recognizable sponsored livery for commercial use. Describe an original
design language instead. Add `original design, brand-free` to the positive
prompt, not only to the negative list.
