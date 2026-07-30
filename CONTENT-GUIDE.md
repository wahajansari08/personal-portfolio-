# Tunis template — content & customization guide

This project is a **Next.js** portfolio. There is **no built-in admin or upload UI**. You change copy, lists, and media by **editing TypeScript data files** and **adding files under `public/`**.

---

## 1. Where text and lists live (`data/`)

| File | What it controls |
|------|------------------|
| **`data/hero.ts`** | Home hero: greeting, name, roles, short bio, hero image path, primary CTA |
| **`data/about.ts`** | About page + “More about me” modal: headings, stats, CV PDF link, photo, personal info columns |
| **`data/projects.ts`** | Portfolio: every project (title, category, filter tab, slug, client, tags, link, image, YouTube/slider/video fields) |
| **`data/navigation.ts`** | Sidebar / mobile menu: labels, routes, Font Awesome icon classes |
| **`data/blog.ts`** | Blog listing and post bodies |
| **`data/contact.ts`** | Contact page copy / structure (if used) |
| **`data/services.ts`** | Services section |
| **`data/social.ts`** | Social profile URLs |
| **`data/testimonials.ts`** | Testimonials (only if you render `TestimonialsSection` on a page) |

**Field shapes and types** are defined in **`types/index.ts`**. If you add a new property to an object in `data/`, add or extend the matching interface there and fix any TypeScript errors.

---

## 2. Images, PDFs, and static files (`public/`)

Paths in data files usually start with **`/`** (site root). Files live under **`public/`**:

| Example path in data | File on disk |
|----------------------|--------------|
| `/img/img-mobile.jpg` | `public/img/img-mobile.jpg` |
| `/img/projects/project-1.jpg` | `public/img/projects/project-1.jpg` |
| `/img/sample.pdf` (CV) | `public/img/sample.pdf` |

After adding or renaming a file, **restart dev** if the dev server does not pick it up.

---

## 3. Portfolio grid & slideshow popup

- **Edit projects:** `data/projects.ts`  
- **Filter tabs** (ALL, LOGO, VIDEO, etc.) use each project’s **`filterCategory`** — it must match the keys used in `PortfolioFilter` (`types/index.ts` → `PortfolioFilterTab`).
- **Lightbox / popup** content (title, client, tags, preview link, embedded YouTube, etc.) comes from the **same** project object. Update that entry in `data/projects.ts`.
- **UI for the popup** (labels, layout): `components/portfolio/PortfolioFilter/PortfolioFilter.tsx` (`SlideshowFigcaption`, `ProjectMedia`).
- **How many tiles show per filter tab:** `components/portfolio/portfolioGridProjects.ts` (`FILTER_GRID_MAX`, fill logic).

---

## 4. “More about me” modal (home)

- **Copy & resume data:** `data/about.ts` (and types in `types/index.ts` for `AboutData`, etc.).
- **Component:** `components/home/AboutMeModal/AboutMeModal.tsx`.
- **Opens from:** `components/home/HeroSection/HeroSection.tsx` (primary button).

---

## 5. Site metadata & layout

| What | Where |
|------|--------|
| Default `<title>` / description | `app/layout.tsx` → `metadata` |
| Per-page title | Each `app/**/page.tsx` can export `metadata` |
| Global CSS load order | `app/layout.tsx` (Bootstrap, circle, globals, skin, styleswitcher) |
| Fonts | `app/layout.tsx` — `next/font` (Poppins, Open Sans) |

---

## 6. Styling & theme color

| Area | Where to look |
|------|----------------|
| Main layout & page CSS | `styles/globals.css` |
| Accent / brand color variable | `styles/skins/globalcolor.css` — e.g. **`--skin-accent`** on `:root` (adjust one value to retint links, buttons, portfolio accents, etc.) |
| Skill circles | `styles/skins/circle.css` |
| Theme toggle tab | `styles/styleswitcher.css` (`#showSwitcher`) |
| Dark / light body class | `hooks/useTheme.ts` + `body.light` rules in `globals.css` |

---

## 7. Bootstrap 5 notes

- Grid / utilities come from **`bootstrap`** (`import "bootstrap/dist/css/bootstrap.min.css"` in `app/layout.tsx`).
- Prefer **`text-start` / `text-end`** over `text-left` / `text-right`, and **`text-center`** + breakpoint utilities (e.g. **`text-lg-start`**) for responsive alignment.

---

## 8. Adding a new page section

1. Add or reuse a component under **`components/`**.  
2. Import it into the right **`app/.../page.tsx`** (or into a layout if it should appear everywhere).  
3. If it needs copy from data, add a **`data/*.ts`** module (or extend an existing one) and import it in the component.

---

## 9. Build & run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

---

## Quick checklist for a new “user” of the template

1. Replace **`data/hero.ts`** and hero image under **`public/img/`**.  
2. Fill **`data/about.ts`** + CV file path.  
3. Replace **`data/projects.ts`** and project images under **`public/img/projects/`**.  
4. Update **`data/navigation.ts`** and **`data/social.ts`**.  
5. Set accent color via **`--skin-accent`** in **`styles/skins/globalcolor.css`**.  
6. Adjust **`metadata`** in **`app/layout.tsx`** (and per-route pages as needed).

For deeper UI changes, search the repo for the **route** (`app/`) then follow imports into **`components/`** and **`styles/`**.
