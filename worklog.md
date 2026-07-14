# Selorm A Ventures — Project Worklog

This worklog tracks every commit and push to the GitHub repository for the Selorm A Ventures corporate website.

**Repository:** https://github.com/lilromeo2290/SelormA.git
**Branch:** `main`
**Local Path:** `/home/z/my-project`

---

## Git Configuration

- **Remote URL:** `https://<TOKEN>@github.com/lilromeo2290/SelormA.git`
- **Author:** Selorm A Ventures <selormagble@gmail.com>
- **Credential Helper:** `store` (token is cached for future pushes)
- **Default Branch:** `main` (tracks `origin/main`)

---

## Commit & Push Protocol (MUST FOLLOW)

Whenever changes are made to the project, follow these steps in order:

### 1. Check status
```bash
cd /home/z/my-project
git status
```

### 2. Stage changes
Stage specific files (recommended) or all changes:
```bash
# Stage all changes
git add -A

# OR stage specific files
git add src/components/navbar.tsx src/app/page.tsx
```

### 3. Commit with a descriptive message
Use the conventional commits format with a clear summary:
```bash
git commit -m "<type>: <short description>

<optional longer description of what changed>"
```

**Commit types:**
- `feat` — new feature (e.g., `feat: add project gallery filter`)
- `fix` — bug fix (e.g., `fix: mobile menu close on tap outside`)
- `style` — styling/visual only (e.g., `style: refine hero spacing on mobile`)
- `refactor` — code restructuring without behavior change
- `chore` — tooling, deps, configs (e.g., `chore: update dependencies`)
- `docs` — README, worklog, comments
- `perf` — performance improvement

### 4. Push to GitHub
```bash
git push origin main
```

If the branch is already tracking `origin/main` (it is, after the initial setup), simply:
```bash
git push
```

### 5. Verify push succeeded
```bash
git log origin/main --oneline -3
git status   # Should show "Your branch is up to date with 'origin/main'"
```

### 6. Append entry to this worklog
Add a new section below using the template:
```markdown
---
Date: <YYYY-MM-DD HH:MM UTC>
Commit: <commit-sha>
Type: <feat|fix|style|refactor|chore|docs|perf>
Summary: <one-line description>

Changes:
- <bullet list of files / sections touched>

Pushed By: <agent name or "user">
```

---

## Token Refresh

The provided GitHub Personal Access Token (`ghp_***`) has been embedded in the remote URL via the credential helper. If pushes start failing with `403 Forbidden` or `Authentication failed`:

1. Generate a new token at https://github.com/settings/tokens (scopes: `repo`)
2. Update the remote URL:
   ```bash
   cd /home/z/my-project
   git remote set-url origin "https://<NEW_TOKEN>@github.com/lilromeo2290/SelormA.git"
   ```
3. Test push:
   ```bash
   git push
   ```

---

## Commit History

### Initial Push
- **Date:** 2026-07-14 01:23 UTC
- **Commit:** `4c5a99f`
- **Type:** feat
- **Summary:** Initial commit — Selorm A Ventures corporate website

**Changes:**
- Set up Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui
- Brand system: Navy (#0A2345), Gold (#D89B00), White, Light Gray
- Fonts: Poppins (body), Montserrat (display), Open Sans
- Built sections: Navbar (sticky), Hero (full-width), About, Services (6 cards), Why Choose Us (with stats), Projects (filterable gallery with modal), Testimonials, CTA banner, Contact (form + map), Footer (4-column), Floating buttons (WhatsApp, Call, Back-to-top)
- Working contact form API at `/api/contact` with validation
- SEO metadata (OpenGraph, Twitter cards, canonical URL)
- Mobile-first responsive design verified via Agent Browser on desktop (1440×900) and mobile (390×844)

**Pushed By:** Super Z (main agent)

---

<!-- Append new commit entries below this line -->
