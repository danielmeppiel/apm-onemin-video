#!/bin/bash
# Generate background music and SFX for the APM Showcase video
# Prerequisites: infsh CLI installed + logged in (run: infsh login)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
MUSIC_DIR="$PROJECT_DIR/public/music"
SFX_DIR="$PROJECT_DIR/public/sfx"

mkdir -p "$MUSIC_DIR" "$SFX_DIR"

echo "🎵 Generating background music (65s ambient track)..."
echo "   Prompt: Minimal ambient electronic, Microsoft-style sophistication"

infsh app run elevenlabs/music --input '{
  "prompt": "Minimal ambient electronic underscore, clean warm analog synthesizer pads, subtle steady pulse at 95 BPM, calm confident atmosphere, modern technology product video, non-intrusive background music, no vocals, no drums, ethereal floating textures, sophisticated and restrained, gentle evolving harmonies",
  "duration_seconds": 65
}' --save "$MUSIC_DIR/background.mp3"

echo "✓ Background music saved to public/music/background.mp3"

echo ""
echo "🔊 Generating transition whoosh SFX (1s)..."

infsh app run elevenlabs/sound-effects --input '{
  "text": "Very subtle soft digital interface transition, gentle airy whoosh, clean minimal, barely audible, elegant",
  "duration_seconds": 1.0,
  "prompt_influence": 0.7
}' --save "$SFX_DIR/whoosh.mp3"

echo "✓ Whoosh SFX saved to public/sfx/whoosh.mp3"

echo ""
echo "✅ Audio generation complete!"
echo "   Run: npx remotion render src/index.ts ApmShowcase out/apm-showcase.mp4"
