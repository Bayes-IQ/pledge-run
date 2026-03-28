# PR 3 — Design System + Layout Shell

| Field | Value |
|-------|-------|
| PR | 3 |
| Phase | 1 — Foundation |
| Type | feature |
| Depends on | PR 1, PR 2 |
| Issue | — |

## Roadmap Position
Phase 1, final PR. Visual identity and app shell.

## Summary
Establish Tailwind brand styling (energetic greens, bold oranges), shared UI component library, full app shell (nav/sidebar/footer), dark mode, and loading/error states.

## Scope

### Files Added/Modified
- `frontend/tailwind.config.ts` — Brand colors, typography, dark mode
- `frontend/src/components/ui/` — Button, Card, Input, Badge, Modal
- `frontend/src/components/layout/` — Navbar, Sidebar, Footer, MobileDrawer
- `frontend/src/app/layout.tsx` — Root layout with shell
- `frontend/src/components/ui/Skeleton.tsx` — Loading skeletons
- `frontend/src/components/ui/ErrorState.tsx` — Error states

### Non-Goals
- Pixel-perfect marketing design
- Complex animation system (that's Phase 5)
- Feature pages beyond placeholders

## Plan

- [P1] Configure Tailwind: brand palette (emerald-500 primary, amber-500 accent), Inter font, dark mode class strategy
- [P2] Build shared components: Button (variants: primary/secondary/ghost), Card, Input, Badge, Modal
- [P3] Build layout shell: Navbar with logo + user menu, Sidebar with nav links, Footer
- [P4] Add mobile drawer (hamburger → slide-in sidebar)
- [P5] Implement dark mode toggle with localStorage persistence
- [P6] Add loading skeletons and error state components
- [P7] Wire auth pages and dashboard placeholder into layout shell

## Acceptance Criteria

- [ ] All pages render within the layout shell (nav, sidebar, footer)
- [ ] Components are reused across pages (no duplicated UI)
- [ ] Dark mode works across shell and all components
- [ ] Loading and error states are visible and styled consistently
- [ ] Mobile responsive: drawer replaces sidebar on small screens

## Test Plan

- Component: each UI component renders without errors
- Visual: dark mode toggle switches all themed elements
- Responsive: mobile drawer opens/closes correctly
