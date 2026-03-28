# PR 5 — Pledge + Charity Models + Seed Data

| Field | Value |
|-------|-------|
| PR | 5 |
| Phase | 2 — Core Domain |
| Type | feature |
| Depends on | PR 4 |
| Issue | — |

## Summary
Add Pledge and Charity models, seed 10 charities, implement pledge creation linked to goal, and define pledge status machine.

## Scope
- `backend/app/models/pledge.py` — Pledge (goal_id, amount_cents, charity_id, status, stripe_payment_intent_id)
- `backend/app/models/charity.py` — Charity (name, description, logo_url, ein, stripe_account_id)
- `backend/app/services/pledge_machine.py` — Status transitions: pending → succeeded|failed → charged|refunded
- `backend/scripts/seed_charities.py` — 10 popular charities
- `backend/app/api/pledges.py` — Create + list endpoints
- `backend/app/api/charities.py` — List charities endpoint

## Acceptance Criteria
- [ ] Charity seed loads 10 charities deterministically
- [ ] Pledge creation requires valid goal_id and charity_id
- [ ] Status machine enforces valid transitions only
- [ ] Tests cover happy path, invalid FK, and illegal transitions
