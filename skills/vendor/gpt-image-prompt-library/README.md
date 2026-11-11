# GPT-Image prompt library snapshot

Upstream: <https://github.com/Evolink-AI/awesome-gpt-image-2-API-Prompts>

This is a very large general-purpose prompt corpus for GPT Image 2. It contains
product, UI, poster, portrait, vehicle, and editorial examples. It is useful as
an inspiration and vocabulary source, not as a car-specific skill.

The upstream README is retained verbatim as
[`UPSTREAM_README.md`](UPSTREAM_README.md). The upstream license is CC0-1.0, so
the snapshot can be redistributed.

## How AeroFlow uses it

AeroFlow's own car prompts live in [`../../../prompts/`](../../../prompts/) and
are not copied from this library. When looking for a new rendering style:

1. Search the upstream README for a visual treatment (paper cut, clay, chrome,
   blueprint, editorial).
2. Extract the lighting and composition vocabulary, not the subject.
3. Rebuild the prompt with the AeroFlow schema and an original, brand-free car.
4. Add the AeroFlow negative constraints, especially `no logos`, `no text`, and
   consistent multi-view proportions.

**Caution:** a large prompt corpus is not a style guarantee. Many cases are
single-image editorial prompts and are unsuitable for orthographic 3D reference
generation.
