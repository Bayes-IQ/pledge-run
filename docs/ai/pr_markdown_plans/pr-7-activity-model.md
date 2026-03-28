# PR 7 — Activity Model + Ingestion API

| Field | Value |
|-------|-------|
| PR | 7 |
| Phase | 3 — Integrations |
| Type | feature |
| Depends on | PR 4 |
| Issue | — |

## Summary
Activity SQLAlchemy model, POST /api/activities endpoint, deduplication by healthkit_id, validation for both HealthKit and manual sources.

## Acceptance Criteria
- [ ] Activity model: user_id, source, distance_meters, duration_seconds, started_at, healthkit_id
- [ ] POST /api/activities creates Activity for authenticated user
- [ ] Duplicate healthkit_id submissions are idempotent
- [ ] Tests cover create, dedupe, invalid payloads, auth required
