# My Recovery Steps

A single-page walking/recovery tracker for Tyler, built on React + Strava data, deployed as a static site on Vercel at https://myrecoverysteps.com.

## Architecture — keep this simple

**Everything lives in one file: `index.html`.**

- React 18 + ReactDOM are loaded from unpkg.com as `<script>` tags (UMD builds).
- JSX is written directly inside a `<script type="text/babel">` tag, transpiled **in the browser** by Babel Standalone (also from unpkg.com).
- There is **no build step**. No `app.js`/`app.jsx` split, no bundler, no transpile-then-commit workflow.
- `vercel.json` has no `buildCommand` — Vercel just serves the static files (`index.html`, images, `site.webmanifest`, favicons) as-is.
- `api/claude.js` is a separate Vercel serverless function (Anthropic SDK passthrough) — unrelated to the frontend, not part of the page's render path.

**Do not reintroduce a build step.** This was tried once (splitting into `app.jsx` source → Babel CLI compiles to `app.js` → commit both → push) and it broke production: Vercel's deployment didn't reliably serve the compiled `app.js`, the CSP didn't account for it, and the site got stuck silently serving a stale deployment for multiple iterations before the root cause was found. Going back to a single inline-JSX `index.html` fixed it immediately and removed an entire class of "I pushed but nothing changed" failures.

## Deployment workflow

1. Edit `index.html` directly (it's the only source file for the UI).
2. Commit and push to `main` on GitHub (`therealtylerwelch/MyRecoverySteps`).
3. Vercel auto-deploys from `main` — no manual build, no compile step, nothing else to run.
4. If changes don't appear live, check `curl -sI https://myrecoverysteps.com/index.html` for `last-modified`/`etag` and compare against `git show HEAD:index.html | md5` before assuming the deploy failed — it's usually a CDN cache lag, not a real failure, now that there's no build step to silently break.

## CSP note

`vercel.json` sets a Content-Security-Policy header. Since the JSX runs inline (`<script type="text/babel">`), `script-src` must include `'unsafe-inline'` alongside `'unsafe-eval'` (Babel needs eval to transpile) and `unpkg.com` (where React/ReactDOM/Babel are loaded from). If this gets edited and `'unsafe-inline'` is dropped, the entire app silently fails to render.

## UI patterns already in place

- "Liquid glass" visual style: blurred translucent panels (`.glass-shell`, `.glass-panel`, `.glass-blue`, `.glass-gold`, `.glass-dim`) over a gradient background.
- Collapsible sections use a `.section-toggle` header with a rotating `.chevron-icon`.
- The Badges section: a "latest earned" spotlight card is always visible above the collapsible badge grid; the grid itself supports All/Earned/Unearned filter tabs and highlights the most recently earned badge with an outline + "Latest" pill.
- All icons are hand-drawn inline SVG components in the `Icon` switch statement — no icon library/font dependency.

## Data

`WalkTracker`'s `data` object is currently hardcoded test/demo data (manually updated walk logs, badges, streaks) — there is no live Strava API integration wired into the page yet, despite the "Powered by Strava MCP" tagline. Updating stats means hand-editing the `data` object in `index.html`.
