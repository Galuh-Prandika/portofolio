# Project Context

Last reviewed: 2026-05-15

## Stack

- Next.js 16.2.4 with App Router.
- React 19.2.4.
- Tailwind CSS v4 through `@tailwindcss/postcss`.
- Three.js and `postprocessing` power the interactive PixelBlast background.
- TypeScript is strict, with `@/*` mapped to the project root.

## Local Instructions

- `AGENTS.md` says this Next.js version may differ from older assumptions.
- Before changing Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.
- For this review, the relevant docs checked were:
  - `node_modules/next/dist/docs/01-app/index.md`
  - `node_modules/next/dist/docs/03-architecture/accessibility.md`

## Current Routes

- `/` renders `app/page.tsx`, which wraps `HomeExperience`.
- `/about` renders `app/about/page.tsx`.
- `/explore` renders `app/explore/page.tsx`.
- `/works` renders `app/works/page.tsx`, which wraps `WorksExperience`.
- Both routes are static after production build.

## Main Components

- `components/home-experience.tsx`
  - Client component.
  - Coordinates `FigmaHeader`, `DiaFooter`, and `useScrollIntent`.

- `components/figma-header.tsx`
  - Main homepage hero.
  - Includes nav, logo, animated role text, bio copy, company links, and PixelBlast background.
  - Hides/repositions hero and fades PixelBlast when scroll intent is active.

- `components/works-experience.tsx`
  - Works page with custom desktop wheel scrolling through a two-column image grid.
  - On scroll exhaustion, shows `DiaFooter`, then resets the project strip back to the top.
  - Has separate mobile end-of-page handling for touch and wheel.

- `components/PixelBlast.jsx`
  - Client-only Three.js shader background.
  - Handles WebGL renderer lifecycle, resize observer, pointer ripple input, optional liquid/noise postprocessing, and offscreen pause behavior.

- `components/dia-text-reveal.tsx`
  - Reusable animated gradient/masked text reveal.
  - Supports repeated phrase cycling and fixed-width sizing.

- `components/dia-footer.tsx` and `components/dia-footer-gradient.tsx`
  - Fixed bottom animated gradient footer used by both homepage and projects page.

- `components/navbar-logo.tsx`
  - Layered logo/avatar link back to `/`.

## Assets

- Work thumbnails live in `public/works/dribbble-shot-hd-1.png` through `dribbble-shot-hd-34.png`.
- Header/logo assets include `public/navbar-avatar.png` and `public/navbar-gradient.png`.
- Additional SVG/PNG assets exist under `public/`, including legacy or unused portfolio assets.

## Current Validation

The project passed:

```bash
npm run lint
npm run build
```

Build output showed static routes for `/`, `/_not-found`, and `/works`.

## Notes For Future Work

- The worktree already had many modified and untracked files at review time. Do not assume these changes were made by the current assistant session.
- `README.md` still contains default create-next-app text and does not describe the actual portfolio implementation.
- Several components appear unused in the current route tree, including `Intro`, `SkillsSection`, `LinkSection`, `Newsletter`, and `MinimalFooter`.
- Navigation uses a mix of `next/link` for the logo and plain `<a>` tags for nav items.
- The site is animation-heavy, so any visual change should be checked in browser across desktop and mobile widths.
