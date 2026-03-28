# PR 6 — Goal Creation Wizard UI

| Field | Value |
|-------|-------|
| PR | 6 |
| Phase | 2 — Core Domain |
| Type | feature |
| Depends on | PR 4, PR 5 |
| Issue | — |

## Summary
Multi-step wizard: Set Distance → Set Frequency → Choose Charity → Set Amount → Confirm. Animated transitions, distance presets, charity selector, amount slider, confirmation summary.

## Scope
- `frontend/src/app/goals/new/page.tsx` — Wizard container
- `frontend/src/components/wizard/` — Step components (DistanceStep, FrequencyStep, CharityStep, AmountStep, ConfirmStep)
- `frontend/src/lib/api/goals.ts` — API client for goal + pledge creation
- Framer Motion animated step transitions

## Acceptance Criteria
- [ ] Wizard completes all 5 steps with animated transitions
- [ ] Distance presets: 5K, 10K, half marathon per week
- [ ] Charity cards display with logos; amount slider $5–$100
- [ ] Confirm screen shows full summary; submit creates goal + pledge via API
- [ ] Created goal visible on dashboard after completion
- [ ] Responsive on mobile and desktop
