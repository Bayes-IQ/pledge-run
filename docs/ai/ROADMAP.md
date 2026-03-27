# PledgeRun Roadmap

**Target:** Working, beautiful prototype by 2026-04-10 (2 weeks)
**Program:** pledge-run (see bayesiq/programs/pledge-run.yaml)

---

## Phase 1: Foundation (Days 1-2) — 2026-03-27 to 2026-03-28

Scaffold the project, establish the tech stack, and get a deployable skeleton running.

### PR 1.1: Project Scaffold + Dev Environment
- Next.js 14 app with App Router, Tailwind CSS, TypeScript
- FastAPI backend with project structure, health endpoint
- Docker Compose for local Postgres
- pyproject.toml / package.json with all core deps
- CI workflow (lint + test for both frontend and backend)

### PR 1.2: Database Schema + Auth
- SQLAlchemy models: User, with email/password auth
- Alembic migration setup + initial migration
- FastAPI auth endpoints: register, login, refresh (JWT)
- Next.js auth context + login/register pages
- Protected route middleware

### PR 1.3: Design System + Layout Shell
- Tailwind config: brand colors (energetic greens, bold oranges), typography
- Shared component library: Button, Card, Input, Badge, Modal
- App layout: nav bar, sidebar (mobile drawer), footer
- Dark mode support
- Loading skeletons and error states

**Exit criteria:** App runs locally, user can register/login, pages render with branded design system.

---

## Phase 2: Core Domain (Days 3-4) — 2026-03-29 to 2026-03-30

Build the goal and pledge domain — the heart of the product.

### PR 2.1: Goal Model + CRUD API
- SQLAlchemy models: Goal (user_id, goal_type, target_distance, target_frequency, period, start_date, end_date, status)
- Alembic migration
- FastAPI CRUD endpoints: create, list, get, update, archive
- Goal validation logic (reasonable targets, date constraints)
- Unit tests for goal lifecycle

### PR 2.2: Pledge Model + Charity Selection
- SQLAlchemy models: Pledge (goal_id, amount_cents, charity_id, status, charged_at, stripe_payment_intent_id)
- SQLAlchemy models: Charity (name, description, logo_url, ein, stripe_account_id)
- Seed data: 10 popular charities with logos
- Pledge creation API (linked to goal)
- Pledge status machine: pending → succeeded | failed → charged | refunded

### PR 2.3: Goal Creation Wizard UI
- Multi-step wizard: Set Distance → Set Frequency → Choose Charity → Set Amount → Confirm
- Animated step transitions (Framer Motion)
- Distance picker with preset options (5K, 10K, half marathon/week)
- Amount slider ($5-$100) with charity card selector
- Confirmation screen with pledge summary
- Responsive mobile-first design

**Exit criteria:** User can create a goal with pledge, select charity, see it on dashboard. Full CRUD works via API.

---

## Phase 3: Integrations (Days 5-7) — 2026-03-31 to 2026-04-02

Connect to Apple Health and Stripe — the two external dependencies that make the app real.

### PR 3.1: Apple HealthKit Integration
- Swift HealthKit bridge (minimal native module)
- Authorization flow: request running workout read permission
- Workout data sync: pull HKWorkout records (type: running)
- Extract distance, duration, route data
- Sync API: POST /api/activities with HealthKit data
- SQLAlchemy model: Activity (user_id, source, distance_meters, duration_seconds, started_at, healthkit_id)
- Deduplication by healthkit_id
- Background sync scheduling

### PR 3.2: Stripe Payment Setup
- Stripe SDK integration (backend + frontend)
- SetupIntent flow: user adds payment method (card)
- Payment method storage (Stripe customer ID on User model)
- Stripe webhook endpoint (payment_intent.succeeded, payment_intent.failed)
- Stripe Connect: charity payout destination setup
- Test mode with Stripe test keys
- PaymentIntent creation for pledge charges

### PR 3.3: Activity Feed + Manual Logging
- Activity list UI: timeline of runs with distance, duration, pace
- Manual activity entry form (fallback for non-HealthKit users)
- Activity detail view with stats
- Weekly distance accumulator (progress toward goal)
- Progress bar on goal card

**Exit criteria:** User can connect Apple Health OR manually log runs. Payment method linked via Stripe. Activities appear in feed with progress tracking.

---

## Phase 4: Evaluation Engine (Days 8-9) — 2026-04-03 to 2026-04-04

The automated brain that checks goals and resolves pledges.

### PR 4.1: Goal Evaluation Service
- Evaluation logic: sum activities in goal period vs. target
- Cron job / scheduled task: evaluate goals at period end
- Goal status transitions: active → succeeded | failed
- Pledge resolution: success → mark succeeded, failure → trigger charge
- Evaluation audit log (what data was considered, result, timestamp)
- Edge cases: partial periods, timezone handling, grace periods

### PR 4.2: Charge Execution + Donation Flow
- Stripe PaymentIntent creation on pledge failure
- Stripe Transfer to charity's connected account
- Donation receipt generation (amount, charity, date, user)
- Email notification: "Your pledge of $X went to [Charity]"
- Success notification: "You crushed your goal! $X stays in your pocket"
- Retry logic for failed charges

### PR 4.3: Results Dashboard
- Goal result card: success (confetti animation) or donation (heart animation)
- Streak counter and streak history
- Total donated / total saved stats
- Weekly/monthly summary view
- Social share card generation ("I ran X miles this week!")

**Exit criteria:** Goals auto-evaluate at period end. Failed goals trigger real Stripe charges to charity. Success/failure shown beautifully on dashboard.

---

## Phase 5: Polish and Delight (Days 10-11) — 2026-04-05 to 2026-04-06

Make it feel premium. This is what turns a prototype into something that wows.

### PR 5.1: Onboarding Flow
- Welcome screen with value prop animation
- Step-by-step onboarding: Connect Health → Add Payment → First Goal
- Skip/defer options for each step
- Progress indicator
- First-goal celebration moment

### PR 5.2: Dashboard Polish + Animations
- Home dashboard redesign: hero stat (current streak), active goals grid, recent activity
- Micro-interactions: goal progress fills, pledge amount pulses near deadline
- Confetti burst on goal completion
- Heart rain animation on donation
- Smooth page transitions
- Pull-to-refresh on mobile

### PR 5.3: Notification System
- Push notification setup (web push API)
- Notification types: goal deadline approaching, goal evaluated, streak milestone
- In-app notification center
- Email digest: weekly summary
- Notification preferences

**Exit criteria:** App feels polished and delightful. Onboarding guides new users smoothly. Animations create emotional moments at key points.

---

## Phase 6: Launch Prep (Days 12-14) — 2026-04-07 to 2026-04-10

Deploy, seed demo data, record the demo.

### PR 6.1: Deployment
- Vercel config for Next.js frontend
- Railway / Fly.io config for FastAPI backend
- Environment variable management
- Production Postgres setup
- Domain setup (pledgerun.app or similar)
- SSL + CORS configuration

### PR 6.2: Demo Mode + Seed Data
- Demo seed script: 3 sample users with varied goal histories
- Demo mode flag: simulated HealthKit data, test Stripe charges
- Time-lapse demo: show a full week cycle in 60 seconds
- Screenshot-ready states for each key screen

### PR 6.3: Landing Page
- Marketing landing page: hero, how-it-works, testimonials (placeholder), CTA
- App Store badge placeholders
- Email waitlist signup (simple Mailchimp/Resend integration)
- SEO basics: meta tags, OG images
- Analytics: Plausible or PostHog

**Exit criteria:** App is live on a public URL. Demo flow is recordable. Landing page captures interest.

---

## Dependency Graph

```
Phase 1: [1.1] → [1.2] → [1.3]
Phase 2: [2.1] → [2.2] → [2.3]    (depends on Phase 1)
Phase 3: [3.1], [3.2] parallel     (depend on Phase 2)
         [3.3] depends on [3.1]
Phase 4: [4.1] → [4.2] → [4.3]    (depends on Phase 3)
Phase 5: [5.1], [5.2], [5.3] parallel (depend on Phase 4)
Phase 6: [6.1] → [6.2] → [6.3]    (depends on Phase 5)
```

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| HealthKit requires native app (no web-only) | High | High | Build minimal Swift wrapper; fallback to manual logging |
| Stripe Connect charity setup is complex | Medium | Medium | Use test mode throughout; defer real charity onboarding |
| 2-week timeline is aggressive | Medium | High | Phase 5+6 are shippable without Phase 6.3; cut scope there first |
| Apple Health data sync is unreliable | Low | Medium | Manual logging as primary fallback; HealthKit as enhancement |
