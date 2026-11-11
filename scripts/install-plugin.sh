#!/usr/bin/env bash
# Clone/update AeroFlow Platform and add its DSH plugin to a profile.
# The DSH Plugins page may still need to select/enable the bundle.
set -euo pipefail

INSTALL_DIR="${AEROFLOW_DIR:-$HOME/AeroFlow/aeroflow-platform}"
PROFILE="${DSH_PROFILE:-desktop}"
REPO="https://github.com/YChoux-Pan/aeroflow-platform.git"

if [ ! -d "$INSTALL_DIR/.git" ]; then
  mkdir -p "$(dirname "$INSTALL_DIR")"
  git clone "$REPO" "$INSTALL_DIR"
else
  git -C "$INSTALL_DIR" pull --ff-only
fi

PLUGIN="$INSTALL_DIR/plugin"
if [ ! -f "$PLUGIN/client.js" ]; then
  echo "Plugin runtime not found: $PLUGIN/client.js" >&2
  exit 1
fi

if ! command -v dsh >/dev/null 2>&1; then
  echo "The 'dsh' CLI is not on PATH." >&2
  echo "Open DSH -> Plugins and add this local bundle: $PLUGIN" >&2
  exit 1
fi

dsh plugin --profile "$PROFILE" add "$PLUGIN"
echo
echo "AeroFlow plugin package added."
echo "If it is not selected yet, open DSH -> Plugins and enable 'AeroFlow Lab' (aeroflow-dsh-plugin), then refresh or restart DSH."
echo "Plugin path: $PLUGIN"
