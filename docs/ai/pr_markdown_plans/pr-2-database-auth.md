# PR 2 — Database Schema + Auth

| Field | Value |
|-------|-------|
| PR | 2 |
| Phase | 1 — Foundation |
| Type | feature |
| Depends on | PR 1 |
| Issue | — |

## Roadmap Position
Phase 1, second PR. Auth layer on top of scaffold.

## Summary
Add SQLAlchemy User model, Alembic migrations, JWT auth (register/login/refresh) in FastAPI, Next.js auth context + pages, and protected-route middleware.

## Scope

### Files Added/Modified
- `backend/app/models/user.py` — User model (email, password hash)
- `backend/alembic/` — Migration setup + initial migration
- `backend/app/api/auth.py` — register, login, refresh endpoints
- `backend/app/core/security.py` — JWT + password hashing utils
- `frontend/src/lib/auth.tsx` — Auth context/provider
- `frontend/src/app/(auth)/login/page.tsx` — Login page
- `frontend/src/app/(auth)/register/page.tsx` — Register page
- `frontend/src/middleware.ts` — Protected route guard

### Non-Goals
- Role-based access control
- Password reset / email verification
- Session management (device tracking, token revocation)

## Plan

- [P1] Create SQLAlchemy User model with email + bcrypt password hash
- [P2] Configure Alembic and create initial migration
- [P3] Implement password hashing + JWT token utilities
- [P4] Create FastAPI auth endpoints: POST /auth/register, /auth/login, /auth/refresh
- [P5] Create Next.js auth context with token storage + refresh logic
- [P6] Build login and register pages with form validation
- [P7] Add Next.js middleware to redirect unauthenticated users

## Acceptance Criteria

- [ ] User can register and login against local backend+db
- [ ] JWT refresh endpoint issues new access token from valid refresh token
- [ ] Protected pages redirect to login when logged out
- [ ] Migration runs cleanly on empty database

## Test Plan

- Unit: register creates user, login returns tokens, refresh works
- Unit: duplicate email registration returns 409
- Unit: invalid credentials return 401
- Integration: full register → login → access protected route flow
