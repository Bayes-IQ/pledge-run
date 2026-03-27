#!/usr/bin/env bash
# Sync or rebuild the project .venv from lockfiles.
#
# Usage (run in a regular terminal, not inside sandboxed AI tools):
#   scripts/sync-venv.sh           # sync from lockfiles
#   scripts/sync-venv.sh --rebuild # delete and recreate

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REBUILD=false
[[ "${1:-}" == "--rebuild" ]] && REBUILD=true

[[ ! -f requirements.lock ]] && echo "Generating requirements.lock..." && \
  uv pip compile requirements.txt -o requirements.lock

[[ ! -f requirements-dev.lock ]] && echo "Generating requirements-dev.lock..." && \
  uv pip compile requirements-dev.txt -o requirements-dev.lock

[[ "$REBUILD" == true && -d .venv ]] && echo "Removing existing venv..." && rm -rf .venv
[[ ! -d .venv ]] && echo "Creating venv..." && uv venv .venv

echo "Syncing venv from lockfiles..."
uv pip sync requirements.lock requirements-dev.lock --python .venv/bin/python

LOCK_HASH="$(cat requirements.lock requirements-dev.lock | shasum | awk '{print $1}')"
PY_VER="$(.venv/bin/python -c 'import sys; print(sys.version)')"
printf "lock=%s\npython=%s\n" "$LOCK_HASH" "$PY_VER" > .venv/.bayesiq-venv-stamp

echo "Venv healthy."
