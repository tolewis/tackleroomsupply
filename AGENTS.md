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

## Testing

- **Test-Bench is the testing solution** for this fleet: `git@github.com:tolewis/Test-Bench.git`. It proves what a running system does, across repos, with evidence under `.test-bench/runs/`.
- **This repo owns its own tests.** Unit, route, and component tests live here and run in this repo's CI on every push. Follow the TDD loop in `bibles/60-engineering-principles.md`. Do not wrap this repo's test command in a Test-Bench manifest.
- **Read `docs/WHAT-BELONGS-HERE.md` in Test-Bench** before you write a manifest or a gate script. It has the four-question decision test.
- **One manifest per repo:** `test-bench.yaml` at the root, from `templates/repo/` in Test-Bench. No one-off manifests.
- **If you had to build a test tool that Test-Bench did not have, file an issue** in Test-Bench with the `test-tooling-gap` template before you close the task. A test the repo should own is not a gap. Write it here.

## Product / organism rule

If this repo is a living product (not a skill dump, agent workspace, or archive):

- Planning **bibles** live in `bibles/` in **this** repo and are written **before** UI.
- A surface ships only with a design note that cites those chapters as its contract.
- Parent standard (vault): `System/30 Infrastructure/TeamLewis Organism Standard - RATIFIED v1.0.md`.

## This-repo notes

Add discovered gotchas here. Do not invent product facts that are not in README, docs, or bibles.
