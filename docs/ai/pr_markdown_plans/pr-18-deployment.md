# PR 18 — Deployment

| Field | Value |
|-------|-------|
| PR | 18 |
| Phase | 6 — Launch Prep |
| Type | infrastructure |
| Depends on | PR 17 |
| Issue | — |

## Summary
Vercel frontend config, Railway/Fly.io backend config, env var management, production Postgres, domain + CORS + SSL.

## Acceptance Criteria
- [ ] Frontend deploys to Vercel from committed config
- [ ] Backend deploys to Railway/Fly.io from committed config
- [ ] Postgres connection via env vars; migration procedure documented
- [ ] CORS configured for production + dev origins
- [ ] Public URL reachable and returns expected routes
- [ ] Deployment runbook: env vars, deploy steps, rollback, smoke checks
