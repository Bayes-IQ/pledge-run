# PR#___ — [Title]

Last Updated: YYYY-MM-DD

PR Type:
- [ ] Tool
- [ ] Platform
- [ ] Policy
- [ ] Storage
- [ ] Dev Infrastructure
- [ ] Docs-only

- **Repo:** bayesiq

Plan Archetype: Platform

---

## Roadmap Position

```
Phase 1 — Platform Stabilization ✅
Phase 2 — Capability Integrations ✅
Phase 3 — Dev Infrastructure ✅
Phase 4 — Multi-Model Pipeline ✅
Phase 5 — Assistant Runtime ← or ✅
Phase 6 — Automation
Phase 7 — Interface Layer
[phase] ← THIS PR ([one-line summary])
```

Cross-references:
- Layer ordering: [ROADMAP.md](../ROADMAP.md)
- Current tool inventory: [ARCH_STATE.md](../ARCH_STATE.md)

---

## Layers Affected

| Layer | What changes |
|-------|-------------|
| `tools/___/` | |
| `biq_platform/___/` | |
| `apps/assistant_cli/` | |
| `storage/` | |
| `scripts/` | |
| `docs/` | |
| `.github/` | |
| `config/` | |

Remove rows that are not affected.

**Invariant touched:** [none | session boundary | gateway choke point | policy ordering | handler purity | credential non-leak]

---

## Goal

One paragraph: what this PR achieves and why it matters now.

---

## Invariants

| Invariant | Preserved? | Notes |
|-----------|------------|-------|
| Session boundary — DB sessions opened only in `apps/` | YES / NO / N/A | |
| Gateway choke point — all tool execution through `ToolGateway` | YES / NO / N/A | |
| Policy ordering — policy evaluated before execution; `sanitized_input` in all logs | YES / NO / N/A | |
| Handler purity — tool handlers import only `biq_platform.errors` | YES / NO / N/A | |
| Credential non-leak — credentials never logged/persisted/returned; ToolError messages hardened | YES / NO / N/A | |

Replace the placeholder with one value. Use N/A for docs-only or scripts-only PRs.

---

## Scope

### Files Added

| File | Purpose |
|------|---------|
| `path/to/file` | description |

### Files Modified

| File | What changes |
|------|-------------|
| `path/to/file` | description |

### Non-goals

- What this PR explicitly does NOT do
- Defer to which future PR if relevant

### Forbidden Changes

The following must NOT be modified in this PR:

- `path/to/protected/` — reason
- `path/to/protected/` — reason

Remove this section only if the PR touches all layers (rare). This defines negative write permissions for the Implementer.

---

## Known Non-Existence / Missing Structure

Document what does NOT exist in the codebase that the plan might otherwise assume. This prevents phantom-design errors.

- Example: `ClientInteraction` does not have `project_id`
- Example: No shared helper currently resolves interaction → project
- Example: Route Z does not yet exist

Remove this section only if the PR does not touch data models, routing, or cross-layer wiring.

---

## Plan

Ordered steps. Each step has a stable ID for cross-referencing in critique/test artifacts.

1. **[P1] Step name**
   - Details
   - Details

2. **[P2] Step name**
   - Details

---

## Acceptance Criteria

### Functional

- [ ] Criterion 1 (testable, not vague)
- [ ] Criterion 2
- [ ] Criterion 3

### Structural

- [ ] No unexpected files modified (plan conformance)
- [ ] Invariants preserved (table above shows no NO entries without justification)
- [ ] All tests pass: `python -m unittest discover -s tests -t . -v`

---

## Test Plan

### Unit tests

| Test file | What it covers |
|-----------|---------------|
| `tests/___/test___.py` | description |

### Integration / manual tests

- [ ] Description of manual verification step

### No automated tests needed?

State why (e.g., docs-only PR).

---

## Risks

- **Risk:** [What could go wrong]
  - **Mitigation:** [How to prevent or recover]

---

## Example: Minimal "New Tool" PR Scope

Below is an example showing what a plan for adding a new read_only tool would look like. This is NOT part of the template — it's a reference.

```
PR Type:
- [x] Tool

## Layers Affected

| Layer | What changes |
|-------|-------------|
| `tools/weather/` | new handler + schemas + manifest |
| `config/` | add weather tool override to policy.yaml |
| `tests/weather/` | handler unit tests |

## Invariants

| Invariant | Preserved? | Notes |
|-----------|------------|-------|
| Session boundary | YES | no DB code |
| Gateway choke point | YES | handler only |
| Policy ordering | YES | no policy changes |
| Handler purity | YES | imports only biq_platform.errors |
| Credential non-leak | YES | API key via context["_credentials"] |

## Scope

### Files Added
- tools/weather/tool.py
- tools/weather/manifest.json
- tools/weather/schemas/weather.get_forecast.input.schema.json
- tools/weather/schemas/weather.get_forecast.output.schema.json
- tests/weather/test_get_forecast.py

### Files Modified
- config/policy.yaml (add weather tool config)
- docs/ai/ARCH_STATE.md (add to tool inventory)

### Non-goals
- No CLI subcommand for weather auth (use `credentials set` directly)
- No caching layer

### Forbidden Changes
- biq_platform/gateway/ — no gateway changes for a new tool
- storage/ — no schema migrations

## Plan

1. [P1] Create tools/weather/ directory + manifest + schemas
2. [P2] Implement get_forecast handler in tool.py
3. [P3] Add weather config to policy.yaml
4. [P4] Write handler unit tests
5. [P5] Update ARCH_STATE.md tool inventory

## Acceptance Criteria

### Functional
- [ ] `assistant tools list --json` includes weather.get_forecast
- [ ] Handler returns forecast data matching output schema
- [ ] Policy denies unknown profiles

### Structural
- [ ] No unexpected files modified
- [ ] Invariants preserved
- [ ] All tests pass: `python -m unittest discover -s tests -t . -v`
```
