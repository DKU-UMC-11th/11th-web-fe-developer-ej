# Week 3 · UMCine

React + TypeScript movie pages with file-based routing and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

For the required production build, run `npm run build`.

## Routes

- `/` — movie list
- `/search?query=spider` — search local movie data
- `/movies/1` — movie detail

Route files live in `src/routes/`; screen components live in `src/pages/movies/`.

## Movie assets

Place the provided poster and backdrop files in `public/images/movies/`, using the filenames referenced by `src/data/movies.ts`. Public image files are used by their URL paths, such as `/images/movies/poster.jpg`. Bookmark icons are in `public/icons/`.

Until the poster files are added, cards show a colored title fallback.
