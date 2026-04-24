# Ashwanova™ Website

Premium product microsite for **Ashwanova™**, Nutriventia's clinically-backed root-only ashwagandha extract.

Built with **Next.js 14 (App Router)** + **React 18**. Vercel-native, zero config to deploy.

---

## Quick Start

### Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Deploy to Vercel

### Option 1 — Push to GitHub, import in Vercel (recommended)

1. Create a new GitHub repo and push this folder.
2. In Vercel, click **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js — accept all defaults and click **Deploy**.
4. First deploy completes in ~60 seconds. Subsequent pushes auto-deploy.

No environment variables required. No build configuration needed.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## Project Structure

```
ashwanova-site/
├── app/
│   ├── layout.jsx          # Root layout, fonts, metadata, OG tags
│   ├── page.jsx            # Main page (assembles all sections)
│   └── globals.css         # All design tokens + section styles
├── components/
│   ├── Icon.jsx            # All inline SVG icons
│   ├── hooks.js            # useReveal, useCountUp
│   ├── EmberParticles.jsx  # Shared particle background
│   ├── Nav.jsx             # Sticky navigation
│   ├── Hero.jsx            # Video background + parallax + scramble
│   ├── Problem.jsx         # Stats with count-up animation
│   ├── Meet.jsx            # Capsule render + scroll-driven rotation
│   ├── WhyRootOnly.jsx     # Side-by-side comparison
│   ├── EdgePlatform.jsx    # Interactive bioactive chart
│   ├── ClinicalEvidence.jsx
│   ├── Outcomes.jsx        # Six benefit cards
│   ├── Applications.jsx    # 3D-tilt format cards
│   ├── Trust.jsx           # World map with patent markers
│   ├── FAQ.jsx             # Accordion
│   ├── FinalCTA.jsx        # Saffron gradient CTA
│   └── Footer.jsx
├── public/
│   └── assets/
│       └── hero-loop.mp4   # 8-second seamless hero video loop
├── package.json
├── next.config.mjs
├── jsconfig.json           # @/* path aliases
└── .gitignore
```

---

## Design Tokens

All design tokens live as CSS variables in `app/globals.css`:

- **Saffron** (primary brand): `#E89B3C`
- **Coffee** (text): `#2D1F0F`, `#4A341E`, `#6B4F2A`
- **Cream** (backgrounds): `#FAF6EE`, `#F5EFE4`
- **Ember** (dark sections): `#0F0A05`, `#1A1108`, `#2A1B0E`
- **Display font**: General Sans (loaded from Fontshare)
- **Mono font**: JetBrains Mono

---

## Tech Notes

- All interactive components use the `'use client'` directive (required by Next.js App Router).
- Hero video preloaded via `<link rel="preload">` in `layout.jsx` for fastest LCP.
- Path aliases configured: `@/components/*` and `@/app/*`.
- No external state management, no UI library — pure React + CSS.
- `prefers-reduced-motion` respected throughout `globals.css` (animations disabled gracefully).

---

## Performance Targets

- LCP < 2.5s
- INP < 200ms
- CLS < 0.05
- Lighthouse Performance ≥ 90

---

## Known TODOs

- Replace placeholder `#` href values in CTAs with real form/sample-request URLs
- Wire up newsletter form to Mailchimp / HubSpot / your provider
- Add favicons + Apple touch icons to `/public`
- Consider adding `og-image.jpg` (1200×630) for richer social sharing
- Optionally generate WebM version of `hero-loop.mp4` for better Chrome/Firefox compression

---

Built for Nutriventia by Side Kick.
