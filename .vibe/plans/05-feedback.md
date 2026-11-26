---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, as in the app's first plan. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs of this increment, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: {}
---

# Increment: feedback

<!--
For you, the assistant. One increment of a published app: new competencies, chapters, pages, rounds, questions, or a
correction. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Content method and Retrospective, in the creator's
  language. Delete the comment of a section once the section is filled.
- The first version's decisions stand: archetype, content method, content guide. Never change an earlier plan.
- Work on the branch `increment/<NN>-<short name>`. Until Commit everything is local: push nothing.
-->

*Started 2026-11-26. Explore, Plan, Code, Commit.*

## Goal

Die neun Notizen aus dem Feedback (lernapps/mathe-brueche-dezimal#5) sind behoben: Übungen mit Sinn (Zahlenstrahl, Vergleichen, Teilbarkeit), klarere Modelle (Kuchen, Rechteck, Plättchen) und saubere Bilder (Lizenz, Überlappung, Rahmen).

## Key decisions

- Branch: `claude/magical-pascal-ydarht` statt `increment/05-feedback`, weil die Session nur diesen Branch pushen darf.
- Plan 04 steht noch in Commit, sein Inhalt ist aber schon in `main` (Squash 7209c01) und online. Darum neuer Plan 05; Plan 04 bleibt unverändert.
- `scope`: bleibt wie in den früheren Plänen (jede Seite hat `scope`); dieses Inkrement ändert ihn nur, wo eine Übung neu ist.
- Keine neue Kompetenz, keine neue Seite: nur Korrekturen an bestehenden Seiten, Komponenten und Bildern. Recherche entfällt.

## Notes

Befund und Vorschlag je Notiz (Stand c6f30e3):

1. `anteile/darstellen`, Üben, `BruchModelle` (Kreis): Das angeklickte Kreisstück bekommt den Fokusrahmen des Browsers, ein Rechteck. Vorschlag: kein Browser-Rahmen; Fokus (Tastatur) als dicker Rand genau entlang des Kuchenstücks.
2. `anteile/zahlenstrahl`, Üben, `aufgaben`: fragt immer „wie viele Abstände für n/n?“, Antwort ist immer n. Vorschlag: neue Aufgabe zum typischen Fehler der Seite (Striche statt Abstände zählen): „Zwischen 0 und 1 sind s Teilstriche. Welcher Bruch steht am k-ten Teilstrich?“ (Antwort k/(s+1), z. B. 3 Striche → Viertel).
3. `teilbarkeit/regeln`, Üben, `ziffer-ergaenzen`: nur 3 und 9. Vorschlag: eine zweite erzeugte Aufgabe „Ziffer ergänzen“ für 4 (letzte zwei Ziffern) und 6 (gerade und Quersumme durch 3), mit eigenen Hinweisen und Fehlern. 2, 5, 10 wären immer „0“ und bringen nichts.
4. Alle neun eigenen Zeichnungen (`src/images`) stehen als „MIT“. Vorschlag: „CC BY-SA 4.0“ bei allen; Inhaltsleitfaden (sagt noch CC BY 4.0) anpassen.
5. `umformen/vergleichen`, Üben, `aufgaben`: immer 1/n gegen 2/n. Vorschlag: Datensätze mit verschiedenen Nennern (z. B. 2/3 und 3/5, 5/8 und 3/4, auch gleichwertige wie 2/6 und 1/3), Antwort als Auswahl <, =, >; Lösungsweg mit gemeinsamem Nenner.
6. `grundaufgaben/anteil`, Ausprobieren, `AnteilGanzes`: Der Satz „Diese Aufgabe hat eigene Zahlen …“ fällt weg, es bleibt „Kürze, wenn möglich.“ Die Plättchen stehen in Reihen: jede Reihe so lang, dass der Teil genau ganze Reihen füllt (bei 4 von 16: vier Reihen mit je 4, der Teil ist eine Reihe → 1/4; bei 8 von 12: drei Reihen mit je 4, der Teil sind zwei Reihen → 2/3). So sieht man das Kürzen. Die Plättchen klickt man weiter selbst an.
7. `rechnen/multiplizieren`, Idee 1, `KuchenMultiplizieren`: Stückchen, die du weggibst, sind heute leer. Vorschlag: sie werden ganz hellrot (mit Muster, nicht nur Farbe), damit man sieht: „weggenommen“.
8. `rechnen/multiplizieren`, Idee 2, `BruchRechnen` (Rechteck): Die Beschriftung der linken Seite steht senkrecht gedreht, dadurch zerfällt der Bruch („2|3“). Vorschlag: Beschriftung waagerecht neben die Seite, der Bruch normal gesetzt.
9. `rechnen/gleichungen`, Bild `p4-gleichung-streifen.svg`: Der Nenner 4 von 3/4 liegt auf der Klammer. Vorschlag: Bruch höher setzen, Bild etwas höher.

## Explore

<!--
- All content questions belong here; Plan maps the answers onto the app. Ask; write no code.
- Skip what earlier answers or the app already tell. At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Read the README of the archetype's template (its path is in skill `lernapps-app`): what the app can do now.
      Tell the creator what is new, if it matters for this increment.
- [x] Load the content guide `.agents/skills/app-content/SKILL.md` and read the earlier plans in `.vibe/plans/`: what
      the app teaches, how its content is made, what is open.
- [x] Interview, one topic per question, the creator's words under "Answers": which competencies, chapters or rounds,
      for which school years; hurdles and examples; the amount; any change of look and feel or of terms. No answer:
      ask once more, then write your assumption with "(guess)".
- [x] (skipped: keine neue Kompetenz, nur Korrekturen bestehender Seiten) Load skill `lernapps-content-research`. Research what the content guide does not cover. Write under "Notes":
      the new competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" the didactic approach per competency and the scope (in, out, data range).
- [x] (skipped: keine neue Art von Inhalt: bestehende Komponenten und Aufgabentypen) The increment needs a kind of content the guide does not cover (a new page structure, screen, component or kind
      of exercise): load skills `lernapps-explainer-design` and `lernapps-exercise-patterns`. Else skip this task.
- [x] **Checkpoint:** research. Show in plain words: the new competencies by chapter, the didactic approach, the
      scope, every "(guess)", the sources and what is unchecked. Stop and wait. Changes: change them, then ask again.
      Creator: Ja, passt so, setz alle neun um

### Answers

- Issue #5 (neun Notizen, Wortlaut dort): Kreis-Rahmen hässlich, „Sinn dieser Übung?“, mehr Teiler als 3 und 9, „Alle unsere Bilder cc-by-sa“, „bei immer gleichem Nenner ist das witzlos“, Satz „eigene Zahlen“ bringt nichts / nur „kürze wenn möglich“, weggenommene Kuchenstücke hellrot, Bruch an der senkrechten Seite kaputt, Bruch überlappt die Klammer.
- Bild Anteil: „Nur wenn die Gesamtzahl in Reihen mit der Anzahl Plättchen entsprechend des Zählers wäre, würde es visuell helfen“.
- Lizenz: „Nur Bilder CC BY-SA 4.0“.

## Plan

<!--
- Map the new content onto the app with the guide's patterns. The creator confirms the plan in one read.
- After the yes you work on your own.
-->

### Tasks

- [x] Load skill `lernapps-content-growth`. Add the tasks of Code as slices, one per competency, in the guide's
      order, one call each: `npx --no -- lernapps plan add --at slices "<task>"`. Say in each which sub-agent may
      write it in parallel, if any.
- [x] Write "Content method": the guide's patterns, figures and components per slice. Anything new: map it as skill
      `lernapps-explainer-design` says, and say why the guide's patterns do not fit.
- [x] (skipped: keine neue Komponente und keine neue Übungsart) Draw a sketch of each new component or interactive exercise, in `.vibe/sketches/`.
- [x] Show the creator, short: goal, new competencies by chapter, slices; in plain words what learners see and do and
      what is new. At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Ja, passt so, setz alle neun um (Antwort auf die neun Vorschläge, die Inhalt und Methode dieses Plans sind)

### Content method

- F1: Bilder bleiben eigene SVG; nur `licence` und Lage der Beschriftung. Leitfaden „Figures“: CC BY-SA 4.0.
- F2: bestehende Komponenten, Prüfvertrag unverändert. Kreis: Fokus als Kontur des Sektors. Kuchen: weggegebene Stückchen hellrot + Punktmuster (zusätzlich zur Farbe), Hell- und Dunkelmodus. Rechteck: Beschriftung links waagerecht mit `BruchZahl`. Plättchen: Raster mit Reihenlänge G/n (Größe einer Nennergruppe), Teil = z volle Reihen; nichts vorausgefüllt.
- F3: Muster `generated` mit Datensatz (`pick: 1` aus `src/data`), damit die Schritte jede Zahl nennen. Zahlenstrahl: Antwort als Bruch über `compare: number` (exakter Bruch) — (guess) falls die Eingabe „2/4“ nicht annimmt, Frage nach dem Nenner. Vergleichen: `{ choice: ["<", "=", ">"] }`. Ziffer ergänzen 4/6: eigene Aufgabe `ziffer-ergaenzen-4-6`.
- Neu ist nichts; Muster des Leitfadens passen.
## Code

<!--
- Build locally on the branch, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first.
-->

### Tasks

- [x] (skipped: Session-Branch claude/magical-pascal-ydarht von main, siehe Key decisions) `git switch -c increment/<NN>-<short name>` from `main`. Commit this plan on it.
- [x] Load skill `lernapps-cli`. Update the app as its section "Update" says. Commit the update alone and fix its
      findings before any content. The update replaces the `lernapps-*` skills: read again those you use.
- [x] Load skill `lernapps-explainer` and the content guide.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] F1 Bilder: Lizenz aller neun Zeichnungen CC BY-SA 4.0; Klammer-Überlappung in p4-gleichung-streifen.svg (Notizen 4, 9). Du allein. Check, Commit.
- [x] F2 Komponenten: Kreis ohne Browser-Rahmen (BruchModelle), weggegebene Kuchenstückchen hellrot mit Muster (KuchenMultiplizieren), Seitenbeschriftung waagerecht (BruchRechnen), Plättchen in Reihen und Text ohne „eigene Zahlen“ (AnteilGanzes, grundaufgaben/anteil) (Notizen 1, 6, 7, 8). Du allein. Tests, Check, Commit.
- [ ] F3 Übungen: Zahlenstrahl Teilstriche vs. Abstände (anteile/zahlenstrahl), Vergleichen mit verschiedenen Nennern (umformen/vergleichen), Ziffer ergänzen für 4 und 6 (teilbarkeit/regeln), mit Daten in src/data (Notizen 2, 3, 5). Du allein. Check, Commit.
<!-- tasks: slices (3 added): one per competency, as written in Plan -->
- [ ] **Checkpoint:** the pattern page, after the first slice. A slice in a pattern the app already has: show it to
      the creator and go on. A new pattern: load skill `lernapps-learner-check`, do its learner check, fix what it
      finds, then ask the creator whether the others may follow it, and wait.
- [ ] Update the content guide so that it describes the app as it is now (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every changed screen, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.

## Commit

<!--
- Publish with the creator's yes. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
-->

### Tasks

- [ ] If pages or exercises changed, load skill `lernapps-explainer-self-assessment` and update the self-assessment
      as it says. Commit.
- [ ] Load skill `lernapps-github`. Push the branch, open the preview pull request and see its checks to green, as it
      says.
- [ ] **Checkpoint:** publish. Show what the increment adds and the preview link. Ask whether it may go online. Stop
      and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: the pull request squash-merged into
      `main`, the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm the new content. Never use a derived address.
- [ ] The app is listed and its entry changes (school years, summary): load skill `lernapps-listing` and write the
      changed entry. Else skip this task.
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it. A push of only `.vibe/` publishes nothing.
- [ ] The entry changed: open the pull request to the catalog as skill `lernapps-listing` says, without asking first,
      and see it to "bestanden". Else skip this task: `npx --no -- lernapps plan skip "entry unchanged"`.
- [ ] **Checkpoint:** list. Tell the creator the result: the pull request and its result, or, when the entry did not
      change, that the catalog takes over the app by itself. Tick it with their reply.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

## Retrospective

<!-- At the end of Commit. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, content guide, messages or answers, and your choice. "None" if none. -->
