# Third-party notices

AeroFlow Platform's original code, documentation, prompt templates, and racing
model are licensed under the repository [MIT License](LICENSE).

The following third-party works are included or referenced. Their licenses are
retained in the listed directories and take precedence over the repository
license for those files.

## Runtime bundle

AeroFlow Lab ships a browser bundle containing **Three.js r180** and its
`OrbitControls`, `OBJLoader`, `GLTFLoader`, and `GLTFExporter` addons.

- Upstream: <https://github.com/mrdoob/three.js>
- License: MIT
- Copyright © 2010–2025 three.js authors
- Notice: [`plugin/THIRD_PARTY_NOTICES.md`](plugin/THIRD_PARTY_NOTICES.md)

## Vendored skills

| Directory | Upstream | License | Content |
|---|---|---|---|
| `skills/vendor/summerengine-vehicle-model/` | [SummerEngine/summer](https://github.com/SummerEngine/summer) | MIT | Full skill + NOTICE |
| `skills/vendor/omer-vehicle-design/` | [omer-metin/skills-for-antigravity](https://github.com/omer-metin/skills-for-antigravity) | Apache-2.0 | Full skill + references |
| `skills/vendor/gpt-image-prompt-library/` | [Evolink-AI/awesome-gpt-image-2-API-Prompts](https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts) | CC0-1.0 | Upstream README + license |
| `skills/vendor/automotive-engineering/` | [jherrodthomas/automotive-skills-suite](https://github.com/jherrodthomas/automotive-skills-suite) | MIT | Upstream README + license |
| `skills/vendor/theneo-automotive-design-engineer/` | [theneoai/awesome-skills](https://github.com/theneoai/awesome-skills) | MIT with Attribution Requirement | Full skill + references |

### Not redistributed

`skills/vendor/camera-prompts/` references
[xoxxel/camera-prompts](https://github.com/xoxxel/camera-prompts), which had no
license file at commit `659ec7faa12b86239061f30b103395e455f95538`. No upstream
prompt text or images are copied. Only a factual description and an
independently written camera matrix are included.

## Model assets

`models/racing/aeroflow-formula-01.*` was authored for AeroFlow by the
repository's generator script. It is MIT-licensed with this repository. It does
not reproduce a real production car or racing team design.

## Development dependencies

Build-only dependencies (`esbuild`, `three`) are installed under
`plugin/tools/` and are not committed. They are used solely to build and test the
plugin.

See also [`skills/SOURCES.json`](skills/SOURCES.json) for pinned commits and
copied-file records.
