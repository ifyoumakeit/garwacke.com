# davegarwacke.com

Personal portfolio of Dave Garwacke — Staff Software Engineer. A single-page
site built with [Astro](https://astro.build): zero client-side JavaScript,
accessible, and fast.

## Editing content

All content lives in one place — [`src/data/resume.ts`](src/data/resume.ts).
Edit the `profile`, `experience`, `skills`, `education`, and `personal` objects;
the page rebuilds from that data.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
npm run check    # type-check
```

## Structure

```
src/
  data/resume.ts      # single source of truth for all content
  layouts/Base.astro  # <head>, meta, Open Graph, JSON-LD
  pages/index.astro   # the page + all styles
  styles/global.css   # design tokens, light/dark theme, resets
public/
  img/                # portrait + photos
  favicon.svg
```
