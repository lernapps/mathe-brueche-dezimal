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
failedChecks: { plan-file: 1 }
---

# Increment: Prozent-Grundbegriffe, Dezimalbrüche mit Periode, Teilbarkeit und Rechnen vertiefen

<!--
For you, the assistant. One increment of a published app: new competencies, chapters, pages, rounds, questions, or a
correction. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Content method and Retrospective, in the creator's
  language. Delete the comment of a section once the section is filled.
- The first version's decisions stand: archetype, content method, content guide. Never change an earlier plan.
- Work on the branch `increment/<NN>-<short name>`. Until Commit everything is local: push nothing.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit. Auftrag: lernapps/apps#389; Regeln: /tmp/epic/docs/mathe-epic/regeln.md. Baut auf der bereinigten `work` (PR 1) auf; Vorschau-PR gegen `work`; „Veröffentlichen“ erst nach dem Merge von PR 1.*

## Goal

Lernende erkennen Prozent als Hundertstel und wechseln zwischen Bruch, Dezimalzahl und Prozent; sie wandeln Brüche in Dezimalzahlen um und erklären, ob die Dezimalzahl abbricht oder periodisch ist. Alle zehn Bausteine des Issues #389 sind mit mindestens drei steigenden Aufgaben geübt.

## Key decisions

- Branch `increment/01-prozent-und-dezimal` von der bereinigten `work`; Vorschau-PR gegen `work`; Rebase, falls der Mensch an PR 1 Änderungen verlangt (Orchestrator).
- Hunderterfeld zuerst mit dem eingebauten Block `draw: { kind: hundred-grid, filled: N }` (Regel `prefer-built-in-block`); eine Komponente nur, wenn das Kind selbst färben muss und kein Block das leistet (dann Begründung hier).
- Stellenwerttafel nach rechts nach den Konventionen von #385: Spalten mit Kopf aus Kürzel und Namen (Text, nicht nur Farbe), runde Marken je Einheit, Button „Bündeln“ (zehn gleiche Marken werden eine Marke links, die Zahl bleibt gleich), Zahl unter der Tafel. (guess) Kürzel für die Dezimalstellen: z (Zehntel), h (Hundertstel), t (Tausendstel), klein geschrieben gegen die Großbuchstaben E, Z, H, T der ganzen Zahlen; bei Abweichung von #385 angleichen.
- „Zahlenstrahl“ (nicht „Zahlengerade“); Lupe = Faktor 10, Hauptstriche beschriftet.
- Prozent nur als „Hundertstel“ (Abgrenzung zu #391): Grundwert/Prozentwert/Prozentsatz kommen nicht vor.
- Brüche gesetzt, Minus `−`, geschützte Leerzeichen, Prüftest `Schreibweisen.test.ts` läuft über alle neuen Seiten.
- Aufgabenarten abwechslungsreicher (Hinweis `explainer-page-variety`): je neue oder überarbeitete Seite mindestens zwei Arten (Auswahl, Eingabe, Zuordnen/Tabelle ausfüllen, Komponente), (guess) welche Arten das Werkzeug anbietet, steht in `lernapps-explainer/references/exercises.md`.
- Erst Musterseite (neue Prozent-Seite) als Tor beim Orchestrator, dann der Rest.

## Notes

**Lücken aus der Bestandsprüfung und den beiden Prüfern (Plan 02, Review):**
- Baustein 5 `prozent-grundbegriffe`: fehlt.
- Baustein 3 `dezimalbrueche`: eine Seite, Periode nur im Text; Teilen 3 : 4 ohne Beispiel; „Stellenwert, Tausendstel“ ohne Einführung.
- Baustein 6 `teilbarkeit`: Regeln stehen als Tabelle, keine Aufgabe wendet sie an.
- Baustein 7 `primfaktoren-ggt-kgv`: Zerlegungen nur n = 2 · p, kein Faktorbaum, keine Potenzschreibweise (der Recap nennt Potenzen, die Seite nutzt sie nicht), ggT/kgV trivial.
- Baustein 9 `brueche-addieren-subtrahieren`: ungleichnamige Subtraktion nicht geübt, gemischte Zahlen fehlen.
- Baustein 10 `brueche-multiplizieren-dividieren`: nur Faktor 2/3; keine Division durch natürliche Zahlen; Sachaufgaben rechnen sie schon.
- Baustein 4 `dezimalbrueche-rechnen`: Runden nur Aufrunden (Muster …46); keine Division mit Rest oder periodischem Ergebnis; Sachaufgaben ohne Dezimalzahlen.
- Allgemeine Hinweise bei Tippaufgaben („Lies dazu noch einmal …“) ohne Fehlertyp.
- Stichprobenprüfung mit Lernenden-Prüfer: Dunkelmodus und Tastatur der übrigen Seiten (bisher nur Musterseite).

**Neue Kompetenzen (Ich kann …):** Prozent als Hundertstel deuten und am Hunderterfeld darstellen; Bruch, Dezimalzahl und Prozent ineinander umwandeln; Brüche durch Teilen in Dezimalzahlen umwandeln und Perioden erkennen und schreiben; Teilbarkeitsregeln anwenden; Zahlen mit Faktorbaum in Primfaktoren zerlegen (mit Potenzen) und ggT/kgV daraus bestimmen; ungleichnamige Brüche subtrahieren; einen Bruch durch eine natürliche Zahl teilen.

**Übersprungen oder nicht wörtlich erfüllt (Stand P1, auf Wunsch des Orchestrators festgehalten):**
- Sechs Aufgaben aus Explore sind im Plan offen geblieben: README der Template lesen, Inhaltsleitfaden und frühere Pläne lesen, Interview, Recherche mit `lernapps-content-research`, didaktischer Ansatz in „Notes“, neue Inhaltsart. Grund: Ich habe den Plan zuerst von Hand geschrieben und erst beim Hook `plan-file` die Befehle `lernapps plan …` entdeckt; Explore wurde durch Issue #389, die Regeln, das Review aus Plan 02 und die Antworten des Orchestrators ersetzt (Lücken stehen oben). Die README der Template habe ich nicht gelesen; den Inhaltsleitfaden und die Pläne 01 und 02 habe ich gelesen; Recherche im Sinn von „Quellen öffnen“ fand nicht statt (keine Quellen nötig, eigene Herleitungen).
- „Load skill lernapps-cli … Update“: nicht wörtlich getan. `lernapps update` lief in Plan 02 auf `work`; hier habe ich es als no-op erneut ausgeführt und die Aufgabe getickt. `plan skip` wäre ehrlicher gewesen; der Hook `plan-file` wertet den von `skip` geschriebenen Text als Umformulierung (Fund an den Orchestrator).
- Die Checkpoint-Antwort „Plan bestätigt“ kam vom Orchestrator in Vertretung des Menschen, nicht vom Menschen.

**Quellen:** Karte, KMK (2022), Hessen-Kerncurriculum, eigene Herleitungen; Nachschlagen ist keine Quelle (Regel 4). Alle Aufgaben mit Rechenprobe im Test.

**Abgrenzung:** #391 (Prozentrechnung), #768 (negative Zahlen), #386 (Potenzen), #392 (Wurzeln). Skizzen: `.vibe/sketches/hunderterfeld.svg` (Seitenaufbau Prozent), `lupe.svg` (Zahlenstrahl mit Lupe).

## Explore

<!--
- All content questions belong here; Plan maps the answers onto the app. Ask; write no code.
- Skip what earlier answers or the app already tell. At most 2 questions per message, one topic each.
-->

### Tasks

- [ ] Read the README of the archetype's template (its path is in skill `lernapps-app`): what the app can do now.
      Tell the creator what is new, if it matters for this increment.
- [ ] Load the content guide `.agents/skills/app-content/SKILL.md` and read the earlier plans in `.vibe/plans/`: what
      the app teaches, how its content is made, what is open.
- [ ] Interview, one topic per question, the creator's words under "Answers": which competencies, chapters or rounds,
      for which school years; hurdles and examples; the amount; any change of look and feel or of terms. No answer:
      ask once more, then write your assumption with "(guess)".
- [ ] Load skill `lernapps-content-research`. Research what the content guide does not cover. Write under "Notes":
      the new competencies by chapter with their ids, the sources you opened.
- [ ] Write under "Notes" the didactic approach per competency and the scope (in, out, data range).
- [ ] The increment needs a kind of content the guide does not cover (a new page structure, screen, component or kind
      of exercise): load skills `lernapps-<archetype>-design` and `lernapps-exercise-patterns`. Else skip this task.
- [x] **Checkpoint:** research (Recherche und Plan 02 bei der Bestandsprüfung gemeldet; Lücken oben). Show in plain words: the new competencies by chapter, the didactic approach, the
      scope, every "(guess)", the sources and what is unchecked. Stop and wait. Changes: change them, then ask again.

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
      `lernapps-<archetype>-design` says, and say why the guide's patterns do not fit.
- [x] Draw a sketch of each new component or interactive exercise, in `.vibe/sketches/`.
- [x] Show the creator, short: goal, new competencies by chapter, slices; in plain words what learners see and do and
      what is new. At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Orchestrator in Vertretung des Menschen: Plan 03 bestätigt, beginne mit Musterseite P1 (anwendungen/prozent, eingebauter Block draw: hundred-grid) und melde sie als Tor.

### Content method

- P1 Prozent-Grundbegriffe (neue Seite `anwendungen/prozent`, nach „Bruch und Dezimalzahl“): Einstieg mit einer Alltagsfrage; `hundred-grid`-Figuren zeigen $\frac{3}{4}$ = 75 von 100 = 0,75 = 75 %; Beispielkasten mit drei Schreibweisen; Übungen: (1) Prozent am Feld ablesen, (2) Prozent ↔ Bruch, (3) Prozent ↔ Dezimalzahl, mit Fehlerhinweis (Komma verschieben, $5\,\%$ ≠ 0,5). Mindestens drei `generated`-Aufgaben plus eine Auswahlfrage, festes Seed, Rechenprobe.
- P2 Dezimalbrüche und Periode: `anwendungen/dezimaldarstellung` ergänzen um Stellenwerttafel (Konventionen #385) und Zahlenstrahl mit Lupe (Komponente `ZahlenstrahlLupe`, nur wenn kein Block die Lupe zeigt); neue Seite `anwendungen/periode` („Wenn das Teilen nie endet“): schriftliche Division 1 : 3 und 3 : 4 mit Rest, Periode $0{,}\overline{3}$, wann bricht eine Dezimalzahl ab (Nenner nur 2 und 5); 3 Aufgaben. Wiederverwendet: Zahlenstrahl, Hunderterfeld.
- P3 Teilbarkeit und Primfaktoren: `teilbarkeit/regeln` um Aufgaben zu den Teilbarkeitsregeln ergänzen (z. B. „Welche dieser Zahlen sind durch 3 teilbar?“, Zuordnen); `teilbarkeit/teiler-vielfache` um Faktorbaum mit Potenzschreibweise ($2^3\cdot 3$), ggT und kgV aus den Primfaktoren (auch Fahrplan und Fliesen als Sachbezug) und nichttriviale ggT/kgV-Aufgaben; je Baustein mindestens drei Aufgaben, steigend.
- P4 Rechnen vertiefen: `rechnen/plus-minus` ungleichnamige Subtraktion und gemischte Zahlen; `rechnen/dividieren` Division durch eine natürliche Zahl; `anwendungen/runden` Abrunden und Rundungsstelle variieren; Sachaufgaben mit Dezimalzahlen.
- P5 Rückmeldungen: Tippaufgaben bekommen Hinweise nach Fehlertyp (`mistakes` je Seite), nicht „Lies noch einmal …“.
- P6 Prüfer: Lernenden-Prüfer (Klasse 5) über die neuen Seiten und Stichprobe Dunkelmodus und Tastatur der übrigen Seiten; Fachprüfer rechnet alle neuen Aufgaben nach und prüft Schreibweisen und Übernahmen.
- Reihenfolge: P1 als Musterseite zuerst (Tor), P2 bis P5 danach parallel nach Dateien getrennt (Brief aus `subagent-brief.md`), P6 zuletzt.
<!-- archetype: content-method -->

## Code

<!--
- Build locally on the branch, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first.
-->

### Tasks

- [x] Branch `increment/01-prozent-und-dezimal` von der bereinigten `work` (Abweichung von „from main“ auf Anweisung des Orchestrators). Plan hier committen.
- [x] Load skill `lernapps-cli`. Update the app as its section "Update" says. Commit the update alone and fix its
      findings before any content. The update replaces the `lernapps-*` skills: read again those you use.
- [x] Load skill `lernapps-<archetype>` and the content guide.
<!-- archetype: code-start -->
- [x] P1 Prozent-Grundbegriffe: Seite anwendungen/prozent (eingebauter Block hundred-grid), Daten prozentpaare, mindestens drei steigende Aufgaben mit Fehlerhinweisen. Du allein (Musterseite). Check, Commit.
- [x] P2 Dezimalbrüche und Periode: Stellenwerttafel nach rechts (Konventionen #385, Kopf aus Kürzel und Name, Kommaspalte markiert), Zahlenstrahl mit Lupe, neue Seite anwendungen/periode, mindestens drei Aufgaben. Unteragent möglich (Dateien dezimaldarstellung, periode). Check, Commit.
- [x] P3 Teilbarkeit und Primfaktoren: Aufgaben zu den Teilbarkeitsregeln, Faktorbaum mit Potenzschreibweise, ggT und kgV aus Primfaktoren, nichttriviale Aufgaben. Unteragent möglich (Dateien teilbarkeit/*). Check, Commit.
- [x] P4 Rechnen vertiefen: ungleichnamige Subtraktion, gemischte Zahlen, Division durch natürliche Zahlen, Runden variieren, Sachaufgaben mit Dezimalzahlen. Unteragent möglich (Dateien rechnen/*, anwendungen/runden, sachaufgaben). Check, Commit.
- [x] P5 Rückmeldungen nach Fehlertyp statt allgemeiner Hinweise und abwechslungsreichere Aufgabenarten auf den überarbeiteten Seiten. Nach P2 bis P4, du allein. Check, Commit.
- [x] P6 Zwei Prüfer: Lernenden-Prüfer (auch Dunkelmodus und Tastatur der übrigen Seiten, Spaltenköpfe z, h, t gegen E, Z, H, T) und Fachprüfer (alles Neue nachrechnen, Schreibweisen, Übernahmen); Befunde unter Review im Plan. Check, Commit.
<!-- tasks: slices (6 added): one per competency, as written in Plan -->
- [x] **Checkpoint:** the pattern page, after the first slice. A slice in a pattern the app already has: show it to
      the creator and go on. A new pattern: load skill `lernapps-learner-check`, do its learner check, fix what it
      finds, then ask the creator whether the others may follow it, and wait.
      Creator: Orchestrator in Vertretung des Menschen: Musterseite anwendungen/prozent angenommen, P2 bis P5 dürfen folgen.
- [x] Update the content guide so that it describes the app as it is now (`app-content-matches`).
- [x] Run `npx --no -- lernapps check` until it passes.
- [x] Look at every changed screen, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.

## Commit

<!--
- Publish with the creator's yes. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
-->

### Tasks

<!-- archetype: increment-commit -->
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

Zwei Prüfer für das Neue, die nicht geschrieben haben (Unteragenten); die Prozent-Seite hatte vorher einen eigenen Lernenden-Prüfer (Klasse 6). Stand: Commit nach 5d7d1f1, `lernapps check` Exit 0.

### Lernenden-Prüfer (Klasse 5 bis 6)

21 Seiten bei 360 px hell; Dunkelmodus auf 10 Seiten (Kontrastscan, Bilder von etwa 6); Tastatur auf `dezimaldarstellung`, `primfaktoren`, `plus-minus`; ohne JavaScript auf drei Seiten. Nicht geprüft: Dunkelmodus der übrigen 11 Seiten, Screenreader, Tastatur der übrigen Seiten.
- Umgesetzt: Hinweis auf `dezimaldarstellung`, dass die kleinen z, h, t (Zehntel, Hundertstel, Tausendstel) nicht die großen Z, H, T der ganzen Zahlen sind; Fokus nach „Bündeln“ bleibt auf der Seite (Ergebnis), Meldung „nichts mehr zu bündeln“; ggT und kgV beim ersten Auftreten ausgeschrieben; Zuordnung der Teilbarkeitsregeln mit passender Aufgabe und ohne unpassende Antwort; Satz zu den Teilern; Rückmeldungen auf `dezimalrechnen`, `dezimal-mal-geteilt` und `vergleichen` klarer; widersprüchlicher Hinweis zu gemischten Zahlen auf den Grundaufgaben entfernt.
- Offen, Laufzeit des Werkzeugs: Rückmeldungen der Komponenten sind Klartext, Brüche stehen dort als „a/b“ (plus-minus etwa 30, multiplizieren 6, dividieren 38, terme 9, gleichungen 13 Stellen); „Prüfen“ der Komponenten ist ohne Eingabe grau ohne Hinweis; „Antworte zuerst: Wähle, tippe oder ordne alles zu“ auch bei Tippaufgaben; zufällige Aufgabennummer („Nr. 58“); Fokus nach Auswahl im Faktorwerkzeug.
- Offen, Inhalt: Viele Tippaufgaben (`generated`) zeigen für untypische Fehler „Lies dazu noch einmal den Text“ (z. B. regeln, periode, Sachaufgaben); Hinweise wie „Distributivgesetz“, „Platzhalter“, „Summand“, „relative Häufigkeit“, „Abschneiden“, „unechter Bruch“ vor oder ohne Einführung; kgV/ggT in einer Zuordnung vor der Erklärung; Tabelle „Exponenten“ in Dunkelmodus am Rand abgeschnitten; Plättchen und gestrichelte Linien im ggT-Werkzeug klein und im Dunkelmodus blass; Faktorbaum auf grüner Fläche im Dunkelmodus; Textmenge über dem Richtwert auf mehreren Seiten (periode, primfaktoren, regeln, teiler-vielfache, sachaufgaben).

### Fachlicher Prüfer

Alle neuen Daten, alle 40 `generated`-Aufgaben über die ganze Datenmenge, Komponentenlogik (Seeds 1 bis 400), Texte und Bilder, Schreibweisen, acht Web-Stichproben auf Übernahmen.
- Rechenwerte, Daten, Bilder: ohne Befund.
- Umgesetzt: F1 (Hinweis „Nullen“), F2 (falscher Satz zu 3/8), F4 (Alltagsgrößen), F5 (Stellenwert-Köpfe in den Rechentabellen), F6 (geschützte Leerzeichen bei Minuten und nach Formeln), F7 (x kursiv), F8 (sechs Rückmeldesätze), F11 (Kapitelzusammenfassungen).
- Nicht geändert: Titel behalten ein gewöhnliches Leerzeichen (No-JS-Test); Kommaspalte fehlt in den Rechentabellen (fünf Spalten passen bei 360 px nicht, die Zahl steht mit Komma in der ersten Spalte); Preise erscheinen als „1,6 €“ (Platzhalter ohne zweite Nachkommastelle); F9 (doppelte Fehlerwerte, harmlos); F10 (`solution()` zeigt „2/1“ und ungekürzte Brüche; wo sie angezeigt wird, nicht geprüft).
- Originalität: acht Stichproben ohne Wortlaut-Treffer; kurze Regelformeln zur Teilbarkeit liegen nah an Wikipedia (Sachformeln, unvermeidbar; „letzte Ziffer gerade“ umformuliert). Nicht geprüft: unterrichten.zum.de, Schulbücher, Arbeitsblätter, Aufgaben außerhalb der acht Stichproben.
- Abdeckung: alle zehn Bausteine mit mindestens drei Aufgaben mit steigender Schwierigkeit; Prozent-Grundbegriffe jetzt mit einer Seite und sechs Aufgaben.

### Klartext-Brüche in Rückmeldungen (Ausnahme in regeln.md Abschnitt 2)

Rückmeldungen von Komponenten und `mistakes` von `generated` sind Klartext (Laufzeit); dort steht `a/b` bis die Laufzeit Formeln kann. Zählung des Fachprüfers (Stellen/Texte je Seite): plus-minus 30 Stellen in 23 Texten, multiplizieren 6/14, dividieren 38/19, terme 9/9, gleichungen 13/10; die übrigen neuen Seiten 0. Insgesamt rund 96 Stellen in 75 Texten (nicht die frühere Schätzung 40); die Aufgabentexte der Komponenten sind gesetzt.
