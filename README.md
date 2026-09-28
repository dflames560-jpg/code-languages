# Code Languages

A responsive coding-education platform scaffold built with Next.js App Router, TypeScript, Tailwind CSS, CodeMirror, and Lucide icons.

## Run locally

```powershell
npm install
npm run dev
```
Open http://localhost:3000.

## Included

- Landing page with learning modes, expandable roadmaps, streak preview, certificates, leaderboard, and FAQ.
- Searchable 47-item catalog with category filters and generated language pages, docs, playgrounds, and sitemap entries for every seed.
- Sequential guided lessons with numbered steps, short explanations, code-reading notes, practice prompts, and local progress.
- CodeMirror playgrounds, with JavaScript executed in an isolated, network-restricted iframe sandbox.
- Language-specific starter programs and file extensions across compiled, functional, scripting, shell, and query languages; JavaScript and HTML/CSS have browser execution or preview support.
- Starter references for catalog paths, certifications, onboarding recommendations, demo sign-in, and pricing.
- Local storage for theme preference and lesson XP/streak progress. Authentication and server-backed persistence are not connected.
- English-first locale scaffold. Spanish and French are marked as coming soon.
- Generated Open Graph artwork, `sitemap.xml`, and `robots.txt`.

Python, SQL, React, and the other catalog languages have language-specific editors and starter examples, but their compilers/interpreters are not bundled yet. Paths other than the five original featured tracks are curriculum stubs.

## Checks

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Main routes

- `/languages` and `/languages/[slug]`
- `/playground/[slug]`
- `/docs` and `/docs/[slug]`
- `/certifications`, `/onboard`, `/login`, and `/pricing`

The shared catalog and curriculum seed data live in `src/lib/catalog.ts`.

## Stack

```text
Next.js 16 · React 19 · TypeScript · Tailwind CSS 4
```

The project is set up for npm. Run the development server with:

```powershell
npm run dev
```

