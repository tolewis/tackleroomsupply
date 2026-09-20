# tackleroomsupply

**This is a static saltwater fishing content site that publishes destination guides, species guides, and gear reference pages, and sends readers to thetackleroom.com to shop.**

The site covers five saltwater destinations: Florida Keys, North Carolina, Bahamas, Louisiana, and Gulf Coast. Species and gear guides are canonical on thetackleroom.com. Destination guides are canonical on tackleroomsupply.com. The two sites cross-link with teaser cards and shop calls to action. The site builds to plain HTML with Next.js static export and runs on shared hosting with no server-side code.

```text
$ npm run build

   ▲ Next.js 16.1.6

   Creating an optimized production build ...
   ✓ Compiled successfully

   Static export to out/
   Generating sitemap via scripts/generate-sitemap.mjs
```

## The plan, in plain terms

The site exists to feed the shop. It earns search traffic with long destination guides, then sends that traffic to product and guide pages on thetackleroom.com.

> Content earns the visit. The shop gets the click.

From that rule:

1. Destination guides live here and carry the full editorial weight. They are long, fact-checked, and cross-linked to species and gear pages.
2. Species and gear pages are teasers. Their canonical home is thetackleroom.com. Each page links out with a shop call to action.
3. Every page ships as static HTML. No server runtime means the site runs on cheap shared hosting and stays up.
4. Facts come from a checked knowledge base, not from memory. The content build verified claims against saltwater-kb.

## How we got here

The repo started on 2026-03-02. Commit `d747cea` forked the structure from an earlier Unhook Outdoors site and set coastal fishing branding. The first build had Home, Stories, Gear, Species, Gallery, and About pages.

The same day, commit `5204686` filled the site with content: 40 saltwater species, 5 destinations, 12 story links, 12 gear guides, and 84 images. That commit also set the content rule the site still follows. Gear and species guides stay canonical on thetackleroom.com. Destination guides are canonical here.

The image work was the first repair cycle. Commit `a45b391` fixed 27 broken or inaccurate images and swapped the hero to a spearfishing shot. Commit `5ee9cf1` converted 129 JPEGs to WebP. The payload went from 18MB to 11MB, a 39 percent cut. The same commit added an HTTP to HTTPS 301 redirect.

Commit `59f26a0` fixed the domain story. The sitemap pointed at the wrong domain. The commit moved it to tackleroomsupply.com, renamed the package, and added an .htaccess with gzip, caching, security headers, and sensitive file blocking.

Commit `d0f87d1` split the single destinations page into a hub plus five individual pages, one per destination, for search targeting. Commit `792512a` then expanded every destination guide and verified the facts against the saltwater-kb knowledge base, which held 94,916 claims in 1,586 truth cards. The Florida Keys guide reached about 3,500 words with a month-by-month calendar and tackle specs. Commit `55e3e8c` added regulations, fly fishing, offshore, and wade content to all five. Commit `623a028` fixed nav pills that were invisible gray on the destination pages. Commit `dfbe2fa` merged the Quick Facts section on the Keys page to remove a double padding gap.

In March 2026 the repo carried the Saltwater Tides app pages. Commit `8083bca` added privacy policy and terms pages for that app. Commit `f197296` moved to annual-only pricing and removed a stale pages directory. Commit `c14ec62` renamed the company to Unhook, LLC. Commit `75311b4` added product cards, blog cross-links, and gear sections to the destination pages.

The repo then went quiet for five months. In August and September 2026, documentation caught up with the fleet. Commit `747cd63` added the AGENTS.md working agreement. Commit `237b853` applied the tolewis/template, which named Test-Bench as the testing solution and set the rule that this repo owns its own unit, route, and component tests. Commit `ee757e6` added robots.txt for crawl hygiene.

## Infrastructure map

```text
  Author workstation
  ------------------
  npm run dev   ->  Next.js dev server on http://localhost:3000

  Build (local)
  -------------
  npm run build
    |-- next build, output: 'export'  ->  static HTML in out/
    |-- postbuild: node scripts/generate-sitemap.mjs
    |      writes public/sitemap.xml for tackleroomsupply.com
    |-- next-image-export-optimizer
    |      optimizes local images; content images also load
    |      from the Sanity CDN over HTTPS
    |
    v
  npm run deploy  ->  scripts/deploy.sh
    reads env: REMOTE_HOST, REMOTE_USER, REMOTE_PATH, LOCAL_OUT
    rsync out/  ->  DreamHost shared host (Apache)

  Production host: DreamHost, Apache
  ----------------------------------
  serves static HTML from the deploy path (REMOTE_PATH)
  map/.htaccess and site .htaccess:
    gzip, cache headers, security headers
    HTTP -> HTTPS 301 redirect
  robots.txt + sitemap.xml for crawler hygiene

  External services
  -----------------
  Sanity (headless CMS, free tier)
    env: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
    schemas in src/lib/sanity/schemas/
    studio hosted at sanity.io/manage
    serves CMS images over its CDN
    TODO: verify dataset name and project id at deploy time

  thetackleroom.com (Shopify storefront)
    species and gear guides link here
    /products/ and /collections/ and /blogs/news/*

  saltwater-kb (knowledge base, build-time reference only)
    94,916 claims, 1,586 truth cards
    not a runtime dependency
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static export to `out/`, then sitemap generation
- `npm run lint` — ESLint
- `npm run deploy` — build + rsync to DreamHost

## Deployment

`npm run deploy` runs `scripts/deploy.sh`, which rsyncs the `out/` directory to DreamHost. The script reads these environment variables:

- `REMOTE_HOST`
- `REMOTE_USER`
- `REMOTE_PATH`
- `LOCAL_OUT`

Set them in your shell or in a gitignored env file. Do not commit their values.

## Sanity Setup

Sanity project ID needs to be set in environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (defaults to "production")

Use Sanity's hosted studio at sanity.io/manage (embedded studio removed to save build memory on 2GB DreamHost). To re-add: `npm install sanity`, create `src/app/studio/[[...tool]]/page.tsx`.

When connecting Sanity:

1. Add article `[slug]` and gear `[slug]` dynamic routes back
2. Update `generateStaticParams` to fetch slugs from Sanity
3. Replace placeholder content in pages with Sanity queries

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

## Security

- `.env*` files are gitignored — never commit Sanity tokens or secrets
- `.htaccess` includes security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- No tracking cookies or third-party scripts

## Phase 2 Hooks (Scaffolded)

- Personalization: time-of-day ambient hue, seasonal content
- 3D: WebGPU terrain hero (currently falls back to CSS gradient)
- Consent: minimal banner, no tracking cookies

## Working agreement

See [AGENTS.md](AGENTS.md) for the full working agreement. The short form:

- Ship small verified commits straight to `main`. Branches are for big changes only.
- Review is agent-to-agent.
- Never commit secrets. `.pem`, `.env`, keys, and tokens stay out of git.
- This repo owns its own unit, route, and component tests. Test-Bench (`git@github.com:tolewis/Test-Bench.git`) is the fleet testing solution and proves what a running system does. Read `docs/WHAT-BELONGS-HERE.md` in Test-Bench before you write a manifest.
- Clone and pull over SSH only: `git@github.com:tolewis/tackleroomsupply.git`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Credits

- [Next.js](https://nextjs.org) — the framework
- [React](https://react.dev) — UI library
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Sanity](https://www.sanity.io) — headless CMS
- [Three.js](https://threejs.org) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — 3D
- [next-themes](httpsgithub.com/pacocoursey/next-themes) — theme handling
- [next-image-export-optimizer](https://github.com/Niels-Leenheer/next-image-export-optimizer) — image pipeline

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
