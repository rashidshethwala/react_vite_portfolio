# Portfolio — Vite + React + TypeScript

A sleek multi-page portfolio with project showcase, project details, search, dark/light mode, and responsive layout — no Tailwind required.

## ✨ Features
- Home, About, Projects (with search), Project Detail, Contact pages
- Data-driven projects (edit `src/data/projects.ts`)
- Pretty UI with CSS variables and glassy gradient hero
- Dark/Light theme with toggle (remembered in localStorage)
- React Router v6
- Icons via lucide-react, subtle motion-ready (framer-motion included)

## 🚀 Get started

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

## 🛠 Customize
- Update the branding in `src/App.tsx` (avatar initial, title).
- Edit the hero copy in `src/pages/Home.tsx`.
- Add or modify projects in `src/data/projects.ts`.
- Tweak colors/radius/shadows in `src/styles/globals.css`.
- Replace `/public/favicon.svg`.

## 🧩 Pages
- `/` — Home (hero, KPIs)
- `/about` — Bio, skills, tools
- `/projects` — Grid with search
- `/project/:id` — Detail with stats and links
- `/contact` — Simple form (demo)

---
Made with ❤️ using Vite + React + TS
