# Unhook Outdoors — Project Documentation

## Overview
Outdoor content/media platform targeting young adventurers (18-35). Covers fishing, hiking, camping, hunting, kayaking. Dark-mode default with "Patagonia meets field journal" aesthetic.

## Tech Stack
- **Framework**: Next.js 15 (App Router, `output: 'export'` for static HTML)
- **Styling**: Tailwind CSS v4 with OKLCH color tokens, dark-mode default
- **CMS**: Sanity (free tier) — schemas in `src/lib/sanity/schemas/`
- **3D**: React Three Fiber v9 + Three.js (lazy-loaded, reduced-motion respected)
- **Images**: next-image-export-optimizer (local) + Sanity CDN (CMS content)
- **Fonts**: Outfit (headings) + Source Serif 4 (body), variable, self-hosted in `public/fonts/`
- **Theme**: next-themes, dark default
- **Deploy**: `npm run build` → rsync `out/` to DreamHost

## Key Directories
```
src/
  app/
    (site)/              # Main site pages with shared Header/Footer layout
      articles/          # Blog/articles listing (add [slug] when Sanity connected)
      adventures/        # Activity hub and [category] pages
      gear/              # Gear reviews listing (add [slug] when Sanity connected)
      gallery/           # Photo/video grid
      about/             # Brand story
  components/
    primitives/          # Atoms: Button, Heading, Text, Link, Image, Badge, etc.
    layout/              # Header, Footer, Navigation, Container, Grid, Section
    three/               # 3D: SceneProvider, HeroTerrain, FallbackVisual
    seo/                 # JSON-LD components
    sanity/              # PortableText renderer
    personalization/     # Phase 2 hooks: consent, time-of-day theme
  lib/
    sanity/              # Sanity client, queries, image builder, schemas
```

## Important Files
- `next.config.ts` — static export config, image loader
- `src/app/globals.css` — complete design system (OKLCH tokens, fluid type, textures)
- `src/app/layout.tsx` — root layout (ThemeProvider, SkipLink)
- `src/lib/sanity/schemas/blockContent.ts` — Portable Text schema
- `src/components/three/SceneProvider.tsx` — 3D orchestration with fallbacks
- `.htaccess` — DreamHost Apache config (gzip, cache, security headers)
- `scripts/deploy.sh` — rsync deployment to DreamHost

## Design System
- **Colors**: OKLCH palette — stone (neutrals), forest (green), ember (orange), creek (blue), ridge (red)
- **Typography**: Fluid clamp() scale from xs to hero
- **Dark mode**: Default. Light via `.light` class from next-themes
- **Textures**: Grain overlay via `body::after`, topo-lines SVG for backgrounds

## Commands
- `npm run dev` — local dev server
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint
- `npm run deploy` — build + rsync to DreamHost

## Sanity Setup
Sanity project ID needs to be set in environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (defaults to "production")

Use Sanity's hosted studio at sanity.io/manage (embedded studio removed to save build memory on 2GB DreamHost). To re-add: `npm install sanity`, create `src/app/studio/[[...tool]]/page.tsx`.

When connecting Sanity:
1. Add article `[slug]` and gear `[slug]` dynamic routes back
2. Update `generateStaticParams` to fetch slugs from Sanity
3. Replace placeholder content in pages with Sanity queries

## Security
- `.env*` files are gitignored — never commit Sanity tokens or secrets
- `.htaccess` includes security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- No tracking cookies or third-party scripts

## Phase 2 Hooks (Scaffolded)
- Personalization: time-of-day ambient hue, seasonal content
- 3D: WebGPU terrain hero (currently falls back to CSS gradient)
- Consent: minimal banner, no tracking cookies
