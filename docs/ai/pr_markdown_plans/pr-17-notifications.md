# PR 17 — Notification System

| Field | Value |
|-------|-------|
| PR | 17 |
| Phase | 5 — Polish and Delight |
| Type | feature |
| Depends on | PR 15, PR 16 |
| Issue | — |

## Summary
Web Push API, notification types (deadline, evaluation, milestone), in-app center, weekly email digest, notification preferences.

## Acceptance Criteria
- [ ] Web push subscribe/send/unsubscribe works end-to-end
- [ ] Notifications for: deadline approaching, goal evaluated, streak milestone
- [ ] In-app center with read/unread state
- [ ] Weekly digest toggleable in preferences
- [ ] Per-channel opt-in/out (push/in-app/email)
- [ ] Idempotent: no duplicate sends per event window
