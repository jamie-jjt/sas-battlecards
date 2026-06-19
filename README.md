# SAS Battle Cards

> Philippine SE Competitive Intelligence Tool — 54 pages of battle cards, scoping questions, regulatory mapping, and meeting prep tools.

**Live:** https://jamie-jjt.github.io/sas-battlecards/

## What's Inside

| Section | Count | Purpose |
|---------|-------|---------|
| Battle Cards | 18 | Competitor positioning with feature grids, objection handling, landmine questions |
| Regulations | 6 | PH regulatory mapping (BSP, AFASA, AMLA, NPC, IC) with SAS capability alignment |
| Solutions | 6 | SAS product quick-reference with PH use cases |
| Scoping Questions | 7 industries | Industry-specific discovery questions with maturity filters |
| Better Together | 3 | Partner architecture stories (Databricks, AWS, Microsoft) |
| Objections | 12 | AREC-framework responses across 4 themes |
| Sizing Guide | 4 profiles | Infrastructure sizing from POC to enterprise |
| Compare Mode | — | Side-by-side multi-competitor comparison generator |
| Prep Wizard | 5 steps | Generates tailored meeting prep in 60 seconds |
| Win/Loss Tracker | — | localStorage deal logging with CSV export |
| Meeting Notes | — | Structured template with markdown export |
| Intel Feed | — | Competitive news with "So What?" annotations |

## Battle Card Coverage

| Category | Competitors |
|----------|-------------|
| ML/AI Platforms | Databricks, Dataiku, Palantir |
| Cloud Data | Microsoft Fabric, AWS SageMaker, Google Vertex AI, Snowflake, Cloudera |
| Fraud & FinCrime | FICO, NICE Actimize, Feedzai, SymphonyAI, Tookitaki |
| BI & Visualization | Power BI, Tableau, SAP Analytics Cloud |
| Data Prep | Informatica |
| Open Source | Python/R |

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:4321/sas-battlecards/
```

## Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5 (static output, zero JS by default) |
| Styling | Tailwind CSS 4 (CSS-first tokens, dark/light theme) |
| Content | Astro Content Collections (JSON + Zod validation) |
| Search | Client-side index (Cmd+K modal, 46 indexed items) |
| Deploy | GitHub Pages via Actions (auto on push) |
| Types | TypeScript strict mode with path aliases |

## Adding Content

### New Battle Card
1. Create `src/content/battlecards/competitor-name.json`
2. Follow schema in `src/content/config.ts`
3. Push to master → auto-deploys in ~2 minutes

### New Scoping Questions
1. Create `src/content/scoping/industry-name.json`
2. Push to master

### New Regulation
1. Create `src/content/regulations/regulation-slug.json`
2. Push to master

No code changes needed — Content Collections auto-generate pages from JSON.

## Key Features

- **Cmd+K Search** — Instant search across all 54 pages
- **Dark/Light Theme** — System preference + manual toggle
- **Mobile Bottom Nav** — 5-tab bar + More popup for field use
- **Print Optimized** — Clean A4 output with auto-expanded sections
- **Wizard URL State** — Refresh-safe, shareable prep sheets
- **Copy-to-Clipboard** — One-click copy on positioning statements, questions, objection responses
- **BSP 1213 Countdown** — Regulatory deadline timer on homepage
- **Accessibility** — Skip link, ARIA live regions, focus trap, keyboard nav

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production (54 pages → dist/) |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run Astro type checking |

## Philippine Market Context

All content is localized for PH:
- Regulations: BSP Circular 1213, AFASA (RA 12010), BSP 1112, AMLA, NPC DPA, IC RBC2
- Competitor PH presence mapped (offices, partners, known customers)
- Scoping questions calibrated for PH enterprise maturity levels
- Pricing context in PHP where applicable

## License

Internal tool — VST ECS Philippines / SAS Partner.
