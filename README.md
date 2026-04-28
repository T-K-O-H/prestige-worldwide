# Prestige Worldwide

The application repo for Prestige Worldwide. v0 is a static React app deployed to GitHub Pages on every merge to `main`.

**Live URL:** https://t-k-o-h.github.io/prestige-worldwide/

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) for unit tests
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for lint/format
- [pnpm](https://pnpm.io/) as the package manager
- GitHub Actions for CI + GitHub Pages for hosting

## Dev loop

You should be able to go from a clean machine to a running app in well under 30 minutes.

### 1. Prerequisites

- [Node.js](https://nodejs.org/) ≥ 20 (22 LTS recommended; CI uses 22)
- [pnpm](https://pnpm.io/installation) ≥ 10 (`npm install -g pnpm` if you don't have it)
- Git + a GitHub account with access to this repo

### 2. Clone & install

```bash
git clone git@github.com:T-K-O-H/prestige-worldwide.git
cd prestige-worldwide
pnpm install
```

### 3. Run

```bash
pnpm dev          # local dev server at http://localhost:5173
```

### 4. Test / lint / build

```bash
pnpm lint         # ESLint
pnpm format:check # Prettier (use `pnpm format` to fix)
pnpm typecheck    # tsc --noEmit
pnpm test         # Vitest, single run
pnpm test:watch   # Vitest, watch mode
pnpm build        # Production build → dist/
pnpm preview      # Serve the built dist/ locally
```

CI runs lint → format check → typecheck → test → build on every push and PR. PRs that fail any of these are not mergeable.

### 5. Deploy

There is no manual deploy step. **Merging to `main` ships to production.**

- `.github/workflows/deploy.yml` runs on every push to `main`
- It builds the static site and uploads it to GitHub Pages
- The site is served from `https://t-k-o-h.github.io/prestige-worldwide/`

If you ever need to deploy under a different base path (custom domain, different repo name, etc.), set `VITE_BASE` before building:

```bash
VITE_BASE=/ pnpm build   # for a root-served custom domain
```

## Project layout

```
.
├── .github/workflows/   # CI + Pages deploy
├── public/              # Static assets served verbatim
├── src/
│   ├── App.tsx          # Root component
│   ├── App.test.tsx     # Smoke test for App
│   ├── main.tsx         # React entry point
│   ├── index.css        # Tailwind entry + global styles
│   └── test/setup.ts    # Vitest setup (jest-dom matchers, cleanup)
├── eslint.config.js
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

## Adding a feature

1. Branch off `main`.
2. Write the smallest test that proves the change.
3. Run `pnpm lint && pnpm typecheck && pnpm test` locally.
4. Open a PR. CI must be green.
5. Merge → automatic deploy.

## Why this stack (v0)

Boring, fast-to-ship tech. Vite + React + TS gives us instant HMR, near-zero config, and a static build that GitHub Pages serves for free. Tailwind keeps design iteration fast. Vitest is the natural test runner for a Vite project. The whole pipeline runs on GitHub credentials we already have — no extra hosting accounts to provision for v0.

If/when product scope demands SSR, server actions, or per-request logic, we'll migrate hosting (most likely to Vercel) and revisit the stack — likely a one-config swap.
