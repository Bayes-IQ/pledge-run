# PR 4 — Goal Model + CRUD API

| Field | Value |
|-------|-------|
| PR | 4 |
| Phase | 2 — Core Domain |
| Type | feature |
| Depends on | PR 2 |
| Issue | — |

## Summary
Add Goal SQLAlchemy model, Alembic migration, FastAPI CRUD endpoints, validation logic, and unit tests for goal lifecycle.

## Scope
- `backend/app/models/goal.py` — Goal model (user_id, goal_type, target_distance_meters, target_frequency, period, start_date, end_date, status)
- `backend/alembic/versions/` — Goal migration
- `backend/app/api/goals.py` — CRUD: create, list, get, update, archive
- `backend/app/services/goal_validation.py` — Target range + date constraints
- `backend/tests/test_goals.py` — Full lifecycle tests

## Acceptance Criteria
- [ ] Goal table created via migration
- [ ] CRUD endpoints work: create, list, get, update, archive
- [ ] Validation: reasonable targets, date constraints, clear error responses
- [ ] Tests pass for all CRUD operations + invalid payloads
