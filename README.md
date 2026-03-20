# APM Showcase — 60-Second Product Video

A 60-second product video for [Agent Package Manager (APM)](https://github.com/microsoft/apm), built as code with [Remotion](https://remotion.dev). Designed for LinkedIn (1080×1080 square format, mobile-first readability).

## What the video covers

The video tells the story of **why APM exists** and **what it does** in under a minute:

1. **Title** — Agent Package Manager, open source by Microsoft
2. **The Problem** — 30 developers, no shared agent config, copy-paste chaos, inconsistent gains
3. **Meet APM** — Install in one command (macOS/Linux + Windows)
4. **Terminal demos** — Live CLI walkthroughs:
   - `apm init` + `apm install` + lockfile generation (declare → install → reproduce)
   - `apm compose` + `apm audit` + `apm pack --format plugin` (compose → secure → ship)
5. **Resolution** — One repo, every developer, same config. All versioned. All reviewed.
6. **Call to action** — Install commands + GitHub URL

## Quick start

```bash
npm install
npm run dev          # Preview in browser
```

## Render

```bash
npx remotion render src/index.ts ApmShowcase out/apm-showcase.mp4
```

## Generate audio (optional)

Background music and transition SFX are generated via [ElevenLabs](https://elevenlabs.io) through the [inference.sh](https://inference.sh) CLI:

```bash
infsh login                       # One-time browser auth
bash scripts/generate-audio.sh    # Generates music + SFX → public/music/ & public/sfx/
```

## Project structure

```
src/
├── Composition.tsx                 # Scene orchestration, durations, transitions, audio
├── components/
│   ├── TitleCard.tsx               # Opening slide
│   ├── ProblemCard.tsx             # Problem statement (visual hierarchy)
│   ├── BridgeCard.tsx              # "Meet APM." pivot with install commands
│   ├── ResolutionCard.tsx          # Resolution mirror
│   ├── PitchCard.tsx               # Closing CTA
│   ├── ContinuousTerminalScene.tsx # Persistent terminal running sequential commands
│   ├── Terminal.tsx                # Terminal chrome
│   ├── TerminalLine.tsx            # Animated terminal output lines
│   └── MacBackground.tsx           # Animated living background
├── data/scenes.ts                  # Terminal scene content (commands + output)
└── styles/theme.ts                 # Design tokens, colors, timing constants
scripts/
└── generate-audio.sh              # ElevenLabs music + SFX generation
public/
├── music/background.mp3           # 65s ambient electronic underscore
└── sfx/whoosh.mp3                 # Subtle transition sound
```

## Design decisions

- **1080×1080 @ 30fps** — LinkedIn square format, optimized for smartphone viewing
- **Microsoft brand tone** — Smooth spring animations (damping 200), no bounce, no glow, no neon. Calm technical authority.
- **Mobile-first fonts** — Minimum 16px on canvas (~6px on phone). Headlines 52-64px, body 30-44px.
- **Visual hierarchy** — ProblemCard uses size/weight/color contrast across 4 lines instead of flat text
- **Persistent terminal** — Two terminal groups reuse the same chrome, eliminating jarring transitions
- **Audio at 15%** — Background music is atmosphere, not content. Video works silent (LinkedIn autoplay is muted).

## Built with

- [Remotion](https://remotion.dev) — Video creation in React
- [APM](https://github.com/microsoft/apm) — Dependency management for skills and audio generation
- [ElevenLabs](https://elevenlabs.io) via [inference.sh](https://inference.sh) — AI-generated music + SFX
