# SAS Battle Cards v2

Philippine SE Competitive Intelligence Tool — a fast, offline-capable reference for SAS Solution Engineers to prepare for competitive meetings.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321/sas-battlecards/` in your browser.

## What's Inside

- **7 Battle Cards** — Databricks, Microsoft, FICO, NICE Actimize, Power BI, Dataiku, Python/R
- **Scoping Questions** — Industry-specific discovery questions mapped to SAS capabilities
- **Quick Prep Wizard** — Generate a meeting prep sheet in 60 seconds
- **Regulatory Tracking** — BSP Circular 1213 countdown and compliance mapping
- **Cmd+K Search** — Instant search across all content
- **Dark/Light Mode** — System preference detection with manual toggle
- **Print-Optimized** — Clean A4 output for offline use

## Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS 4 |
| Content | Astro Content Collections (JSON) |
| Search | Client-side index (Phase 2: Pagefind) |
| Deploy | GitHub Pages via Actions |

## Adding a New Battle Card

1. Create `src/content/battlecards/your-competitor.json` following the schema in `src/content/config.ts`
2. The page at `/battlecards/your-competitor/` auto-generates from the collection
3. Push to `main` — deploys automatically

## Adding Scoping Questions

1. Create or edit `src/content/scoping/your-industry.json`
2. Follow the schema in `src/content/config.ts`
3. Push to `main`

## Deploy

Push to `main` branch → GitHub Actions builds and deploys to Pages automatically.

Manual deploy:
```bash
npm run build
# dist/ folder is ready for any static hosting
```

## Project Structure

```
src/
├── components/
│   ├── battlecard/    # Battle card page sections
│   ├── cards/         # Card UI components
│   ├── global/        # Header, Footer, MobileNav, ThemeToggle
│   ├── search/        # SearchModal, SearchTrigger
│   └── ui/            # CountdownTimer, badges, etc.
├── content/
│   ├── battlecards/   # JSON data for each competitor
│   └── scoping/       # Industry scoping questions
├── layouts/           # BaseLayout, BattleCardLayout
├── lib/               # Types and utilities
├── pages/             # Route pages
└── styles/            # Global CSS, fonts
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro type checking |

## License

Internal tool — VST ECS Philippines / SAS Partner.
