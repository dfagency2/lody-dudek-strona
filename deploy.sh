#!/bin/bash
# ==========================================
# DEPLOY — Lody Dudek Strona (lodydudek.pl)
# ==========================================
# Static export — budujemy lokalnie, wgrywamy rsync

set -e

echo "🍦 Lody Dudek Strona — Deploy"
echo "================================"

# 1. Build
echo "📦 Building..."
npm run build

# 2. Upload out/ to server
echo "🚀 Uploading to lodydudek.pl..."
rsync -avz --delete \
  "./out/" \
  jacbar22@s180.cyber-folks.pl:/home/jacbar22/domains/lodydudek.pl/public_html/ \
  -e "ssh -p 222"

echo ""
echo "✅ Deploy gotowy!"
echo "🌐 https://lodydudek.pl"
