# PR 8 — Apple HealthKit Swift Bridge

| Field | Value |
|-------|-------|
| PR | 8 |
| Phase | 3 — Integrations |
| Type | feature |
| Depends on | PR 7 |
| Issue | — |

## Summary
Minimal Swift HealthKit module: authorization flow, running workout pull, distance/duration extraction, background sync to POST /api/activities.

## Acceptance Criteria
- [ ] HealthKit permission request for running workouts
- [ ] Pull HKWorkout records → transform → POST to /api/activities
- [ ] Background sync with throttling
- [ ] Manual verification steps documented for simulator
