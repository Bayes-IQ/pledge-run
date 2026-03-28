# PR 13 — Charge Execution + Donation Flow

| Field | Value |
|-------|-------|
| PR | 13 |
| Phase | 4 — Evaluation Engine |
| Type | feature |
| Depends on | PR 12 |
| Issue | — |

## Summary
Stripe PaymentIntent on failure, Transfer to charity Connect account, donation receipt, email notifications (success + failure), retry logic.

## Acceptance Criteria
- [ ] Failed pledge → PaymentIntent with correct amount/metadata
- [ ] Transfer routes to charity's Connect account
- [ ] Donation receipt generated and queryable
- [ ] Emails sent for both outcomes
- [ ] Retry with idempotency keys — no double charges
