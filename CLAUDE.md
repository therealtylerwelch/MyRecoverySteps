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

- Full-bleed dark dashboard (July 2026 redesign): there is NO outer shell — the deep navy gradient IS the page canvas, and glass panels (`.glass-panel`, `.glass-blue`, `.glass-gold`, `.glass-dim`) sit directly on it. `.glass-shell` was removed; don't reintroduce a floating-card wrapper.
- Layout: `#root` caps at 1440px; two responsive row-grids go 2-column at ≥1024px — `.split-a` (3fr/2fr: flagship Momentum+Insights module | Today rings) and `.split-b` (2fr/3fr: Activity Calendar | Activity Trends). Badges is full width. Single column below 1024px.
- Collapsible sections use a `.section-toggle` header with a rotating `.chevron-icon` (Badges, Full Analysis, and the Activity Calendar/Activity Trends panels — the latter two default open).
- The Badges module has ONE collapsible header ("Badges" + count pill + chevron, default open, same pattern as Calendar/Trends) containing the "latest earned" spotlight, filter tabs (All/Earned/Unearned), and the grid. Unlocked badges carry an `earned: 'Mon D'` date (hand/routine-maintained — set it when flipping `unlocked`); the spotlight picks the latest by parsed earned date (NOT array order) and badge cards show "✓ {earned}".
- Typography hierarchy is data-first: all module titles and collapsible headers are compact 11px uppercase `BLUE_DIM` overlines with 13px icons; the momentum score band and TL;DR headline share the `.tldr-headline` scale (clamp 19–25px gold).
- All icons are hand-drawn inline SVG components in the `Icon` switch statement — no icon library/font dependency.
- Flagship module (July 2026 merge): Recovery Momentum and Insights are ONE `glass-panel` — momentum data first (segmented score ring + swatch rows + "How is this scored?" methodology with live per-component points and a computed "biggest lever" line), then the computed TL;DR card, then the collapsible Full Analysis. The old standalone Insights panel is gone.
- The momentum score ring is SEGMENTED by component: consistency = `GOLD_LIGHT`, load = `BLUE_MID`, pace = `BLUE_LIGHT` — one arc per component sized by points earned, sequential from 12 o'clock (`ScoreRing` takes `{score, segments}`). Same three colors map to the Today goal rings (distance/time/walks), so the palette is a single system. Apple-style "Today" rings (1 mi / 30 min / 2 walks) live in the right column (`GoalRings`). All rings are hand-rolled SVG.
- Streaks are forgiving: one rest day per rolling 7 can be bridged without resetting (`currentStreak` loop). The Current Streak mini-stat notes "· N rest bridged" when used.
- The site is consistency-first: no distance-goal UI (the 25-mile countdown card and goal progress bar were removed July 2026; mile clubs live on only as badges). There is no standalone stats row — Current Streak and Total Distance live as `MiniStat` chips in Activity Trends, after Best Pace.
- Page order: Header → `.split-a` (Momentum+Insights flagship | Today rings) → `.split-b` (Activity Calendar | Activity Trends) → Badges. Momentum leads and Insights lives inside it — don't split them apart or push insights back down.
- Calendar cells are mini goal rings: a gold SVG ring around the day number closes as the 1-mi daily floor is met; distance details live in the tap-for-details card. A month summary strip (active days · miles) sits above the grid.
- Activity Trends uses one card rhythm — Week over Week, Weekly Load, and Daily Activity all share the same inset container style. Weekly Load has a dashed safe-ramp cap per week (≤1.3× the prior week, only once the baseline week ≥ 2 mi).
- Out-of-range/warning treatment: NO new hue — gold diagonal stripes (`.bar.is-hot`, a `repeating-linear-gradient`) plus the hand-drawn `alert` triangle icon carry the warning (user explicitly chose this over orange/red).
- The Insights summary card (no "TL;DR" chip — removed July 2026) is fully computed by a rule engine (`tldr` in `WalkTracker`) — priority: over-ramp warning → consistency nudge → pace celebration → steady default. Never hand-write its copy.

## Data

`WalkTracker`'s `data` object holds the raw walk log (manually updated from Strava) — there is no live Strava API integration wired into the page yet, despite the "Powered by Strava MCP" tagline. Updating the site means hand-editing only `data.dailyData` (one entry per active day), `data.badges` (unlocked flags), and `data.updated` in `index.html`.

**All other stats are derived at render time — do not hand-maintain them.** Total distance, total walks, current streak, week-over-week deltas, and the entire TL;DR card are computed from `dailyData`. "Today" comes from `new Date()`, not the data. The 7-day average line and weekly averages count calendar days (rest days = 0), not just active days. The hand-written Insights "Full Analysis" prose is the only place numbers still live in copy — refresh it when updating data.
