# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (davey5506.github.io) — a single-page React 19 + Vite app. The repo root is only a wrapper: **all app code and npm commands live in `portfolio/`**.

## Commands

Run from `portfolio/`:

```bash
npm install        # or `npm ci` (what CI uses)
npm run dev        # Vite dev server with HMR
npm run build      # production build → portfolio/dist
npm run preview    # serve the built dist locally
npm run lint       # ESLint (flat config in eslint.config.js)
```

There is no test suite.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which runs `npm ci` + `npm run build` in `portfolio/` (Node 22) and deploys `portfolio/dist` to GitHub Pages. Any commit to `main` goes live. The workflow uses forks of the standard actions under the `Davey5506/` namespace (e.g. `Davey5506/checkout@v4`) rather than `actions/*`.

## Architecture

- `src/App.jsx` composes the page sections in order (Header → Menu → About → Experience → Skills → Education → Awards → Footer) and owns the shared state: `windowWidth` and `menuOpen`. It also defines the `sections` array used for nav links; each `path` must match a section element's `id` (note the inconsistent casing, e.g. `#About` vs `#skills`).
- Responsive nav is JS-driven, not CSS-only: `Nav.jsx` registers the window `resize` listener and renders inline links above 768px, otherwise a hamburger button that toggles `menuOpen`, which `Menu.jsx` uses for the slide-in mobile menu.
- **Content lives in `src/sections/Details.js`**, not in the components. It exports arrays of self-contained object literals — `skills`, `experience`, `schools`, `awards` — and the section components (`Skills.jsx`, `Experience.jsx`, `Education.jsx`, `Awards.jsx`) each map one array into `.card` elements inside a `.card-grid`, so array order is display order. Course lists flow into balanced CSS columns (`.course-box`) automatically.
- Styling is a single global stylesheet, `src/style/index.css`, with design tokens as CSS custom properties on `:root` (colors, fonts, `clamp()`-based type scale). Fonts: IBM Plex Mono for headings/nav/labels, Inter for body text, loaded via Google Fonts `@import`. Dark theme with a single blue accent (`--main-accent-color`); headings use a gradient-underline effect (`.var-background`).
- PropTypes are used for prop validation (no TypeScript).

## Design docs

`docs/superpowers/specs/` and `docs/superpowers/plans/` hold the design spec and implementation plan for the 2026-07-31 visual revamp (card grids replacing carousels, card surface tokens, typography). Keep visual changes consistent with that spec: preserve the section order (Experience was added after the spec, between About and Skills), fixed header, dark theme, single accent color, and IBM Plex Mono identity.
