# Novel Writing · Six-Role Collaboration

> [简体中文](./README.md) | English

A **novel-writing preset** for [DeepSeek Harness (DSH)](https://github.com/deepseek-ai). Pick it when you start a new session, and you get a six-role writer's studio that carries a novel from idea all the way to a finished draft.

## What is it

It's not just a chatbot — it's a **6-person novel studio**, where **one AI plays six roles** in a single conversation: holding meetings, dividing the work, drafting chapters, and checking each other's work.

| Role | Responsibility |
| --- | --- |
| ① Captain (Coordinator) | Doesn't write. Keeps pacing, settles conflicts, signs off the final draft |
| ② World Architect | Owns world rules and terminology (physics, geography, currency, races, power ceiling) |
| ③ Plot Planner | Owns the main storyline, subplots, and a "foreshadowing ledger" |
| ④ Prose Writer | The only one who writes the body text — shots, senses, restraint |
| ⑤ Character Manager | Maintains each character's profile and "voice" (dialect card) |
| ⑥ QA Reviewer | Final gatekeeper: checks character consistency, power scaling, logic, pacing; passes or rejects with red / yellow / green lights |

When it switches roles, it marks the speaker with a header like `【Agent 1 · Captain】`.

## Installation

This is a **DSH preset plugin**: once installed, it automatically registers the "小说创作 · 六角色协同" preset with DSH, so you can simply pick it when starting a new session. (The preset id is `novel-writer` — lowercase letters, digits, and hyphens; the display name is "小说创作 · 六角色协同".)

### Option 1: Install as a plugin (recommended)

Run this single command in your DSH terminal (works on Windows / macOS / Linux):

```
dsh plugin --profile web add github:sailoumili/novel-writer
```

After installing, **restart or refresh DSH web**, then pick "小说创作 · 六角色协同" when starting a new session.

### Option 2: Manual install (fallback)

Prefer not to use the command line? You can also install manually:

#### One-line script

Windows (PowerShell) — copy and paste this single line:

```powershell
irm https://raw.githubusercontent.com/sailoumili/novel-writer/main/install.ps1 | iex
```

macOS / Linux (terminal):

```bash
curl -fsSL https://raw.githubusercontent.com/sailoumili/novel-writer/main/install.sh | bash
```

After installing, **refresh or restart the DSH page**, then pick "小说创作 · 六角色协同" when starting a new session.

#### Manual download

1. Click the green `Code` button → `Download ZIP`, then unzip.
2. Rename the extracted folder to `novel-writer` (GitHub's zip folder usually has a `-main` suffix — remove it).
3. Move the `novel-writer` folder into your DSH presets directory:
   - Windows: `C:\Users\<you>\.dsh\.agent-presets\`
   - (`~/.dsh/.agent-presets/`, where `~` is your home directory)
4. Refresh (or restart) the DSH page.
5. When starting a new session, pick **小说创作 · 六角色协同**.

## How to use

1. After picking the preset, send one message with your genre and core premise, for example:

   > Genre: Eastern fantasy + cosmic horror. Premise: a hunter who can see others' "death countdowns" tries to save a village about to be devoured by an Old One — without being corrupted himself.

2. It follows a three-step flow, **pausing for your approval at every step** (it won't dump chapters on you):
   - First, "World" and "Plot" hold a joint session and draft the *Narrative Constitution* and the *World Whitepaper* outline → wait for your approval;
   - Then it generates the main character profiles → saves them to local files;
   - Finally it asks permission to write Chapter 1 → writes only when you say go.

## It reads and writes files — please note

To keep profiles and ledgers across sessions, this preset gives the AI **file read/write permission**. For each new novel it creates a project folder in your workspace:

```
outputs/date-project-name/
├─ Narrative Constitution.md
├─ World Whitepaper.md
├─ Character Profiles.json
├─ Foreshadowing Ledger.md
├─ Chapter Index.md
├─ Ch1-v1.md
└─ Ch1-v2.md
```

File operations still respect DSH's own sandbox policy; the preset does not bypass the sandbox.

## Chapter versioning

- Each chapter is stored in its own file with a version number: `ChN-vX.md`.
- **Never overwrite on revision**: a rewrite is saved as `Ch1-v2.md`, and the old version is kept as a dead draft.
- **Only the latest version counts**: when continuing, it reads only the highest version number of each chapter.

## Editing it

- The full prompt (its "brain") is in `agent.cordis.yml`.
- Save your edits and start a new session for them to take effect.
- To delete it entirely: remove the folder `~/.dsh/.agent-presets/novel-writer/`.

## License

[MIT](./LICENSE)
