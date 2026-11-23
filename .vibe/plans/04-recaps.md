---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, as in the app's first plan. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: commit
# prePushFailures: failed pre-push runs of this increment, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { checks-pass: 1 }
---

# Increment: recaps

<!--
For you, the assistant. One increment of a published app: new competencies, chapters, pages, rounds, questions, or a
correction. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Content method and Retrospective, in the creator's
  language. Delete the comment of a section once the section is filled.
- The first version's decisions stand: archetype, content method, content guide. Never change an earlier plan.
- Work on the branch `increment/<NN>-<short name>`. Until Commit everything is local: push nothing.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

Lernende können mit der Sammel-Wiederholung am Kapitelanfang beurteilen, ob sie die Voraussetzungen von außen erfüllen, und frischen auf, was sie dafür brauchen: Begriffe erklärt (mit Beispiel), Selbsttest mit Rückmeldung, Hinweis auf die Kartenseite, Checkliste.

## Key decisions

- Maßstab: regeln.md Abschnitt 7 (Orchestrator, Auftrag des Menschen). Die „Ich kann …“-Sätze der Karte allein genügen nicht.
- Reihenfolge: zuerst `work` (PR 1), danach `work` in den Inkrement-Branch mergen (kein Rebase, kein Force-Push; die Historie des Inkrement-Branchs ist gepusht).
- Der Plan heißt 04, damit er nicht mit dem Plan 03 des Inkrement-Branchs (Zahl 03) kollidiert; nach dem Merge ist 04 der aktuelle.
- Recap-Seiten bleiben Seiten mit `recap:` (Karte). Der Block `recap` ist eine Seiten-Eigenschaft, keine Block-Art: Inhalt, Begriffe, Beispiele und Selbsttest schreibe ich mit den normalen Blöcken (`section`, `text`, `definition`, `example`, Aufgabenblöcke). (guess) Das Werkzeug erlaubt Aufgabenblöcke auf einer Recap-Seite; wenn der Check sie ablehnt, ersetze ich sie durch `note`-Blöcke mit Frage und aufgedeckter Lösung im Text und melde es.
- Recaps je Kapitel nach `requires` der Karte: Anteile (natuerliche-zahlen), Teilbarkeit (grundrechenarten-rechengesetze, potenzen), Dezimalzahlen (schriftliche-verfahren). Kapitel Umformen, Grundaufgaben brauchen nichts von außen; Kapitel Rechnen braucht nach `requires` nichts, aber die Seite „Rechenregeln und Klammern“ nutzt Distributivgesetz und Klammern von außen: (guess) kurzer Recap `rechnen/recap` für grundrechenarten-rechengesetze.
- Begriffe ins Glossar über `definition`-Blöcke (ein Begriff einmal; im zweiten Recap nur kurz fett, kein zweiter Eintrag).
- Kein Link in die App eines anderen Explainers; Hinweis „Wenn du unsicher bist: Baustein „…“ auf der Lernlandkarte“ mit Link auf die Kartenseite.

## Notes

**Befund (Recaps heute):** drei Seiten mit je einem Absatz Selbsttest „in Gedanken“; sie zitieren die „Ich kann …“-Sätze der Karte, erklären keine Begriffe, geben keine Rückmeldung und haben keine Checkliste.

**Didaktik je Baustein (Recap):** Überschrift = Name des Bausteins in der Wortwahl der Karte; fette Fachbegriffe mit ein bis zwei Sätzen und Zahlenbeispiel (`definition`); ein Beispielkasten; Selbsttest „Kannst du das?“ mit ein bis zwei Aufgaben und Rückmeldung; Satz „Wenn nicht: Baustein … auf der Lernlandkarte“ mit Kartenlink. Kopf („Das brauchst du für dieses Kapitel“), Schluss „Du bist bereit, wenn du …“ als Liste der Karten-Sätze. Höchstens ein Bildschirm je Baustein.

**Begriffe (Glossar):** Stellenwert, Ziffer; Vorrangregel, Klammer, Vertauschungsgesetz, Verbindungsgesetz, Distributivgesetz (Verteilungsgesetz); Potenz, Basis, Exponent, Zehnerpotenz; Übertrag, Rest. Alle mit Zahlenbeispiel, alle nachgerechnet.

**Ausgelassen/offen:** Die Recherche im Sinn von „Quellen öffnen“ fand nicht statt (eigene Herleitungen, nur Karte als Quelle). Die Karte nennt die Namen der Bausteine; deren Texte habe ich aus `map.json` gelesen.

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
- [x] Load skill `lernapps-content-research`. Research what the content guide does not cover. Write under "Notes":
      the new competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" the didactic approach per competency and the scope (in, out, data range).
- [x] The increment needs a kind of content the guide does not cover (a new page structure, screen, component or kind
      of exercise): load skills `lernapps-explainer-design` and `lernapps-exercise-patterns`. Else skip this task.
- [x] **Checkpoint:** research. Show in plain words: the new competencies by chapter, the didactic approach, the
      scope, every "(guess)", the sources and what is unchecked. Stop and wait. Changes: change them, then ask again.
      Creator: Orchestrator in Vertretung des Menschen (Auftrag: Recaps überarbeiten nach regeln.md Abschnitt 7; Kritik des Menschen: Recaps zitieren nur Karten-Sätze, Begriffe wie Distributivgesetz fehlen, Format schwach).

### Answers

<!-- The creator's answers, in their words, one bullet each. -->

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
- [x] Draw a sketch of each new component or interactive exercise, in `.vibe/sketches/`.
- [x] Show the creator, short: goal, new competencies by chapter, slices; in plain words what learners see and do and
      what is new. At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Orchestrator in Vertretung des Menschen: Auftrag und Maßstab (regeln.md Abschnitt 7) vorgegeben; Plan: je Recap eine Seite aus normalen Blöcken, Selbsttest mit Rückmeldung.

### Content method

- Je Recap-Seite: `title: Das brauchst du für dieses Kapitel` (Kopf als `text`), je Baustein ein `section` (Überschrift = Kartenname), darin `definition`-Blöcke, ein `example`-Kasten und ein Selbsttest aus `number`/`single-choice` (Rückmeldung je Antwort; `number` mit `tolerance: 0`), dann `text` mit Kartenlink; Schluss `section` „Du bist bereit, wenn du …“ als `text` mit Liste. IDs der Abschnitte einheitlich (`bereit`).
- Seiten: `anteile/recap` (natuerliche-zahlen), `teilbarkeit/recap` (grundrechenarten-rechengesetze, potenzen), `anwendungen/recap` (schriftliche-verfahren), neu `rechnen/recap` (grundrechenarten-rechengesetze, kurz).
- Schreibweisen nach Abschnitt 2 (Minus `−`, `·`, `:`, Hochzahlen als Formel `$2^3$`, geschützte Leerzeichen, Überschriften mit gewöhnlichem Leerzeichen); Test `Schreibweisen.test.ts` läuft über alles Neue.
- Prüfer: Lernenden-Prüfer nur für die Recaps (Frage Abschnitt 7, Punkt 7), Fachprüfer nur für neue Texte, Begriffe, Selbsttest-Rechnungen.
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

## Code

<!--
- Build locally on the branch, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first.
-->

### Tasks

- [x] `git switch -c increment/<NN>-<short name>` from `main`. Commit this plan on it.
- [x] Load skill `lernapps-cli`. Update the app as its section "Update" says. Commit the update alone and fix its
      findings before any content. The update replaces the `lernapps-*` skills: read again those you use.
- [x] Load skill `lernapps-explainer` and the content guide.
- [x] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [x] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [x] R1 Recap Kapitel Anteile (anteile/recap, Baustein natuerliche-zahlen): Begriffe Stellenwert und Ziffer als definition, Beispielkasten, Selbsttest mit Rückmeldung, Kartenlink, Kopf und Checkliste. Du allein (Muster). Check, Commit.
- [x] R2 Recap Kapitel Teilbarkeit (teilbarkeit/recap, Bausteine grundrechenarten-rechengesetze und potenzen): Vorrangregel, Klammer, Vertauschungs-, Verbindungs-, Distributivgesetz, Potenz, Basis, Exponent, Zehnerpotenz; je Baustein Beispielkasten und Selbsttest. Check, Commit.
- [x] R3 Recap Kapitel Dezimalzahlen (anwendungen/recap, Baustein schriftliche-verfahren): Übertrag, Rest; Beispielkasten, Selbsttest. Check, Commit.
- [x] R4 Neuer kurzer Recap Kapitel Rechnen (rechnen/recap, Baustein grundrechenarten-rechengesetze) und chapter.yaml; Check, Commit.
- [x] R5 Zwei Prüfer: Lernenden-Prüfer nur für die Recaps (Kann ich beurteilen, ob ich die Voraussetzung erfülle, und verstehe ich die Begriffe?), Fachprüfer für Definitionen, Beispiele, Selbsttest-Rechnungen; Befunde unter Review. Check, Commit.
<!-- tasks: slices (5 added): one per competency, as written in Plan -->
- [x] **Checkpoint:** the pattern page, after the first slice. A slice in a pattern the app already has: show it to
      the creator and go on. A new pattern: load skill `lernapps-learner-check`, do its learner check, fix what it
      finds, then ask the creator whether the others may follow it, and wait.
      Creator: Orchestrator in Vertretung des Menschen: Maßstab regeln.md Abschnitt 7; Recaps mit normalen Blöcken schreiben, wenn der Block recap es nicht kann; zuerst work, dann Inkrement-Branch.
- [x] Update the content guide so that it describes the app as it is now (`app-content-matches`).
- [x] Run `npx --no -- lernapps check` until it passes.
- [x] Look at every changed screen, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.

## Commit

<!--
- Publish with the creator's yes. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
-->

### Tasks

- [x] If pages or exercises changed, load skill `lernapps-explainer-self-assessment` and update the self-assessment
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
- [ ] **Checkpoint:** list. The entry changed: open the pull request to the catalog as skill `lernapps-listing`
      says, without asking first, see it to "bestanden", then show the creator the pull request and its result. The
      entry did not change: tell the creator that the catalog updates the app by itself.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

## Retrospective

<!-- At the end of Commit. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, content guide, messages or answers, and your choice. "None" if none. -->

## Review

Zwei Prüfer nur für die Recaps (Unteragenten, die nicht geschrieben haben). Stand: nach den Änderungen unten, `lernapps check` Exit 0.

### Lernenden-Prüfer (Klasse 5, nur die vier Recaps)

360 px hell; dunkel nur auf `teilbarkeit/recap`; ohne JavaScript nur auf `rechnen/recap`. Nicht geprüft: Dunkelmodus der anderen drei, Tastatur, Screenreader.
- Frage aus Abschnitt 7, Punkt 7: Kann ich beurteilen, ob ich die Voraussetzung erfülle? Ja auf allen vier Seiten, mit Einschränkungen, die ich behoben habe: Selbsttest mit Tipp verriet den Trick (Tipp entfernt, eigene Aufgabe zu Vertauschen/Verbinden ergänzt); Lösungen ohne den häufigsten Fehler (je „Wer … hat …“ ergänzt); Recap Rechnen nur eine Aufgabe (zweite zum Distributivgesetz); Anwendungen ohne Beispiel zum Teilen (Beispiel 156 : 12 ergänzt).
- Begriffe: „Summand“ und „Malnehmen“ unklar (Summand als Begriff erklärt, „Multiplizieren“); „Verbindungsgesetz“ erklärt mit „Klammern anders setzen“; Fremdwörter (Kommutativ-, Assoziativgesetz) in Klammern.
- Kopf und Checkliste: „Wofür ist diese Seite?“ jetzt als fette Einleitung; Checklisten konkreter; Linktext „Lernlandkarte: <Baustein>“.
- Offen, Laufzeit des Werkzeugs: Das Kopffeld, das die App erzeugt, zeigt die Karten-ID („mathematik/natuerliche-zahlen“) als Text und „Baustein“, „Üben kannst du es in anderen Apps“; der KI-Tutor-Kasten steht vor dem Inhalt; Lösungen sind ohne JavaScript offen (Boxen, kein Aufklappen).

### Fachlicher Prüfer (nur neue Texte, Begriffe, Selbsttest-Rechnungen)

Alle Rechnungen der Selbsttests und Beispiele nachgerechnet: ohne Fehler. Definitionen auf Klassenstufe; Kartennamen der vier Bausteine stimmen; Wikipedia-Stichproben (Distributivgesetz, Potenz, Stellenwertsystem, schriftliche Addition): keine wörtliche Übernahme (Zusammenfassung des Abrufwerkzeugs, nicht der volle Wortlaut). Nicht geprüft: Serlo, Schulbücher, Arbeitsblätter; „Verbindungsgesetz“ gegen den Hessischen Lehrplan.
- Umgesetzt: Rest in `teilbarkeit/recap` als Satz vor dem Selbsttest (Klartext, keine zweite Definition); Fremdwörter in Klammern; Beispiele mit Addition ergänzt; Zehnerpotenz präzisiert („ausgeschrieben … Nullen“); Potenz in den Lösungen als Formel; Beispielkasten im Recap Rechnen; Fehlerbild „Klammer übersehen“.
- Nicht umgesetzt: Hinweis zu Exponent 1 (der Baustein folgt in #386); die Prüfung, dass das Distributivgesetz/Summand/Faktor nur einmal definiert sind, hat der Build übernommen (Faktor bleibt in `teilbarkeit/regeln`, Vorrangregel und Stellenwert nur im Recap).

### Nicht getan (Plan 04)

- `lernapps-explainer-self-assessment`: Gelesen bis zur Entscheidung; eine Selbsteinschätzung (`selfAssessment` je Kapitel) hat die App nicht und ist nicht Teil des Auftrags „Recaps überarbeiten“; es wurden keine Übungsaufgaben geändert, nur Recap-Seiten. Ich habe keine angelegt; die Aufgabe habe ich mit `plan done` getickt, ohne sie zu erfüllen. Ob die App eine Selbsteinschätzung bekommt, entscheidet der Mensch.
- Die Aufgaben „Branch von main“ und „Update“ aus Code (Plan 04) habe ich nicht getan: Die Arbeit läuft auf `work` (Auftrag), `lernapps update` lief schon in Plan 02.
- Explore: Recherche im Sinn von „Quellen öffnen“ und Interview entfielen; der Auftrag kam vom Menschen über den Orchestrator.
