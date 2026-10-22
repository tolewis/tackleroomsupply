#!/usr/bin/env bash
set -euo pipefail

# TackleRoom Supply — build on this server, deploy out/ to DreamHost.
#
# Usage:
#   bash scripts/deploy.sh          build, then copy new and changed files (no delete)
#   bash scripts/deploy.sh --prune  also run the delete step after a dry run you confirm
#   bash scripts/deploy.sh --no-build  deploy the existing out/ only
#
# Rules:
#   - The docroot holds ONLY build output. Never copy source, node_modules, or .git to it.
#   - Never copy or overwrite .htaccess. The live .htaccess holds the security blocks.
#   - forecast/ belongs to the forecast pipeline. Never touch it.
#   - map/ is a hand-built static section from this repo. The script copies it
#     without delete and without its .htaccess.

SITE="tackleroomsupply.com"
NODE_VERSION="22"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DREAMHOST_ENV="${DREAMHOST_ENV:-/home/tlewis/agents/agent-Skills/dreamhost/.env}"

EXCLUDES=(
  --exclude='.htaccess'
  --exclude='.well-known'
  --exclude='.dh-diag'
  --exclude='/forecast/'
  --exclude='/map/'
  --exclude='/favicon.gif'
  --exclude='/favicon.ico'
)

BUILD=1
PRUNE=0
for arg in "$@"; do
  case "$arg" in
    --no-build) BUILD=0 ;;
    --prune) PRUNE=1 ;;
    *) echo "Unknown option: $arg" >&2; exit 2 ;;
  esac
done

if [[ ! -r "$DREAMHOST_ENV" ]]; then
  echo "ERROR: DreamHost env file not readable: $DREAMHOST_ENV" >&2
  exit 1
fi
# shellcheck source=/dev/null
source "$DREAMHOST_ENV"
export SSHPASS="${DREAMHOST_PASS:?DREAMHOST_PASS not set}"
TARGET="${DREAMHOST_USER:?}@${DREAMHOST_HOST:?}"
RSYNC=(sshpass -e rsync -rlptc -e "ssh -o StrictHostKeyChecking=no")

cd "$REPO_DIR"

if [[ "$BUILD" == 1 ]]; then
  # shellcheck source=/dev/null
  source "$HOME/.nvm/nvm.sh"
  nvm use "$NODE_VERSION" >/dev/null
  echo "Building with Node $(node -v)..."
  rm -rf .next out
  npm ci --no-audit --no-fund
  npm run build
fi

[[ -f out/index.html ]] || { echo "ERROR: out/index.html missing. Build first." >&2; exit 1; }
if [[ -e out/.htaccess ]]; then
  echo "NOTE: out/.htaccess exists. The excludes keep it off the server."
fi

echo "Copying out/ to ${SITE} (no delete)..."
"${RSYNC[@]}" --delay-updates --stats "${EXCLUDES[@]}" out/ "${TARGET}:${SITE}/" | grep -E 'transferred:'

echo "Copying map/ to ${SITE}/map (no delete)..."
"${RSYNC[@]}" --exclude='.htaccess' --exclude='README.md' map/ "${TARGET}:${SITE}/map/"

if [[ "$PRUNE" == 1 ]]; then
  echo "Delete dry run. Read this list:"
  "${RSYNC[@]}" -n -i --delete "${EXCLUDES[@]}" out/ "${TARGET}:${SITE}/" | grep '^\*deleting' || true
  read -r -p "Apply these deletes? Type yes: " answer
  if [[ "$answer" == "yes" ]]; then
    "${RSYNC[@]}" -i --delete "${EXCLUDES[@]}" out/ "${TARGET}:${SITE}/" | grep '^\*deleting' || true
  else
    echo "Delete skipped."
  fi
fi

v="$(date +%s)"
for p in / /about/ /sitemap.xml /.git/config; do
  printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' "https://${SITE}${p}?v=${v}")" "$p"
done
echo "Expect 200 for pages and 404 for /.git/config."
