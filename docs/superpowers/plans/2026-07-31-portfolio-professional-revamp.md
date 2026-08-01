# Portfolio Professional Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the `portfolio` React/Vite site a more professional look — deeper visual polish on the dark theme and a card-grid replacement for the clunky Skills/Education/Awards carousels — without changing its overall page structure or content.

**Architecture:** All visual-system changes (colors, fonts, card/grid primitives) live in the single global stylesheet `src/style/index.css`. Skills, Education, and Awards each get their `useRef`/scroll-button carousel logic replaced with a plain grid of `.card` elements inside a shared `.card-grid` container. Header/Nav/Menu, About, and Footer get styling-only touch-ups — no JSX structural changes there.

**Tech Stack:** React 19, Vite 7, plain CSS (no CSS-in-JS/Tailwind), Google Fonts (`@import` in CSS), `react-icons` (only remaining use is removed by this plan — package itself is left in `package.json`, out of scope per spec).

## Global Constraints

- Keep `--primary-color: #0D0D0D` and `--main-accent-color: #1A6FE5` unchanged — the accent/background identity does not change.
- Remove the unused `--secondary-accent-color` (`#0EBE2C`) CSS variable — confirmed unused anywhere in `src/`.
- Keep IBM Plex Mono for headings (h1–h5), nav links, and accent/label text. Add Inter for body copy only (paragraphs, list items).
- Keep the gradient-underline treatment on h2/h3 — refine its thickness/position, do not remove it.
- No new npm dependencies except the Inter Google Font, added via the existing `@import url(...)` line already used for IBM Plex Mono in `src/style/index.css:1`.
- No changes to `src/sections/Details.js` (content/copy data) at all.
- No structural/JSX changes to `Header.jsx`, `Nav.jsx`, `Menu.jsx`, `About.jsx`, `Footer.jsx` — styling only.
- Mobile breakpoint stays `768px` (the value already used throughout `src/style/index.css`).
- This project has no automated test suite. "Testing" a step means: run the Vite dev server, view the change in a browser, and confirm the described visual/functional outcome.

---

### Task 1: Install dependencies and add the visual-system foundation (colors, fonts, refined underline)

**Files:**
- Modify: `portfolio/src/style/index.css:1-16` (font import + `:root` tokens)
- Modify: `portfolio/src/style/index.css:56-97` (h2/h3 underline refinement)
- Modify: `portfolio/src/style/index.css:110-129` (p/li body font)
- Modify: `portfolio/src/style/index.css:199-207` (`.var-background` underline refinement)

**Interfaces:**
- Produces (consumed by all later tasks): CSS custom properties `--card-color`, `--card-border-color`, `--card-shadow`, `--body-font-family`, all defined on `:root` in `index.css`.
- Produces: refined `--font-size-p` value (fixes an existing low-end clamp bug where body text could shrink to `0.5rem`).

- [ ] **Step 1: Install npm dependencies**

```bash
cd portfolio && npm install
```
Expected: installs cleanly using the committed `package-lock.json`.

- [ ] **Step 2: Start the dev server**

```bash
cd portfolio && npm run dev
```
Expected: Vite prints a local URL (e.g. `http://localhost:5173/`). Leave it running for this and all later tasks.

- [ ] **Step 3: Update the font import and `:root` design tokens**

Replace lines 1–16 of `portfolio/src/style/index.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@400;500;600&display=swap');
:root {
    --primary-color: #0D0D0D;
    --secondary-color: #262626;
    --tertiary-color: #404040;
    --card-color: #181818;
    --card-border-color: #2E2E2E;
    --card-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
    --main-accent-color: #1A6FE5;
    --font-color: #F2F2F2;
    --font-family: "IBM Plex Mono", monospace;
    --body-font-family: "Inter", sans-serif;
    --font-size-h1: clamp(1.75rem, 1rem + 2vw, 2.5rem);
    --font-size-h2: clamp(1.5rem, 0.8rem + 2vw, 2.25rem);
    --font-size-h3: clamp(1.25rem, 0.7rem + 1.5vw, 1.75rem);
    --font-size-h4: clamp(1.1rem, 0.6rem + 1.5vw, 1.5rem);
    --font-size-h5: clamp(1rem, 0.6rem + 1vw, 1.25rem);
    --font-size-p: clamp(0.95rem, 0.85rem + 0.3vw, 1.05rem);
}
```

Notes: `--secondary-accent-color` is dropped (unused). `--font-size-p` previously bottomed out at `0.5rem`; the new clamp keeps body text between `0.95rem` and `1.05rem`. The unused `Outfit` font import is replaced by `Inter`.

- [ ] **Step 4: Refine the gradient-underline heading style**

In the `h2` rule, change:
```css
    background-size: 100% 0.75rem;
    background-position: 0 85%;
```
to:
```css
    background-size: 100% 0.35rem;
    background-position: 0 88%;
```
Apply the identical change to the `h3` rule and to `.var-background` (same two properties in each). Leave `.scroll-content .scroll-item h3` alone — it's removed in Task 5.

- [ ] **Step 5: Switch body text (`p`, `li`) to Inter**

Replace the `p` rule with:
```css
p{
    font-family: var(--body-font-family);
    font-size: var(--font-size-p);
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    color: var(--font-color);
    width: clamp(250px, 60%, 800px);
}
```
Replace the `li` rule with:
```css
li {
    font-family: var(--body-font-family);
    font-size: var(--font-size-h5);
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    width: fit-content;
    color: var(--font-color);
}
```

- [ ] **Step 6: Visually verify in the browser**

Reload `http://localhost:5173/`: body paragraph text renders in Inter, headings still render in IBM Plex Mono with a visibly thinner blue underline, no layout breakage, no console errors.

- [ ] **Step 7: Commit**

```bash
git add portfolio/src/style/index.css
git commit -m "style: refine color/typography tokens and heading underline"
```

---

### Task 2: Skills section — introduce the card grid

**Files:**
- Modify: `portfolio/src/style/index.css` (add `.card-grid` and `.card` rules)
- Modify: `portfolio/src/sections/Skills.jsx` (replace carousel with grid)

**Interfaces:**
- Consumes: `--card-color`, `--card-border-color`, `--card-shadow` from Task 1.
- Produces (consumed by Task 3 and 4): CSS classes `.card-grid` and `.card`.

- [ ] **Step 1: Add the `.card-grid` and `.card` CSS classes**

Add this block right after the `:root` block, before `#root { ... }`:

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    width: clamp(300px, 90%, 1100px);
    margin: 2rem auto;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--card-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.75rem;
    box-shadow: var(--card-shadow);
    padding: 1.5rem;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
}

.card h3 {
    margin: 0 0 0.5rem;
}

.card p {
    width: 100%;
    margin: 0;
}
```

(`auto-fit`, not `auto-fill`, so a section with only a couple of items — like Education — stretches its cards to fill the row instead of leaving empty trailing tracks.)

- [ ] **Step 2: Replace `Skills.jsx` carousel with a grid**

Replace the full contents of `portfolio/src/sections/Skills.jsx` with:

```jsx
import { Pskills } from './Details.js';

function Skills() {
    const skillElements = Pskills.map((skill) => (
        <div key={skill.name} className="card">
            <h3>{skill.name}</h3>
            <p>{skill.details}</p>
        </div>
    ));

    return (
        <section id="skills">
            <h2 style={{marginLeft: "2rem"}}>Skills</h2>
            <div className="card-grid">
                {skillElements}
            </div>
        </section>
    )
}
export default Skills;
```

- [ ] **Step 3: Visually verify in the browser**

Reload `http://localhost:5173/#skills`: all 10 skill cards visible at once, no arrows/scroll; multi-column at desktop, single column at ~375px with no horizontal overflow; cards show new surface/shadow and lift on hover; no console errors.

- [ ] **Step 4: Commit**

```bash
git add portfolio/src/style/index.css portfolio/src/sections/Skills.jsx
git commit -m "feat: replace Skills carousel with responsive card grid"
```

---

### Task 3: Education section — migrate to the card grid

**Files:**
- Modify: `portfolio/src/sections/Education.jsx`

**Interfaces:**
- Consumes: `.card-grid` and `.card` from Task 2. No new CSS needed.

- [ ] **Step 1: Replace `Education.jsx` carousel with a grid**

Replace the full contents of `portfolio/src/sections/Education.jsx` with:

```jsx
import { HighSchool, University } from "./Details.js";

function Education() {
    function mapCourses(courses){
        return courses.map((course, index) => (
            <div
                key={index}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <p style={{textAlign: "left", margin: "0", marginTop: "0.5rem"}}>{course.name}<br />{course.dates}</p>
            </div>
        ));
    }

    const EducationItem = ({ school, degree, gpa, courses, split }) => {
        const courses1 = courses.slice(0, split);
        const courses2 = courses.slice(split);
        return (
            <div
                key={school}
                className="card"
            >
                <h3>{school}</h3>
                <div style={{alignItems: "center", justifyItems: "center", width: "100%"}}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                    }}>
                        <h4>{degree}<br />GPA {gpa}</h4>
                    </div>
                    <div className="course-box">
                        <div style={{width: "fit-content"}}>
                            {mapCourses(courses1)}
                        </div>
                        <div style={{width: "fit-content"}}>
                            {mapCourses(courses2)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="education">
            <h2 style={{marginLeft: "2rem"}}>Education</h2>
            <div className="card-grid">
                <EducationItem {...University} split={3} />
                <EducationItem {...HighSchool} split={0} />
            </div>
        </section>
    );
}
export default Education;
```

- [ ] **Step 2: Visually verify in the browser**

Reload `http://localhost:5173/#education`: both cards visible at once, side by side at desktop width, stacked on mobile; course lists still render in their two-column layout inside each card; no console errors.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/sections/Education.jsx
git commit -m "feat: replace Education carousel with card grid"
```

---

### Task 4: Awards section — migrate to the card grid

**Files:**
- Modify: `portfolio/src/sections/Awards.jsx`

**Interfaces:**
- Consumes: `.card-grid` and `.card` from Task 2. No new CSS needed.

- [ ] **Step 1: Replace `Awards.jsx` carousel with a grid**

Replace the full contents of `portfolio/src/sections/Awards.jsx` with:

```jsx
import { Earnings } from './Details.js';

function Awards() {
    const awardElements = Earnings.map((earning) => (
        <div key={earning.name} className="card">
            <h3>{earning.name}</h3>
            <h5 style={{textAlign: "center"}}>{earning.issuer}<br />{earning.date}</h5>
            <p>{earning.details}</p>
        </div>
    ));

    return (
        <section id="Awards">
            <h2 style={{marginLeft: "2rem"}}>Awards</h2>
            <div className="card-grid">
                {awardElements}
            </div>
        </section>
    )
}
export default Awards;
```

- [ ] **Step 2: Visually verify in the browser**

Reload `http://localhost:5173/#Awards`: all 5 award cards visible at once, wrapping to fewer columns as viewport narrows; empty "Eagle Scout" details string renders with no awkward gap; no console errors.

- [ ] **Step 3: Commit**

```bash
git add portfolio/src/sections/Awards.jsx
git commit -m "feat: replace Awards carousel with card grid"
```

---

### Task 5: Remove now-unused carousel CSS

**Files:**
- Modify: `portfolio/src/style/index.css` (delete dead rules)

**Interfaces:**
- None produced — cleanup only. Depends on Tasks 2–4 being complete.

- [ ] **Step 1: Confirm nothing still references the old carousel classes**

```bash
cd portfolio && grep -rn "scroll-container\|scroll-content\|scroll-item\|scroll-button" src/sections/
```
Expected: no output.

- [ ] **Step 2: Delete the dead CSS rules**

Delete these rule blocks entirely from `portfolio/src/style/index.css`:
`.scroll-container`, `.scroll-content`, `.scroll-content::-webkit-scrollbar`, `.scroll-content .scroll-item`, `.scroll-content .scroll-item h3`, `.scroll-item p`, `.scroll-button`, `.scroll-button:hover`, `.scroll-button.left`, `.scroll-button.right`.

- [ ] **Step 3: Verify the site still builds and renders correctly**

```bash
cd portfolio && npm run build
```
Expected: build succeeds. Reload the dev server and confirm Skills/Education/Awards look identical to the end of Tasks 2–4 (pure cleanup, zero visual diff expected).

- [ ] **Step 4: Commit**

```bash
git add portfolio/src/style/index.css
git commit -m "chore: remove unused carousel CSS"
```

---

### Task 6: Header, Nav, and mobile Menu polish

**Files:**
- Modify: `portfolio/src/style/index.css` (`header`, `.mobile-menu` rules)

**Interfaces:**
- None — styling only.

- [ ] **Step 1: Give the fixed header breathing room and a separation edge**

Change the first `header` rule's `padding: 0 2rem;` and add `align-items`/border:

```css
header {
    display: flex;
    flex-direction: row;
    background-color: var(--primary-color);
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--card-border-color);
    z-index: 1000;
}
```

- [ ] **Step 2: Fix the duplicate `padding-top` in `.mobile-menu` and add a shadow**

Replace the `.mobile-menu` rule (it currently declares `padding-top` twice — `5rem` then `1.75rem`) with:

```css
.mobile-menu{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60%;
    padding-top: 1.75rem;
    background-color: var(--secondary-color);
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    box-sizing: border-box;
}
```

- [ ] **Step 3: Visually verify in the browser**

Desktop (~1440px): header has visible padding, bottom border, vertically centered logo/nav. Mobile (~375px): hamburger opens/closes the menu correctly, now with a drop shadow. No console errors.

- [ ] **Step 4: Commit**

```bash
git add portfolio/src/style/index.css
git commit -m "style: polish header spacing and mobile menu shadow"
```

---

### Task 7: About portrait and Footer polish

**Files:**
- Modify: `portfolio/src/style/index.css` (`.portrait`, `footer` rules)

**Interfaces:**
- None — styling only.

- [ ] **Step 1: Give the portrait image a card-like border/shadow**

Replace `.portrait` with:

```css
.portrait {
    border-radius: 5%;
    width: clamp(5rem, 40vw, 500px);
    aspect-ratio: 1 / 1;
    border: 2px solid var(--card-border-color);
    box-shadow: var(--card-shadow);
    object-fit: cover;
}
```

- [ ] **Step 2: Balance footer padding and add a top border**

Replace the `footer` rule with:

```css
footer {
    width: 100%;
    height: fit-content;
    background-color: var(--secondary-color);
    border-top: 1px solid var(--card-border-color);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 3rem 0 2rem;
}
```

- [ ] **Step 3: Visually verify in the browser**

Portrait now shows a subtle border/shadow with no distortion. Footer has balanced top/bottom padding and a top border; two columns sit side by side at desktop and stack at ≤799px. No console errors.

- [ ] **Step 4: Commit**

```bash
git add portfolio/src/style/index.css
git commit -m "style: polish portrait and footer spacing"
```

---

### Task 8: Cross-browser and cross-device verification pass

**Files:**
- None modified — verification-only. If a real bug surfaces, fix it in the relevant file from Tasks 1–7 and include that fix in this task's commit.

**Interfaces:**
- None.

- [ ] **Step 1: Production build sanity check**

```bash
cd portfolio && npm run build && npm run preview
```
Expected: build succeeds; preview server starts (typically `http://localhost:4173/`).

- [ ] **Step 2: Chrome — desktop, tablet, and mobile viewports**

Using the Chrome browser automation tool, check the preview URL at **1440px**, **768px**, and **375px**:
- Header/nav (hamburger below 768px) renders correctly; mobile menu opens/closes at 375px.
- About/Skills/Education/Awards render with no horizontal overflow.
- Card grids reflow to fewer columns as width shrinks, ending single-column at 375px.
- Footer columns sit side by side at 1440/768px, stack at 375px.
- Console (`read_console_messages`) shows zero errors/warnings at each width.

- [ ] **Step 3: Functional check in Chrome**

Click each nav link (About/Skills/Education/Awards) and confirm it scrolls to the right section. Confirm the LinkedIn, GitHub, and email footer links still point to `https://www.linkedin.com/in/david-kennedy-mmvi`, `https://github.com/Davey5506`, and `mailto:kpdmmvi@gmail.com`.

- [ ] **Step 4: Firefox check**

No Firefox automation tool exists in this environment, so this is a manual check:

```bash
start firefox "http://localhost:4173/"
```

Manually confirm the same three viewport widths (resize the window or use Firefox responsive mode, `Ctrl+Shift+M`) show the same layout as Chrome: grids reflow, header/mobile menu work, fonts and the underline effect render correctly. All CSS features used here (Grid, custom properties, `clamp()`, `box-shadow`, `border-radius`, `transform`, `transition`) are broadly supported in Firefox, so no incompatibility is expected. If Firefox isn't installed in this environment, note that and skip to Step 5 — don't install a browser as part of this plan.

- [ ] **Step 5: Record the outcome**

```bash
git commit --allow-empty -m "test: verify portfolio revamp across Chrome/Firefox and mobile/tablet/desktop viewports"
```

(Empty commit if everything passed with no additional file changes; otherwise fold any fix into this commit and adjust the message.)
