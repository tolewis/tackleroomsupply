# AGENTS.md — tackleroomsupply

Working agreement for every agent and human in this repo.

## First actions

1. Clone/pull over **SSH** only: `git@github.com:tolewis/tackleroomsupply.git`. No tokens in remotes.
2. Read this file, then `README.md`, then anything in `docs/`, `bibles/`, or `canon/` before you change code.
3. Fleet doctrine lives in **another repo**. Do not copy it here. Read on demand:
   - `git@github.com:tolewis/OperatingSystem.git`
   - Canon (short truths): `canon/canon-digest.md`
   - GitHub rules: `bibles/20-github.md`
   - Engineering / TDD: `bibles/60-engineering-principles.md`

## What this repo is

outdoor content site

Default branch: `main`.

## Working agreement

- **Ship, don't hoard.** Small verified commits straight to the default branch. Branches (`feat/*` / `fix/*`) are for big changes only; merge them promptly. No `agent/<name>/*` branches for project code.
- **Review is agent-to-agent.** Tim does not review agent code. Do not hold a ship on him.
- **Never commit secrets.** `.pem`, `.env`, keys, tokens stay out of git.
- Verification is part of the work. Keep CI green where it exists.
- Documentation is part of the work. Update docs when behavior changes.
- One active owner per branch/lane. Do not touch another agent's PR, branch, or issue unilaterally.

## Product / organism rule

If this repo is a living product (not a skill dump, agent workspace, or archive):

- Planning **bibles** live in `bibles/` in **this** repo and are written **before** UI.
- A surface ships only with a design note that cites those chapters as its contract.
- Parent standard (vault): `System/30 Infrastructure/TeamLewis Organism Standard - RATIFIED v1.0.md`.

## This-repo notes

Add discovered gotchas here. Do not invent product facts that are not in README, docs, or bibles.
