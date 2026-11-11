# SummerEngine `vehicle-model`

**What it is:** an official Summer Engine Agent Skill for generating
hard-surface vehicles (cars, motorcycles, F1 cars, spaceships, mechs, boats)
as game-ready meshes.

**Why it matters for AeroFlow:** it is the most complete public workflow for
turning a vehicle concept into a clean 3D asset. It covers multi-view reference
generation, hard-surface artifacts, polycount targets, decal recovery, and
scene wiring. The prompt patterns can be used without the Summer Engine MCP.

**Key ideas from the skill:**

- Use multiple reference angles (front, 3/4 rear, side) for any hero vehicle.
- A prompt that says "front and 3/4 views" only affects the image; the 3D
  backend gets separate images through its own multi-image API.
- Prefer hard-surface language: crisp panel gaps, symmetric, isolated, no
  motion blur.
- Target 15k–30k triangles for a player vehicle, 30k–60k for a hero showpiece,
  2k–5k for background traffic.
- Use a separate decal/livery pass for panel lines instead of asking the mesh
  pass to invent them.

**Use it here:** [`SKILL.md`](SKILL.md) is the pinned upstream skill.
This repository does not bundle the Summer Engine runtime or MCP tools.

**License:** MIT. See [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE).
