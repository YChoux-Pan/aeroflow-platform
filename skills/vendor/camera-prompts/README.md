# Camera prompts (reference only)

Upstream: <https://github.com/xoxxel/camera-prompts>

This is a compact camera-language library that uses racing cars as its visual
examples. It covers low-angle, eye-level, high-angle, bird's-eye, worm's-eye,
over-the-shoulder, close-up, mid-shot, full-body, Dutch angle, and related
framing terms.

## Why it is not vendored

At the pinned commit `659ec7faa12b86239061f30b103395e455f95538`,
the upstream repository contained **no license file**. AeroFlow therefore does
not redistribute its prompt text. This folder contains:

- this factual description and the upstream link;
- an independently written camera-angle matrix in
  [`camera-angle-matrix.md`](camera-angle-matrix.md);
- no upstream prompt body, images, or README copy.

Use the upstream repository directly under its own terms. The camera matrix is
AeroFlow-owned writing and is licensed with this repository (MIT).

## How to use it

Use one camera code as a compositional constraint in a racing-car prompt:

```text
low-angle hero shot of <original racing car>, 24mm equivalent,
camera 0.5m above the track, looking slightly up, <lighting>,
<background>, no logos, no text
```

For 3D reference images, do **not** use dramatic perspectives. Use the
orthographic-like views in `prompts/templates/three-d-reference.md` instead.
