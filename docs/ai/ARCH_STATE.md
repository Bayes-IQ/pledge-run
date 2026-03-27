# PledgeRun Architecture State

**Last updated:** 2026-03-27
**Status:** Greenfield — no code yet

## Overview

PledgeRun is a fitness accountability app. Users set running goals, pledge money, and if they miss goals the money goes to a charity of their choice.

## Stack Decisions

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Frontend | Next.js 14 (App Router) | SSR for landing page SEO, React for app interactivity |
| Styling | Tailwind CSS + Framer Motion | Rapid UI dev, animation library for delight moments |
| Backend | Python FastAPI | Fast async API, Pydantic validation, team familiarity |
| ORM | SQLAlchemy 2.0 | Mature, typed, Alembic migrations |
| Database | PostgreSQL | Relational data (users, goals, pledges), ACID for payments |
| Payments | Stripe | Industry standard, Connect for charity payouts |
| Health Data | Apple HealthKit | Primary fitness data source for iOS users |
| Auth | JWT (access + refresh) | Stateless, works across web + mobile |
| Deploy | Vercel + Railway | Zero-config deploys, free tier for prototype |

## Key Domain Models

- **User** — account, auth, Stripe customer ID
- **Goal** — distance target, frequency, period, status
- **Pledge** — amount, linked goal, linked charity, payment status
- **Charity** — name, EIN, Stripe Connect account
- **Activity** — individual run (from HealthKit or manual entry)
- **Evaluation** — audit record of goal check result

## Invariants

1. **Pledge requires payment method** — cannot create pledge without linked Stripe payment method
2. **One active pledge per goal** — a goal has at most one pending pledge
3. **Evaluation is idempotent** — re-evaluating a resolved goal is a no-op
4. **Activities are immutable** — once synced, activity records cannot be modified (audit trail)
5. **Charity donations are non-reversible** — once charged and transferred, no refunds
