---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Keep all four keys.
# Archetype as in the app's first plan; set it when you start. Never changes.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit. Change the value line below, never this comment.
phase: code
# prePushFailures: failed pre-push runs of this increment, written by the hook. Never change it.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks. Never change it.
failedChecks: { accessible: 2, checks-pass: 7 }
---

# Increment: Bereinigung des Bestands nach den Mathe-Regeln (auf `work`, vor PR 1)

<!--
For you, the assistant. One increment of a published app: new competencies, chapters, pages, rounds, questions, or
a correction.
1. Path: `.vibe/plans/<NN>-<short name>.md`, NN = highest + 1. Never change an earlier plan. App with only
   `.vibe/plan.md`: that is plan 01; start this one as 02 (the update in Code moves it).
2. The first version's decisions stand: archetype, content method, content guide
   `.agents/skills/app-content/SKILL.md`. Change the guide only for a new pattern, figure type or source rule; say
   so at the checkpoints.
3. Read this plan before each step. One phase at a time, tasks in order.
4. Task done → tick `[x]` at once and move it to "Completed" of its phase. New task found → add it.
5. Each phase names its skills. Load a skill when its task comes, not before. Read it in full, from its file.
6. Checkpoint: stop, ask, wait for the creator's answer.
   Only a checkpoint waits. A phase's last box → set the next phase and go on in the same message.
7. At most 2 questions per message, one topic each.
8. Work on the branch `increment/<NN>-<short name>`. Until Commit everything is local: push nothing.
9. Plan in the creator's language. Keep headings and front matter keys. Delete a comment once its part is filled.
10. Begin each reply to the creator with the phase in `phase:`, and at a checkpoint the word checkpoint:
    "**Plan · Checkpoint**", "**Code**". The creator always knows where you are.
-->

*Started 2026-11-22. Explore, Plan, Code, Commit. Auftrag: lernapps/apps#389; Regeln: /tmp/epic/docs/mathe-epic/regeln.md. Der Mensch hat entschieden: PR 1 wird erst nach dieser Bereinigung veröffentlicht. Neue Inhalte folgen als Plan 03 auf `increment/01-prozent-und-dezimal`.*

## Goal

Der Bestand (21 Seiten) entspricht den Regeln für Quellen, Namen, Schreibweisen und Format 2, ohne neue Inhalte. Danach kann PR 1 veröffentlicht werden.

## Key decisions

- Bereinigung auf `work` (PR 1 wächst mit); Neues erst danach auf `increment/01-prozent-und-dezimal` (Orchestrator, Entscheidung des Menschen).
- Bestand trägt; nur ändern, was gegen Regeln verstößt. Die 6 Kapitel bleiben.
- Alle fünf externen Quellen (Serlo, ZUM, Wikipedia, ARD alpha, TU Berlin) und alle „Weiterlesen“-Links entfallen; es bleiben Karte, KMK, Hessen-Kerncurriculum. Nachschlagen ist keine Quelle (Regel 4).
- Brüche in Text, Aufgaben, Rückmeldungen als `$\frac{3}{4}$`, nie `3/4`; Eingaben dürfen `3/4` akzeptieren. Minus `−`. „Zahlenstrahl“ statt „Zahlengerade“. Einheiten, % und Tausender nach Abschnitt 2.
- Titel „Brüche und Dezimalzahlen“, Name und Basis-Pfad `mathe-brueche-dezimal`, Intro „Klassen 5 und 6“, `strand: mathematik/arithmetik`, Bausteine je Seite.
- `recap` je Kapitel (#385: natuerliche-zahlen, schriftliche-verfahren, grundrechenarten-rechengesetze; #386: potenzen). (guess) Zuordnung der Bausteine je Kapitel im Slice R5.
- (guess) `strand`, `recap` und Bausteine je Seite kennt das installierte Schema nicht (app-templates 0.1.0, tooling 0.2.0, aktuell 0.18.5): `npx lernapps update` ist nötig, als eigener Commit, Befunde zuerst beheben. Der Orchestrator hat dazu noch nicht geantwortet; ohne Ja baue ich R1 bis R4 und R6 und halte bei R5.
- `dezimalprodukt.svg`: eigene Zeichnung, Lizenz MIT (Repo), Hintergrund per Theme-Variable.

## Notes

Ausgangslage: `lernapps check` grün (12 Regeln, Commit 7ffa8b9). Abweichungen aus der Bestandsprüfung (Recherche, dem Orchestrator gemeldet): Quellen, Klassenangabe, Name, ein ASCII-Minus, Brüche als `3/4` im Text, Leerzeichen-Regeln ungeprüft, SVG-Lizenz und -Hintergrund, keine recap, kein `strand`.
Nicht Teil dieses Plans: Prozent-Grundbegriffe, Dezimalbrüche/Periode mit Hunderterfeld und Lupe, ggT/kgV-Prüfung (Plan 03). Dort liegen auch die Skizzen.
Die Aufgaben des Bestands rechnet der Fachprüfer nach (noch offen).

## Explore

<!--
- All content questions belong here; Plan maps the answers onto the app. Ask; write no code.
- Skip what earlier answers or the app already tell. Never tick a topic you assumed.
- Skills: the content guide `app-content`, `lernapps-content-research`, `lernapps-<archetype>-design`.
-->

### Tasks

- [x] Set `archetype` as in the app's first plan in `.vibe/plans/`.
- [x] Skills are in `.agents/skills/`; if missing, install them as the first task of the plan template says.
- [ ] Read the README of the archetype's template (link in skill `lernapps-app`): what the app can do now. Tell the
      creator what is new, if it matters for this increment.
- [ ] Load the content guide `.agents/skills/app-content/SKILL.md`. Read the plans in `.vibe/plans/`: what the app
      teaches, how its content is made, what is open.
- [x] Interview (ersetzt durch Issue #389, Regeln und Antworten des Orchestrators): one topic per question, the creator's words under "Answers". No answer → ask once more, then
      "(guess)". Topics: which competencies, chapters or rounds, for which school years; hurdles and examples;
      amount; any change of look and feel or terms.
- [ ] Load skill `lernapps-content-research`. Research what the guide's curriculum and sources do not cover. Under
      "Notes": curriculum orientation, new competencies by chapter as "Ich kann …", verified sources.
- [ ] Under "Notes": the didactic approach per competency and the scope (in, out, data range).
- [ ] A kind of content the guide does not cover (a new page structure, screen, component or kind of exercise) →
      load skills `lernapps-<archetype>-design` and `lernapps-exercise-patterns`. Else skip this task.
- [x] **Checkpoint:** research (als „Recherche“ gemeldet, Antworten in Key decisions). Show in plain words: curriculum orientation, new competencies by chapter, didactic
      approach, scope, every "(guess)", sources and how you checked them, what is unchecked. Stop and wait.
      Changes → change, ask again.
- [x] Set `phase: plan`: change the value line (`grep '^phase:'` prints `phase: plan`).

### Answers

<!-- The creator's answers, in their words, one bullet each. -->

### Completed

## Plan

<!--
- Map the new content onto the app with the guide's patterns. Confirmable in one read.
- After the yes, work on your own: at most 3 creator turns until the end.
- Skills: `lernapps-content-growth`; for something the guide does not cover, the skills loaded in Explore.
-->

### Tasks

- [x] `grep '^phase:'` prints `phase: plan`; else set it.
- [x] Load skill `lernapps-content-growth`. Write the Code tasks as slices, one per competency, in the guide's
      order. Mark the slices sub-agents can write in parallel.
- [x] Write "Content method": the guide's patterns, figures and components per slice. Anything new: map it as skill
      `lernapps-<archetype>-design` says, choose its pattern with skill `lernapps-exercise-patterns` (both loaded
      in Explore), and say why the guide's patterns do not fit.
- [x] Each new component or interactive exercise: a sketch (static SVG or image, or the steps). Words alone are not
      enough. Keep sketch files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, new competencies by chapter, slices; in plain words what learners see and do,
      what is new. At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes → change,
      ask again.
- [x] Set `phase: code`: change the value line (`grep '^phase:'` prints `phase: code`).

### Content method

- R1 Quellen und Metadaten: `app.yaml` (Quellen, Intro, Titel), `package.json`-Name, „Weiterlesen“-Links raus (`links` in allen Seiten), `dezimalprodukt.svg`. Kein neues Muster.
- R2 Schreibweisen über alle Seiten: Brüche gesetzt, `−`, „Zahlenstrahl“, geschützte Leerzeichen bei Einheit, % und fünfstelligen Zahlen. Danach Prüftest über die YAML-Dateien (`\d/\d`, ` - `, `Zahlengerade`). Komponenten prüfen: was sie als Text ausgeben (Rückmeldungen, Beschriftungen).
- R3 Musterseite: eine Seite des Bestands (`anteile/darstellen`) komplett nach den Regeln, als Lernender durchgespielt (Hell/Dunkel, 360 px, Tastatur, ohne JS), Beweis dass die Regeln greifen. Checkpoint „Musterseite“.
- R4 Übrige 20 Seiten nach dem Muster (parallel nach Kapitel, Brief aus `subagent-brief.md`; ändern nur ihre Kapiteldateien).
- R5 Format 2: `npx lernapps update`, `strand: mathematik/arithmetik`, Bausteine je Seite (Zuordnung der Karte), `recap` je Kapitel (6), kompakt, ohne Link zu anderen Explainern.
- R6 Prüfer (Lernender, fachlich) über `work`; fachlich zusätzlich Stichprobe auf wörtliche Übernahmen, Aufgaben nachrechnen, Schreibweisen. Befunde im Plan unter „Review“.

### Completed

## Code

<!--
- Build locally on the branch. Commit after each slice; the hooks check. A check fails → skill `lernapps-cli`. Fix from the message; never
  bypass a hook.
- Undecidable → choose, mark "(guess)", go on.
- Creator asks for a change → first say your reading in one sentence; never narrow it silently.
- Skills: `lernapps-cli`, `lernapps-<archetype>`, `lernapps-content-questions`, the content guide.
-->

### Tasks

- [ ] `grep '^phase:'` prints `phase: code`; else set it.
- [x] Kein neuer Branch: die Bereinigung läuft auf `work` (Entscheidung des Menschen über den Orchestrator). Plan hier committen.
- [x] Load skill `lernapps-cli`. Update the app as it says. Commit the update alone; fix its findings before
      content. The update replaces the `lernapps-*` skills: reread those you use.
- [ ] Load skill `lernapps-<archetype>` and the content guide. Questions with options and feedback: also skill
      `lernapps-content-questions`.
- [x] S0 `npx @lernapps/tooling@latest update` als eigener erster Commit auf `work` (Orchestrator: ja); Befunde zuerst beheben, danach `lernapps check`, Build und Tests grün.
- [x] R1 Quellen und Metadaten, Format 2 (`strand`, Bausteine je Seite). Commit.
- [ ] R2 Schreibweisen und Prüftest. Commit.
- [ ] R3 Musterseite `anteile/darstellen` komplett im neuen Format (Bausteine, Schreibweisen, gesetzte Brüche, recap des Kapitels), durchgespielt. **Checkpoint:** Musterseite melden, warten.
- [ ] R4 Übrige 20 Seiten (parallel, ein Commit je Kapitel) und `recap` je Kapitel (6).
- [ ] R6 Beide Prüfer über `work`; Befunde im Plan unter „Review“, getrennt, Offenes benannt.
- [ ] `lernapps check` ohne Fehler.
- [ ] After the first slice: show the creator a first look (`early-preview`) and go on.
      Parallel slices: send each sub-agent `@lernapps/tooling/guidance/subagent-brief.md`, filled in.
- [ ] The content guide describes the app as it is now (`app-content-matches`). `grep -c "FILL IN"
      .agents/skills/app-content/SKILL.md` prints 0.
- [ ] `npx --no -- lernapps check` passes.
- [ ] Look at `npx --no -- lernapps screenshots --desktop`, each figure in its own image.
- [ ] Every box of Explore, Plan and Code ticked.
- [ ] Set `phase: commit`: change the value line (`grep '^phase:'` prints `phase: commit`).
      No checkpoint here: set it before you ask or report anything, then start Commit in the same message.

### Completed

## Commit

<!--
- Publish with the creator's yes. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing; their preview and result
  are what the creator decides on.
- Skills: `lernapps-explainer-self-assessment` (an explainer), `lernapps-github`, `lernapps-commit`,
  `lernapps-listing`.
-->

### Tasks

- [ ] `grep '^phase:'` prints `phase: commit`; else set it.
- [ ] An explainer whose pages or exercises changed: load skill `lernapps-explainer-self-assessment`
      (missing → `npx --no -- lernapps skills --archetype explainer`). Update the
      self-assessment as it says (add one, if the app has none and the skill says so). Commit; the hooks check.
- [ ] Load skill `lernapps-github`. Push the branch, open the preview pull request, see its checks to green as it
      says.
- [ ] **Checkpoint:** publish. Show what the increment adds and the preview link; ask whether it may go online. Wait
      for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: the pull request squash-merged into
      `main` with the message from this plan, the run of `Pages` watched to the end.
- [ ] Open the address the job `deploy` printed; confirm the new content. Never a derived address.
- [ ] App listed and its entry changes (topics, school years, summary) → load skill `lernapps-listing` and write the
      changed entry. Else skip the checkpoint "list".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it. A push of only `.vibe/` publishes nothing.
- [ ] **Checkpoint:** list. Open the pull request to the catalog without asking first: the pull request is the
      review. See it to "bestanden" as the skill says, then show the creator the pull request and its result.
- [ ] Plan changed since its last push → commit it on `main`, push again.

### Completed

## Retrospective

<!-- At the end of Commit. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, content guide, messages or answers, and your choice. "None" if none. -->

## Befunde während der Bereinigung

- Das Werkzeug zählt in der No-JS-Prüfung jedes `<math>` außerhalb beschriebener Aufgaben als Formel des Inhalts. Komponenten setzen Brüche deshalb mit `BruchZahl.vue` in HTML (Zähler über Nenner, `role="math"`), nicht in MathML.
- Der Baustein `hundred-grid` (`draw: { kind: hundred-grid, filled: 12 }`) ist als Figur eingebaut: für Plan 03 genügt wohl ein Block statt einer neuen Komponente `Hunderterfeld` (`prefer-built-in-block`).
- `lernapps check` meldet 14 Hinweise (keine Fehler): 11 Seiten mit weniger als vier Aufgaben (Regel 3.1 verlangt je Baustein mindestens drei), gleiche Aufgabenarten auf allen Seiten, zwei Seiten mit spätem ersten Bild.
- KMK-Bildungsstandards stehen nicht in den Quellen: keine geprüfte Adresse (die geratene gab 404).
