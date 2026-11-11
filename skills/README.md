# Skills library

This directory preserves the five upstream skill/tooling groups selected for
AeroFlow, plus an original, project-specific prompt-engineering skill.

> **Five source groups, six upstream repositories.** Group 5 ("automotive
> engineering") contains two independent projects: the Automotive Engineering
> Suite and the Automotive Design Engineer persona. They are intentionally kept
> separate because their instructions and licenses differ.

## Snapshot matrix

| # | Upstream | Local path | Type | License | Snapshot |
|---|---|---|---|---|---|
| 1 | [SummerEngine/summer · vehicle-model](https://github.com/SummerEngine/summer/tree/main/library/skills/vehicle-model) | `vendor/summerengine-vehicle-model/` | Agent Skill + 3D vehicle generation | MIT | Full skill |
| 2 | [omer-metin/skills-for-antigravity · vehicle-design](https://github.com/omer-metin/skills-for-antigravity/tree/main/skills/vehicle-design) | `vendor/omer-vehicle-design/` | Agent Skill + vehicle design method | Apache-2.0 | Full skill + references |
| 3 | [xoxxel/camera-prompts](https://github.com/xoxxel/camera-prompts) | `vendor/camera-prompts/` | Camera prompt library | **No license found** | Metadata + original matrix only |
| 4 | [Evolink-AI/awesome-gpt-image-2-API-Prompts](https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts) | `vendor/gpt-image-prompt-library/` | General image prompt library | CC0-1.0 | Upstream README + license |
| 5a | [jherrodthomas/automotive-skills-suite](https://github.com/jherrodthomas/automotive-skills-suite) | `vendor/automotive-engineering/` | Automotive engineering Agent Skills | MIT | README snapshot |
| 5b | [theneoai/awesome-skills · automotive-design-engineer](https://github.com/theneoai/awesome-skills/tree/main/skills/persona/automotive/automotive-design-engineer) | `vendor/theneo-automotive-design-engineer/` | Automotive engineering persona skill | MIT + attribution | Full skill |

The exact commits, retrieval date, and copied-file notes are recorded in
[`SOURCES.json`](SOURCES.json) and each folder's `SOURCE.md`.

## Project-owned skill

[`aeroflow-vehicle-prompt-engineer/SKILL.md`](aeroflow-vehicle-prompt-engineer/SKILL.md)
is original to AeroFlow. It turns the upstream design knowledge into a
repeatable prompt pipeline: design brief → reference set → image-to-3D →
validation → telemetry-ready asset handoff.

## How to use

1. Read the relevant upstream `SKILL.md`.
2. For a concrete AeroFlow generation, use `prompts/` and
   `scripts/prompt-engine.mjs` rather than editing vendored files.
3. For a new agent environment, load `aeroflow-vehicle-prompt-engineer/SKILL.md`
   and expose the `prompts/` directory.
4. Do not edit vendored upstream files. Add AeroFlow adaptations under
   `prompts/`, `skills/aeroflow-vehicle-prompt-engineer/`, or a new file with a
   clear `AeroFlow-owned` header.

## Licensing and attribution

- Vendored files retain their upstream license and copyright.
- `camera-prompts` has no detected license. No upstream prompt text is copied;
  only a link, a factual description, and an independently written camera
  matrix are included.
- The AeroFlow project license does **not** override upstream licenses. See
  [`../THIRD_PARTY_NOTICES.md`](../THIRD_PARTY_NOTICES.md).

## Maintenance

The skill snapshot is reviewed on the first maintenance window of each quarter.
To refresh one source, follow [`../docs/maintenance.md`](../docs/maintenance.md):
pin a new commit, copy only the documented files, update `SOURCE.md` and
`SOURCES.json`, then run `node scripts/verify.mjs`.
