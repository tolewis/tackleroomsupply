#!/usr/bin/env bash
set -euo pipefail

# Unhook Outdoors — deploy to DreamHost
# Usage: npm run deploy
# Requires: SSH access to DreamHost configured

REMOTE_USER="${DREAMHOST_USER:-your-username}"
REMOTE_HOST="${DREAMHOST_HOST:-your-server.dreamhost.com}"
REMOTE_PATH="${DREAMHOST_PATH:-~/unhookoutdoors.com}"
LOCAL_OUT="out/"

echo "Building site..."
npm run build

# Copy .htaccess into build output
cp .htaccess out/.htaccess

echo ""
echo "Deploying to ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
echo ""

rsync -avz --delete \
  --exclude='.dh-diag' \
  --exclude='.well-known' \
  "${LOCAL_OUT}" \
  "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}/"

echo ""
echo "Deploy complete! Site should be live at https://unhookoutdoors.com"
