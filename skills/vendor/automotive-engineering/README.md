# Automotive engineering skills (reference)

This folder preserves the scope and license of
[jherrodthomas/automotive-skills-suite](https://github.com/jherrodthomas/automotive-skills-suite),
a 152-skill MIT library covering automotive engineering rather than styling.

**This is not a car-design prompt pack.** It covers:

- ISO 26262 functional safety
- ISO/SAE 21434 cybersecurity
- ISO 21448 SOTIF
- APQP / PPAP / FMEA
- Automotive SPICE
- AUTOSAR, diagnostics, calibration, MBSE, SysML, V&V

The upstream README is retained as
[`UPSTREAM_README.md`](UPSTREAM_README.md). Individual `.skill` files are not
vendored in order to keep this repository reviewable; add only the specific
skills a future AeroFlow engineering module needs, with the upstream MIT notice.

A second engineering persona, `automotive-design-engineer`, is kept separately
under [`../theneo-automotive-design-engineer/`](../theneo-automotive-design-engineer/).

**AeroFlow relevance:** future work on structural/aero engineering, compliance
or a CFD handoff. It does not replace the visual prompt workflow in
`prompts/`.
