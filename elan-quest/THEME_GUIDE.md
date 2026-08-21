# Applying a New Theme to Nexus Quest

This site was deliberately stripped of last year's theme so a new one can be
applied fast. Almost everything below is editing existing values in a small
number of files — not rebuilding pages.

---

## 1. Colors — `app/globals.css`

Everything on the site reads from four CSS variables in the `:root` block:

```css
--background: #ffffff;        /* page background */
--foreground: #111111;        /* main text / dark elements */
--surface: #f5f5f5;           /* navbar, footer, cards — a step off background */
--surface-foreground: #111111; /* text/icons on top of --surface */
```

Change these four values and the whole site re-colors — navbar, footer,
buttons, headings, everything. Nothing else needs to be touched for a basic
color pass.

## 2. Fonts — `app/layout.tsx`

There's a comment block in this file showing exactly how to add theme fonts
back in (it was intentionally left as plain system fonts with no theme
picked yet). Steps:

1. Import your two Google Fonts via `next/font/google`
2. Give each a `variable` name
3. Update `--font-body` / `--font-heading` in `globals.css` to reference them
   instead of the current system-font fallback
4. Add the font variable classes to the `<html className={...}>` in
   `layout.tsx`

## 3. Copy & dates — `app/lib/site-config.ts`

The home page's event date, event name, tagline, and the three section
blurbs all live here — one file, plain text, no JSX. Edit this and the home
page updates without touching `page.tsx` at all.

## 4. Section headings — `app/components/common/SectionHeading.tsx`

Every page title ("Exam Details", "Syllabus", "Results", etc.) renders
through this one shared component instead of being a separate hardcoded
image per page like before. Want next year's headings to look different
(different weight, a color accent, a small icon)? Change it once here and
every page picks it up.

## 5. Theme illustrations / decorative art — `public/theme-assets/`

This folder holds last year's decorative images (logo, arrows, icons) that
aren't currently referenced by any code — they were archived here rather
than deleted. If next year's theme wants custom illustrated icons instead of
the current plain `lucide-react` icons, drop new images in this folder and
swap the relevant `<Icon />` component for an `<img>` tag pointing at them.
Nothing else in the codebase depends on this folder's contents.

## 6. What NOT to touch for a routine reskin

- `app/components/common/RegisterPopUp.tsx`, `NavBar.tsx`, `Menu.tsx`,
  `MainWrapper.tsx` — functional, not theme-coupled beyond the 4 color
  variables above
- Any page's actual data/logic (syllabus content in `content.tsx`, the
  results process/awards lists, exam format numbers, dates) — these are
  real content, not theme, and are separate from anything above
- `tailwind.config.js` — intentionally empty, nothing to configure here

---

## Known issue, not part of theming

`app/exam-details/page.tsx` shows different exam dates on desktop vs. mobile
(Dec 2025/Jan 2026 vs. Oct 2025/Feb 2026). This is a pre-existing content
bug, unrelated to the de-theming work — flag it to whoever owns the actual
exam schedule.

---

## Background: why the site looks this way right now

This codebase was deliberately stripped of the prior "retro pixel-art" theme
(dark background, `Press_Start_2P` font, ~30 individual pixel-art SVGs used
as section headings, illustrations, and buttons) so future years wouldn't
have to untangle an old theme to apply a new one. See `git log` on the
`skeleton-base` branch, and the `v2026-live` tag, for the exact before/after.