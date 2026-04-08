# Family and Friends Invite (`join.aurabase.app`)

Static site for **AuraBase family invites**: landing HTML, Netlify-style `_headers` / `_redirects` for **Cloudflare Pages**, and **Universal Links (iOS)** / **App Links (Android)** verification files under `.well-known/`. **Same HTTPS links and same static pack for Android and iOS**—two verification files, one subdomain.

## Relationship to other repos

| Repo / folder | Role |
|----------------|------|
| **This folder** (`AuraBase Product Page / Family and Friends Invite`) | Source of truth for what gets deployed to `join.aurabase.app`. |
| **AuraBase mobile app** | Parses invite URLs, Associated Domains / App Links — does **not** ship these static files. |

## Deploy

1. Fill placeholders in `.well-known/apple-app-site-association` and `.well-known/assetlinks.json` (see `DEPLOY.txt`).
2. Point a **Cloudflare Pages** project at this directory as the **publish root** (or put these files at the root of a small repo connected to Pages).
3. Attach custom domain **`join.aurabase.app`** and verify HTTPS + `curl` checks in `docs/INVITE_SUBDOMAIN_EXECUTION.md` (mobile repo).

## Full runbook

See the mobile app repository: `docs/INVITE_SUBDOMAIN_EXECUTION.md` (execution order, app env vars, device testing).
