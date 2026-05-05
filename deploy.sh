#!/bin/bash
set -e

# ── Konfigurasi ─────────────────────────────────────
REPO_DIR="/var/www/budi-purnomo-profile"   # Folder clone repo di VPS
WEB_ROOT="/var/www/budipurnomo.com"        # Folder yang dibaca Nginx
BRANCH="main"
# ────────────────────────────────────────────────────

echo "🚀 Memulai deploy budipurnomo.com..."

# 1. Pull kode terbaru
if [ -d "$REPO_DIR/.git" ]; then
  echo "📥 Pulling dari GitHub..."
  cd "$REPO_DIR"
  git fetch origin
  git checkout "$BRANCH"
  git pull origin "$BRANCH"
else
  echo "📦 Clone repo pertama kali..."
  git clone https://github.com/pandumaulana/budi-purnomo-profile.git "$REPO_DIR"
  cd "$REPO_DIR"
  git checkout "$BRANCH"
fi

# 2. Install dependencies
echo "📦 Install dependencies..."
npm install --frozen-lockfile

# 3. Build production
echo "🔨 Building..."
npm run build

# 4. Deploy ke web root
echo "📂 Copy ke $WEB_ROOT..."
mkdir -p "$WEB_ROOT"
rsync -a --delete dist/ "$WEB_ROOT/"

# 5. Reload Nginx
echo "🔄 Reload Nginx..."
sudo systemctl reload nginx

echo "✅ Deploy selesai! https://budipurnomo.com"
