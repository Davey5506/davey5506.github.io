# Portfolio Visual Revamp — Design Spec

**Date:** 2026-07-31
**Project:** `portfolio` (React + Vite personal site, davey5506.github.io)

## Goal

Make the existing portfolio site look more professional without changing its major design elements or overall page layout (fixed header/nav, About → Skills → Education → Awards → Footer section order, dark theme with blue accent, IBM Plex Mono typography identity, gradient-underline heading treatment).

Two specific pain points drive this revamp:
1. The dark theme feels flat/template-y — flat surfaces, no depth, unrefined spacing.
2. The horizontal-scroll carousels (Skills, Education, Awards) with arrow buttons feel clunky.

## 1. Visual System

**Color palette**
- Keep `--primary-color: #0D0D0D` as the page background.
- Keep `--main-accent-color: #1A6FE5` as the sole accent color (used for the heading underline effect, links/hover states, buttons).
- Remove `--secondary-accent-color` (`#0EBE2C`) — it's currently defined but unused anywhere in the codebase. Single-accent system is cleaner and more cohesive.
- Add a new card/surface tone (e.g. `#161616`–`#1C1C1C`) distinct from both the pure-black background and the existing `--secondary-color: #262626` (footer/mobile-menu background), so grid cards visually lift off the page. Add subtle box-shadow and/or a faint border to cards for depth instead of flat color blocks.

**Typography**
- Keep IBM Plex Mono for headings (h1–h5), nav links, and accent/label text — this is the site's visual identity.
- Add Inter (Google Fonts, same `@import` pattern as the current IBM Plex Mono import) for body copy: About paragraph text, skill/award/course description text, list items.
- Refine the existing `clamp()`-based responsive type scale for better rhythm/line-height; keep the clamp approach itself (already responsive-friendly).
- Keep the gradient-underline treatment on h2/h3 (background-image linear-gradient trick) as the signature heading style, but clean up thickness/offset values so it reads as intentional.

## 2. Layout & Components

**Header / Nav** (`Header.jsx`, `Nav.jsx`, `Menu.jsx`) — no structural change.
- Keep fixed header, "DK" logo mark, nav link list, mobile hamburger + slide-in menu.
- Tighten padding/alignment; give the mobile menu slide-in a subtle shadow and cleaner internal spacing.

**About** (`About.jsx`) — no structural change.
- Keep portrait + text side-by-side (stacking on mobile, as today).
- Refine portrait treatment: subtle border/shadow instead of a flat border-radius block.
- Tighten spacing between name and body text.

**Skills / Education / Awards** (`Skills.jsx`, `Education.jsx`, `Awards.jsx`) — layout change (directly addresses pain point #2).
- Replace the horizontal-scroll-snap carousel + left/right arrow buttons with a responsive card grid (CSS grid or flex-wrap, `auto-fill`/`minmax`) that shows all items at once, wrapping per viewport width (roughly 3 columns desktop → 2 tablet → 1 mobile).
- Card content stays the same as today:
  - Skills: skill name + detail text.
  - Education: school + degree/GPA + course lists.
  - Awards: award name + issuer/date + detail text.
- Cards adopt the new surface/shadow treatment from section 1.
- Remove the `useRef`/`scrollBy` carousel logic and the `FaChevronLeft`/`FaChevronRight` scroll buttons from all three components — no longer needed.

**Footer** (`Footer.jsx`) — no structural change.
- Keep the two-column (Social Media / Contact Info) layout; align spacing/typography with the refined system.

## 3. Scope / Non-goals

- No content or copy changes — `Details.js` data (skills, education, awards, courses) is untouched.
- No new page sections, no navigation restructuring.
- No new runtime dependencies beyond a Google Fonts `@import` for Inter (same mechanism already used for IBM Plex Mono).
- Unrelated existing issues (e.g. the unused `@react-three/drei` dependency in `package.json`) are out of scope — not touched.

## 4. Implementation Surface

- `src/style/index.css` — updated design tokens (colors, fonts, type scale), new card/grid styles, removal of scroll-carousel-specific styles (`.scroll-container`, `.scroll-content`, `.scroll-button`, etc. replaced with grid equivalents).
- `src/sections/Skills.jsx`, `src/sections/Education.jsx`, `src/sections/Awards.jsx` — remove carousel/scroll-ref logic, render items into a grid container instead.
- `src/sections/About.jsx`, `src/sections/Header.jsx`, `src/sections/Nav.jsx`, `src/sections/Menu.jsx`, `src/sections/Footer.jsx` — styling/className touch-ups only, no structural/logic changes.
- `src/sections/Details.js` — untouched.

## 5. Verification Plan

Run the Vite dev server (`npm run dev`) and visually verify every section (Header/Nav incl. mobile menu, About, Skills, Education, Awards, Footer) across:

- **Viewports:** ~375px (mobile), ~768px (tablet breakpoint), ~1440px (desktop) — confirm the new grids wrap cleanly at each size and match the existing mobile-menu breakpoint (768px) already used in the codebase.
- **Browsers:** Chrome and Firefox — confirm fonts, shadows, gradient-underline headings, and grid layout render consistently in both engines (checked via the Chrome browser automation tool for Chrome, and either manual Firefox verification or noted as a follow-up if Firefox automation isn't available in this environment).
- **Functional checks:** mobile hamburger menu opens/closes and links still scroll to the correct section anchors; all external links (LinkedIn, GitHub, mailto) still work; no console errors.

No automated test suite exists for this project (styling/marketing site) — verification is visual/manual, consistent with the existing project.
