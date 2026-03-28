# PR 12 — Goal Evaluation Service

| Field | Value |
|-------|-------|
| PR | 12 |
| Phase | 4 — Evaluation Engine |
| Type | feature |
| Depends on | PR 7, PR 10 |
| Issue | — |

## Summary
Evaluation logic: sum activities vs. target. Scheduled evaluation at period end. Goal status transitions. Pledge resolution. Audit log. Edge cases: partial periods, timezones, grace periods.

## Acceptance Criteria
- [ ] Evaluation sums activities and compares to target
- [ ] Scheduled mechanism runs at goal period end
- [ ] Goal: active → succeeded | failed (idempotent)
- [ ] Pledge resolution triggered by evaluation result
- [ ] Audit log records all evaluation details
- [ ] Tests cover timezone boundaries, partial periods, grace period
