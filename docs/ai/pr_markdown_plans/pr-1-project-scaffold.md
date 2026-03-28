# PR 1 — Project Scaffold + Dev Environment

| Field | Value |
|-------|-------|
| PR | 1 |
| Phase | 1 — Foundation |
| Type | scaffold |
| Depends on | (none) |
| Issue | — |

## Roadmap Position
Phase 1, first PR. Establishes the entire tech stack foundation.

## Summary
Create Next.js 14 (App Router) frontend with Tailwind + TypeScript, a FastAPI backend with health endpoint, local Postgres via Docker Compose, core dependency manifests, and CI for lint/test.

## Scope

### Files Added
- `frontend/` — Next.js 14 app scaffold (App Router, TypeScript, Tailwind)
- `backend/` — FastAPI app scaffold with `/health` endpoint
- `docker-compose.yml` — Local Postgres
- `frontend/package.json`, `backend/pyproject.toml` — Dependencies
- `.github/workflows/ci.yml` — Lint + test CI

### Non-Goals
- Authentication flows
- Database models and migrations
- Design system component library beyond Tailwind wiring

## Plan

- [P1] Initialize Next.js 14 app with App Router + TypeScript + Tailwind CSS in `frontend/`
- [P2] Initialize FastAPI project in `backend/` with `app/main.py`, `/health` endpoint
- [P3] Create `docker-compose.yml` with Postgres service + env vars
- [P4] Configure `pyproject.toml` with FastAPI, SQLAlchemy, Alembic, uvicorn deps
- [P5] Configure `package.json` with React, Next.js, Tailwind, Framer Motion deps
- [P6] Create `.github/workflows/ci.yml` — frontend lint/test + backend lint/test
- [P7] Verify: frontend dev server starts, backend `/health` returns 200, Postgres connects

## Acceptance Criteria

- [ ] Frontend dev server starts locally and renders a placeholder page
- [ ] Backend starts locally and `/health` returns 200
- [ ] Postgres starts via Docker Compose and backend can connect
- [ ] CI runs on PR and passes (lint + test for both)

## Test Plan

- Backend: `GET /health` returns `{"status": "ok"}`
- Frontend: default page renders without errors
- Docker: `docker compose up -d` starts Postgres, backend connects
