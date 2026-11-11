# `vehicle-design` by omer-metin

**What it is:** an Agent Skill for vehicle concept design and critique. It
combines automotive proportion theory, racing-game design practice, and
hard-surface modeling constraints.

**What is inside:**

- `SKILL.md` — role, principles, reference-loading contract.
- `references/patterns.md` — proportion, stance, silhouette, wheel design,
  damage states, interiors, livery.
- `references/sharp_edges.md` — common failure modes such as wrong wheel-to-body
  ratio, non-turning wheels, floating stance, and interior/exterior mismatch.
- `references/validations.md` — checklists for proportion, silhouette, wheels,
  steering clearance, scale, damage, and cockpit.

**How to use it with AeroFlow:** run this skill first to define a design brief
and to review generated concepts. Then use the AeroFlow prompt engine to turn
the brief into a consistent reference set and a 3D asset prompt.

**Upstream lineage:** the repository states that the skill was converted from
the [Vibeship Spawner Skills](https://github.com/vibeforge1111/vibeship-spawner-skills)
project. Original attribution is retained in the upstream license.

**License:** Apache-2.0. See [`LICENSE`](LICENSE).
