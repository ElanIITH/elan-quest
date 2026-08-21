## Nexus Quest Website

**Official website:** [quest.elan.org.in](https://quest.elan.org.in)

**Description:** Nexus Quest is the official online portal for the Olympiad organized by **Elan & nVision**. This website provides participants with information, registration, event details, and results.

---

## Tech Stack

* **Frontend Framework:** Next.js 13+ (App Router)
* **Styling:** Tailwind CSS
* **Font Management:** Google Fonts via `next/font/google` (no theme font currently applied — running on the system font stack until next year's theme picks one; see `THEME_GUIDE.md`)
* **Hosting:** Cloudflare

---

## Theming

This codebase was de-themed into a reusable skeleton on the `skeleton-base` branch — colors, fonts, and decorative assets are centralized into a handful of files so a new theme can be applied quickly. See [`THEME_GUIDE.md`](./THEME_GUIDE.md) for exactly what to edit.

---