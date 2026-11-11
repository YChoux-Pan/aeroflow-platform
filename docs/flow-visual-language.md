# White-smoke visual language

This note records the reference-frame analysis used for AeroFlow 1.2.0. It is a
design study, not a CFD validation document.

## Reference frames

Source frames (local, user-provided, not redistributed):

- `微信图片_20261111140358_62_28.jpg`
- `微信图片_20261111140400_63_28.jpg`

Both are 2560×1440 frames of a wind-tunnel test section. The camera looks down
and across the tunnel; the car noses to the left and the smoke travels left to
right. The bottom watermark band was cropped out before vectorization.

## Raster measurements

Measured on a 960 px working copy after cropping:

| Frame | Mean luminance | Low-saturation highlight fraction | Dark fraction | Mean saturation |
|---|---:|---:|---:|---:|
| 01 | 0.523 | 0.363 | 0.056 | 0.079 |
| 02 | 0.639 | 0.615 | 0.048 | 0.039 |

The reference is high-key, almost achromatic, and has a large soft white mass.
The car remains the darkest large object. This is the opposite of the previous
neon-line look: the smoke is the dominant value, and colour is not carrying the
flow.

## Vectorization

`design/reference/vectorize-reference.py` runs locally and produces:

- `reference-01.svg`, `reference-02.svg` — full-colour spline traces
  (vtracer, 1600 px working width);
- `reference-01-smoke-mask.svg`, `reference-02-smoke-mask.svg` — binary
  low-saturation-highlight traces for the smoke mass;
- `reference-*-crop.jpg` and `*-smoke-mask.png` — intermediate rasters;
- `measurements.json` — the numeric table above.

These files are **gitignored**: they are derived from user-provided third-party
frames, retain the source look, and are not part of AeroFlow's redistributable
asset set. The reusable output is this note and the procedural renderer.

Vector traces are an analysis aid, not a segmentation model. The smoke-mask
threshold (`value > 0.62`, `saturation < 0.18`) captures both smoke and some
bright bodywork; it is intentionally only used to study the mass and edge
language.

## Visual grammar extracted from the references

1. **Direction.** Flow is horizontal left → right. The car noses into the flow;
   the wake expands behind the rear quarter.
2. **Value, not hue.** Smoke is white to pale grey. There are no coloured
   rainbows in the reference. Colour comes only from small lamps and the
   environment.
3. **Soft edges.** The smoke edge is broken by turbulence, never a clean line.
   Bright cores fade through several translucent layers.
4. **Multiple scales.** Broad opaque sheets near the floor and front bumper,
   medium ribbons over the hood and roof, and fine wisps at the edges.
5. **Surface attachment.** Smoke follows the hood, windshield, roof, and rear
   deck, then separates at the A-pillar and rear wing. The underbody and wheel
   wakes are visibly dense.
6. **Occlusion.** The car is still readable through the smoke. The smoke does not
   become an opaque white wall.
7. **Lighting.** A soft overhead strip creates a bright top surface and a mild
   rim; the background is a desaturated grey tunnel, not a black void.
8. **Camera.** A high three-quarter view, long lens, car occupying roughly the
   middle third of the frame.

## Implementation map

| Reference observation | AeroFlow implementation |
|---|---|
| Broad white ribbons | 460 camera-facing ribbon strips, 14 trail nodes, procedural fBm erosion |
| Soft volume | ~1,840 low-opacity smoke puffs with a multi-blob cloud sprite |
| Layered translucency | additive white layers with depth-tested occlusion |
| Body attachment and wake | ellipsoid deflection + downstream wake terms in `SmokeField` |
| White at all loads | `smoke` palette; automatic palette lock for Hellcat/imported specimens |
| Neutral studio | brighter overhead strip, white key, desaturated environment |
| Readable car | silver Hellcat body, dark glass, contrast-preserving smoke alpha |
| Existing UI | same launcher, overlay, rails, sliders, telemetry, palette grid; only one extra preset and one palette swatch |

The result remains a **visual proxy**. The smoke path is a kinematic particle
field, not a pressure or velocity solution. The standalone WebGL harness used
during development confirmed that both shaders compile and draw; it is not a
substitute for checking the DSH page layout.

## Hellcat design translation

The default test article is an original widebody muscle-car interpretation:

- long hood, cabin set rearward, short deck;
- black hood panel and raised scoop;
- quad round projector lamps in a full-width dark grille;
- wide shoulders and exposed wheel faces;
- side skirts, side vents, diffuser, quad exhaust tips;
- continuous red tail lamp and a low ducktail spoiler;
- silver-grey body, black glass, cool white trim, no manufacturer marks.

It is not a replica of a production car. The proportions and feature hierarchy
are inspired by the American widebody muscle-car idiom requested by the user.

## Verification boundary

The following are automated: repository verify, plugin build, import smoke, and
JSON/locale checks. The following remain manual: actual WebGL smoke appearance,
GPU cost, and visual balance in the DSH page. See
[`validation.md`](validation.md).
