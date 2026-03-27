# PledgeRun

Fitness accountability app — set running goals, pledge money, miss goals = donate to charity.

## Quick Start

```bash
# Backend
cd backend && python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Frontend
cd frontend && npm install && npm run dev
```

## Test

```bash
# Backend tests
cd backend && python -m pytest tests/ -v

# Frontend tests
cd frontend && npm test
```

## Key Directories

- `backend/app/` — FastAPI application code
- `backend/app/models/` — SQLAlchemy models
- `backend/app/api/` — API route handlers
- `backend/app/services/` — Business logic (evaluation engine, pledge resolution)
- `backend/app/integrations/` — External service clients (Stripe, HealthKit)
- `frontend/src/app/` — Next.js pages (App Router)
- `frontend/src/components/` — Reusable React components
- `docs/ai/ROADMAP.md` — Development roadmap
- `docs/ai/pr_markdown_plans/` — PR plans (BayesIQ planning pipeline)
