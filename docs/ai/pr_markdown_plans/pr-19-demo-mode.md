# PR 19 — Demo Mode + Seed Data

| Field | Value |
|-------|-------|
| PR | 19 |
| Phase | 6 — Launch Prep |
| Type | feature |
| Depends on | PR 18 |
| Issue | — |

## Summary
Demo mode flag, seed script (3 users, varied histories), simulated HealthKit data, test Stripe charges, time-lapse mode (week in 60s).

## Acceptance Criteria
- [ ] Seed creates 3 users with deterministic data
- [ ] Demo mode enabled via env flag, no code edits
- [ ] HealthKit paths simulated with plausible data
- [ ] Stripe uses test-mode only (no live charges possible)
- [ ] Time-lapse compresses week cycle to 60 seconds
- [ ] Screenshot-ready states checklist documented
