# PledgeRun

**Set running goals. Put money on the line. Miss your goal? The money goes to charity.**

PledgeRun is a fitness accountability app that uses real financial stakes to help you stick to your running goals. Connect Apple Health for automatic tracking, link a payment method via Stripe, and choose a charity. If you hit your weekly goal — you keep your money and earn streaks. If you miss it — your pledge goes to a cause you believe in. Either way, you win.

## How It Works

1. **Set a Goal** — "Run 15 miles this week"
2. **Make a Pledge** — "$25 says I'll do it"
3. **Pick a Charity** — Choose where your money goes if you miss
4. **Run** — Apple Health tracks your workouts automatically
5. **Results** — Goal met? Celebrate. Goal missed? Your charity gets a donation.

## Tech Stack

- **Frontend:** Next.js 14 + Tailwind CSS + Framer Motion
- **Backend:** Python FastAPI + SQLAlchemy + Alembic
- **Payments:** Stripe (SetupIntent + PaymentIntent + Connect)
- **Health Data:** Apple HealthKit (via native Swift bridge)
- **Database:** PostgreSQL
- **Deploy:** Vercel (frontend) + Railway (backend)

## Development

```bash
# Backend
cd backend && pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend && npm install
npm run dev
```

## Architecture

```
pledge-run/
├── backend/           # FastAPI application
│   ├── app/
│   │   ├── api/       # Route handlers
│   │   ├── models/    # SQLAlchemy models
│   │   ├── services/  # Business logic
│   │   └── integrations/  # Stripe, HealthKit
│   ├── alembic/       # Database migrations
│   └── tests/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # App router pages
│   │   ├── components/# React components
│   │   └── lib/       # API client, utils
│   └── public/
├── docs/              # Documentation
│   └── ai/
│       └── pr_markdown_plans/
├── config/            # Pipeline config
└── programs/          # Program tracking
```

## License

Proprietary — Bayes-IQ, LLC
