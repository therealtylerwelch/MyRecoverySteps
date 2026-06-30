---
name: project-deployment
description: Deployment platform and infrastructure for myrecoverysteps.com
metadata:
  type: project
---

Deployed on **Vercel**, not Netlify.

**Why:** User confirmed this when I incorrectly created a Netlify `_headers` file.
**How to apply:** Use `vercel.json` for headers, redirects, and function config. Do not suggest Netlify-specific files or features (`_headers`, `_redirects`, Netlify edge functions, etc.).
