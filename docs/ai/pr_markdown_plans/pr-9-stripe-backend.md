# PR 9 — Stripe Backend — SetupIntent + Webhooks

| Field | Value |
|-------|-------|
| PR | 9 |
| Phase | 3 — Integrations |
| Type | feature |
| Depends on | PR 2 |
| Issue | — |

## Summary
Stripe customer ID on User, SetupIntent creation endpoint, webhook handler (payment_intent.succeeded/failed) with signature verification, test-mode config.

## Acceptance Criteria
- [ ] User gets Stripe customer ID on first payment setup
- [ ] SetupIntent endpoint returns client_secret
- [ ] Webhook verifies signature and processes events idempotently
- [ ] Tests: SetupIntent creation, webhook sig failure, idempotency
- [ ] Stripe keys loaded from env vars, never logged
