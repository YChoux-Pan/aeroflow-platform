# Security policy

## Supported versions

| Version | Supported |
|---|---|
| 1.1.x | Yes |
| < 1.1 | No |

## Reporting a vulnerability

Please report suspected code-execution, credential, or prompt-injection issues
privately through GitHub's **Security → Report a vulnerability** flow for this
repository. Do not include secrets in a public issue.

Include:

- affected version and DSH version;
- the exact install path and bundle name;
- a minimal reproduction;
- whether any local file was read, written, or executed.

## Model and asset safety

- AeroFlow uses no remote asset service and no CDN at runtime.
- Imported meshes are parsed locally and never executed.
- glTF files that require external resources or a bundled decoder are rejected.
- Do not install third-party skills from this repository without reviewing
  their `LICENSE` and `SKILL.md`; vendored skills are data, not trusted code.
- A prompt can contain instructions. Treat model output as untrusted content and
  never allow an imported prompt file to trigger tool use automatically.

## Scope

The plugin renders untrusted 3D geometry in the browser. Browser/WebGL
vulnerabilities are outside this repository's control but are still useful to
know about if they affect the import path.
