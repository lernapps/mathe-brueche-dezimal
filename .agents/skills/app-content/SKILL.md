---
name: app-content
description: Use before all content changes in this fractions learning app. Curriculum, competencies, exact answer checking, interactive models and source policy.
---

# Content guide of this app

## Curriculum

Hessen, Gymnasium, Klasse 6. Kerncurriculum Mathematik Sek I (Hessisches Kultusministerium, 2011), Kap. 7.3 S. 26: https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-07/kerncurriculum_mathematik_gymnasium.pdf . Ergänzend Lehrplan Gymnasium (2002), Abschnitt 6.1 S. 14–15: https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-06/g9-mathematik.pdf . Relevante Abschnitte gelesen. Keine schulinterne Stoffverteilung vorgegeben.

## Competencies

### Kompetenzen und Lernhandlungen

Jede Zeile nennt Kompetenz, Herleitung und typische Fehlvorstellung; Quellenkennzeichen siehe unten.

| Kapitel | Kompetenz | Lernhandlung und Rückmeldung | Quelle |
|---|---|---|---|
| 1 Anteile darstellen | Ich kann Anteile als Bruch darstellen. | Kreis/Rechteck/Menge selbst markieren; Zähler/Nenner vertauscht und ungleich große Teile besprechen. | S1 |
| 1 Anteile darstellen | Ich kann Brüche auf dem Zahlenstrahl platzieren. | Einheit unterteilen und Position wählen; Teilstriche nicht mit Zwischenräumen verwechseln. | S1, S6 |
| 1 Anteile darstellen | Ich kann unechte Brüche in gemischte Zahlen umwandeln. | Ganze aus Streifenteilen zusammensetzen; Rest nicht als Dezimalziffer deuten. | S6 |
| 2 Teilbarkeit nutzen | Ich kann Teilbarkeitsregeln anwenden. | Endziffern/Quersumme prüfen und Zahl in gleich große Gruppen zerlegen; 1 ist keine Primzahl. | S7 |
| 2 Teilbarkeit nutzen | Ich kann gemeinsame Teiler und Vielfache bestimmen. | Teiler- und Vielfachenlisten aufbauen, ggT/kgV unterscheiden; Produkt nicht automatisch kleinster gemeinsamer Nenner. | S2, S7 |
| 3 Umformen und vergleichen | Ich kann Brüche erweitern. | Teile weiter unterteilen; Wert bleibt trotz größerer Zahlen gleich. | S2 |
| 3 Umformen und vergleichen | Ich kann Brüche vollständig kürzen. | Teile zu Gruppen bündeln; beide Zahlen durch denselben Faktor teilen, nicht subtrahieren. | S2 |
| 3 Umformen und vergleichen | Ich kann Brüche der Größe nach ordnen. | Gleiche Ganze/gemeinsame Unterteilung und Zahlenstrahl nutzen; größerer Nenner bedeutet nicht größerer Bruch. | S6 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann den Bruchteil einer Größe berechnen. | Menge erst in Nennergruppen teilen, dann Zählergruppen auswählen; nicht nur durch Zähler teilen. | S3 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann das Ganze aus einem Bruchteil berechnen. | Von ausgewählten Gruppen auf eine und dann alle Gruppen schließen; Bruchteil nicht mit Ganzem verwechseln. | S3 |
| 4 Anteil, Bruchteil, Ganzes | Ich kann den Anteil zweier Größen berechnen. | Gleiche Einheit und Verhältnis Teil/Ganzes herstellen; vertauschtes Verhältnis erklären. | S3 |
| 5 Rechnen mit Brüchen | Ich kann Brüche addieren und subtrahieren. | Streifen gleich unterteilen und Teile zusammenfügen/wegnehmen; Nenner nicht mitaddieren. | S4 |
| 5 Rechnen mit Brüchen | Ich kann Brüche multiplizieren. | Anteil eines Anteils mit überlagerten Rechteckunterteilungen bilden; Ergebnis muss nicht größer werden. | S4 |
| 5 Rechnen mit Brüchen | Ich kann Brüche dividieren. | Anzahl passender Bruchstücke in einer Strecke ermitteln; nur zweiten Bruch umkehren. | S4 |
| 5 Rechnen mit Brüchen | Ich kann zusammengesetzte Bruchterme berechnen. | Schritte mit Klammern/Vorrangregeln wählen, Rechengesetze durch Gruppierung begründen; nicht stur von links nach rechts. | S4, Lehrplan |
| 5 Rechnen mit Brüchen | Ich kann einfache Gleichungen mit Brüchen lösen. | Fehlenden Summanden/Faktor am Streifen ermitteln und durch Einsetzen prüfen; nicht Rechenzeichen beliebig tauschen. | S4, Lehrplan |
| 6 Dezimalzahlen und Anwendungen | Ich kann Brüche in Dezimalzahlen umwandeln. | Zehntel-/Hundertstelunterteilung oder Division verfolgen; Perioden nicht als endliche Gleichheit ausgeben. | S5 |
| 6 Dezimalzahlen und Anwendungen | Ich kann mit abbrechenden Dezimalzahlen rechnen. | Stellenwerte und Größen verwenden, vor dem Rechnen schätzen; Komma nicht beliebig verschieben. | Lehrplan; Zweitquelle vor Code ergänzen |
| 6 Dezimalzahlen und Anwendungen | Ich kann Dezimalzahlen auf eine vorgegebene Stelle runden. | Nachbarwerte am Zahlenstrahl untersuchen; Runden und Abschneiden unterscheiden. | Lehrplan; Zweitquelle vor Code ergänzen |
| 6 Dezimalzahlen und Anwendungen | Ich kann Sachaufgaben zu Anteilen lösen. | Gegebenes/Gesuchtes zuordnen, passenden Term berechnen, Einheit/Plausibilität prüfen; Prozent/relative Häufigkeit als Anteil einordnen. | S3, Lehrplan |


## Content structure

### Seitenstruktur und Zuordnung

Die Vorlage erzeugt Start, Kapitelübersichten, Navigation, Glossar und Tutor-Seiten. Jede Lernseite folgt **passender Einstieg → Ausprobieren oder Anschaulich erklärt → Am Beispiel nachvollziehen → Üben**, mit festen Abschnitts-IDs `entdecken`, `regel`, `beispiel`, `ueben`. Kapitel und Seiten werden in YAML unter `src/` angelegt; die konkrete Dateibenennung folgt nach `create` dem installierten Schema. Kein eigenes Seitenlayout.

| Kapitel / Pfad | Lernseiten | Skizze |
|---|---|---|
| `anteile` | `darstellen`, `zahlenstrahl`, `gemischte-zahlen` | kapitel-1.svg, interaktionen.svg |
| `teilbarkeit` | `regeln`, `teiler-vielfache` | kapitel-2.svg |
| `umformen` | `erweitern`, `kuerzen`, `vergleichen` | kapitel-3.svg, interaktionen.svg |
| `grundaufgaben` | `bruchteil`, `ganzes`, `anteil` | kapitel-4.svg |
| `rechnen` | `plus-minus`, `multiplizieren`, `dividieren`, `terme`, `gleichungen` | kapitel-5.svg, interaktionen.svg |
| `anwendungen` | `dezimaldarstellung`, `dezimalrechnen`, `dezimal-mal-geteilt`, `runden`, `sachaufgaben` | kapitel-6.svg |

Alle Skizzen liegen in `.vibe/sketches/`. `ablauf-1.svg` zeigt die Startnavigation, `ablauf-2.svg` den gemeinsamen Seiten- und Übungsablauf. Zustände: unberührt → eigene Eingabe → Prüfung → Erfolg mit Begründung oder Fehler mit Hinweis → erneuter Versuch/neue Aufgabe. Ein neuer Versuch behält die Aufgabe, eine neue Aufgabe löscht Antwort und Feedback. Keine Zeitschranke, keine Bestenliste. Kleine Kapitel-Selbsteinschätzungen werden zum Schluss aus vorhandenen Übungen zusammengestellt, ohne ein zweites Aufgabensystem.

### Muster und Daten

Jede Kompetenz der Tabelle unter Notes entspricht genau der gleichnamigen Seite bzw. im Fall Addieren/Subtrahieren einer gemeinsamen Seite. Dieselben Zahlen und Aufgabenvorgaben werden in Darstellung und Prüfung verwendet, keine doppelt gepflegten Musterlösungen. Gemeinsame Quellen und Zahlenbereiche stehen in `src/data/quellen.yaml` und `src/data/aufgabenbereiche.yaml`; Sachkontexte in `src/data/sachkontexte.yaml`. Dateien werden nur verwendet, wo das installierte Schema Datenreferenzen erlaubt; andernfalls hält ein gemeinsames Logikmodul die Aufgabenvorgaben zentral, ohne Änderung der Vorlage.

| Kompetenzen / Seite | Muster, Beispiel und Variation | Prüfung und typische Fehler |
|---|---|---|
| Anteile darstellen | Modell markieren; z. B. 3/4 in Kreis, Streifen, Menge. Zähler/Nenner und Bezugsmenge variieren. | Jede passende Markierung gilt; 9 von 12 ebenso 3/4. Vertauschen, ungleich große Teile erklären. |
| Zahlenstrahl | Position wählen; z. B. 5/4 zwischen 1 und 2. Nenner und Anzahl Ganzer variieren. | Exakte rationale Position; Tickzahl nicht Intervallzahl. Ohne Ziehen per Tasten/Eingabefeld möglich. |
| Gemischte Zahlen | Ganze bündeln; z. B. 7/3 → 2 1/3. | Ganze plus Rest prüfen; äquivalente Brüche akzeptieren, wenn keine bestimmte Schreibweise verlangt. |
| Teilbarkeit, ggT/kgV | Zahlentscheidung und berechnete Zahl; z. B. ggT(12,18). Listen/Gruppe als Herleitung. | ggT=6, kgV=36; 1 keine Primzahl, Teiler und Vielfache unterscheiden. |
| Erweitern/Kürzen | Teile verfeinern/bündeln; z. B. 2/3 → 4/6. Faktor bzw. fehlender Wert wechselt. | Wertgleichheit mit ganzzahligem Kreuzprodukt; explizit verlangten Nenner/Faktor beachten. 4/6 bei „gleichwertig“ richtig, bei „vollständig gekürzt“ weitere Hilfe. |
| Vergleichen | Brüche ordnen bzw. Relation wählen, z. B. 2/3 < 3/4. Gleich große Ganze/gemeinsame Teilung zeigen. | Gleichwertige Brüche nicht in eine willkürliche Reihenfolge zwingen. Falsche Nennerstrategie mit Modell erklären. |
| Drei Grundaufgaben | Gegebenes/Gesuchtes zuordnen, dann Zahl/Bruch eingeben, z. B. 3/4 von 12. | Bruchteil=9, Ganzes=12, Anteil=3/4 je nach Aufgabe; Teil/Ganzes nicht vertauschen. Personen/Gegenstände nur ganzzahlig. |
| Plus/Minus | Streifen gleich unterteilen, zusammenfügen/wegnehmen; z. B. 1/2 + 1/3. | 5/6; 2/5 als Nenneraddition diagnostizieren. Bei Subtraktion kein negatives Ergebnis im bestätigten Bereich. |
| Multiplikation | Anteil eines Anteils im Rechteck; z. B. 2/3 von 3/4. | 1/2 und 6/12 gelten bei freier Ergebnisangabe. Addieren statt Multiplizieren und „wird immer größer“ erklären. |
| Division | Bruchstücke in eine Strecke legen; z. B. 3/4 : 1/8. | 6 Stücke; erster statt zweiter Kehrbruch oder bloße Multiplikation erklären. Divisor nie null. |
| Terme und Gleichungen | Rechenschritt wählen / fehlende Zahl berechnen, z. B. x + 1/4 = 3/4. | x=1/2; Einsetzen prüft. Vorrangregeln und Rechengesetze nicht mit symbolischer Algebra überfrachten. |
| Dezimaldarstellung | Stellenwertdarstellung zuordnen/umwandeln, z. B. 3/4 = 0,75; 1/3 periodisch. | Dezimalkomma; periodische Antwort nicht mit endlichem Näherungswert gleichsetzen. |
| Dezimalrechnung/Runden | Berechnete Zahl; z. B. 0,75 + 0,5; 0,746 auf Hundertstel. | 1,25 bzw. 0,75; Dezimalkomma und Abschneiden diagnostizieren. Keine implizite Rundung. |
| Sachaufgaben | Gesuchte Größe bestimmen, Rechnung und Ergebnis mit benannter Einheit; z. B. 3/4 Liter auf zwei gleiche Gefäße. | 3/8 Liter pro Gefäß; Einheiten/Plausibilität, einfache Prozentangaben und relative Häufigkeit als Anteil. |

### Interaktive Komponenten

1. **BruchModelle**: synchronisierte Kreis-, Streifen-, Zahlenstrahl- und Mengenansicht; Modi Entdecken, Markieren, Platzieren, Ganze bündeln. Ändert den Modellzustand statt nur ein fertiges Bild zu zeigen. Prüft gewählten Anteil/Position, nicht die Lage einzelner gleichwertiger Teilstücke. Grenzen der Notes gelten; kein freies Geometrie-Zeichnen.
2. **BruchUmformen**: verändert Unterteilungen beim Kürzen/Erweitern; gemeinsame Unterteilung für Vergleiche. Prüft Faktor, Wertgleichheit und ausdrücklich geforderte Normalform. Beliebige Additionen zu Zähler/Nenner sind keine Umformung. Kein freier Formeleditor.
3. **AnteilGanzes**: Gruppen bilden und fehlende Größe bestimmen; Beschriftungen für Anteil, Bruchteil, Ganzes. Nur Gegebenes und eigener Bearbeitungsstand sichtbar, gesuchte Größe nicht vorbefüllt. Prüft Zahlenverhältnis und ggf. geforderte Einheit; keine automatische Interpretation freier Sachtexte.
4. **BruchRechnen**: vier Modi für Plus/Minus (Streifen), Mal (Rechteck) und Geteilt (Streckenstücke), mit schrittweise freizugebender Herleitung. Modellprüfungen über exakte Brucharithmetik, nicht über Pixel. Kein allgemeines Computeralgebrasystem.

Warum eigene Komponenten: Die eingebauten statischen Figuren und Standardfragen erlauben keine veränderbare Unterteilung, verknüpfte Ansichten, Auswahl von Flächenteilen oder das Legen von Bruchstücken. Statische Erklärungen, Tabellen, Zahleneingaben, Auswahl- und Zuordnungsfragen bleiben Standardblöcke. Jede eigene Komponente bekommt ein Logikmodul, sinnvolle Tests mit alternativen richtigen Antworten und typischen Fehlern, Tutor-Deklaration und eine statische Alternative mit beschriftetem Bild und Lösungsweg. Zusätzlich hat jede Lernseite einen Standard- oder generierten Übungsblock, da Komponenten allein die Pflichtübung nicht ersetzen.

### Einheitliche Rückmeldung und Erweiterung

- Vor „Prüfen“ keine Lösung oder Vorschau aus dem Zielwert. Explizit gegebene Modelle dürfen Ausgangswerte zeigen; Erfolgsdarstellungen erst danach.
- Richtige Antwort: kurze Begründung. Falsche Antwort: konkreter Denkfehler und nächster Schritt; Lösung erst auf eigenen Wunsch. Unvollständige/ungültige Eingabe: erklären, was fehlt, keine mathematische Fehlbewertung.
- Jede berechnete Übung: mindestens zwei typische Fehler und ein Hinweis. Korrektheitsprüfung als rationale Zahlen; keine Fließkomma-Gleichheit. Nur bei expliziten Rundungsaufgaben vereinbarte Dezimalstelle prüfen.
- Eigene SVG-Modelle mit Textalternativen, gleicher Bezugsgröße, deutlichen Grenzen und Markierungen zusätzlich zur Farbe. Mengenmodell nur mit teilbarer Bezugsmenge; Über-eins-Fälle mit mehreren Ganzen.
- Spätere Kapitel verwenden dieselbe Seitenstruktur und dokumentierte Aufgabenvorgaben; neue Kompetenz samt Quelle, Modellmuster, Zahlenbereich, akzeptierten Antworten und Fehlern zuerst im Content-Guide ergänzen.
- Tutor: zunächst Tipp und Herleitung, dann nächsten Schritt erfragen; vollständige Lösung erst auf Wunsch. Keine zusätzlichen externen Dienste oder Speicherung außerhalb der Vorlage.



## Terminology

Zähler (Anzahl ausgewählter Teile), Nenner (Anzahl gleich großer Teile pro Ganzem), Anteil (Bruchzahl), Bruchteil (ausgewählte Größe), Ganzes (Bezugsgröße). Du-Ansprache, Dezimalkomma, Einheiten explizit; gemischte Zahlen als Ganze plus echter Bruch.

## Exercise patterns

Die obigen Muster gelten. Jede Seite nutzt stabile Übungs-IDs `verstehen` und `aufgaben`, interaktive Aufgaben zusätzlich `modell`. Alternative korrekte Brüche über Kreuzprodukt prüfen, vollständige Kürzung nur bei ausdrücklicher Aufforderung.

## Figures

Kreis, Streifen, Menge und Zahlenstrahl mit gleichen Teilen, ausgewiesenem Ganzen und auswählbaren Elementen. Markierungen zusätzlich zur Farbe. Alle Bilder eigene SVG-Zeichnungen unter CC BY-SA 4.0 (`licence: CC-BY-SA-4.0`, Wunsch aus #5); Texte bleiben wie bisher. In Aufgaben nur Gegebenes darstellen. Texte und Beschriftungen über Props.

### Umfang und Annahmen

- Inhalt: Bruchrechnung einschließlich zugehöriger Teilbarkeit und Dezimaldarstellung; keine vollständige Mathematik-App für Klasse 6. Sechs Kapitel mit 21 Lernseiten. Pro Lernseite ein Verständnischeck und eine wechselnde Übung mit mindestens sechs geprüften Aufgabenvarianten; insgesamt mindestens 140 Aufgabenstellungen, dazu die interaktiven Entdeckermodelle.
- Datenbereich (guess): nichtnegative Brüche; Modelle mit Nenner 1–12 und Wert 0–3, Mengen 1–48 mit ganzzahligem Ergebnis. Rechenaufgaben Zähler 0–36, Nenner 1–24, Ergebnisse bis 12; Division nur durch von null verschiedene Brüche. Kürzen/Erweitern Faktoren 2–6. Teilbarkeit natürliche Zahlen 1–200, Primzahlen bis 50, Regeln für 2, 3, 4, 5, 9, 10, 25 und 100. Umwandlungen zusätzlich Nenner 10, 100, 1000 sowie einfache periodische Fälle 1/3, 2/3, 1/6, 5/6, 1/9. Dezimalrechnung höchstens drei Nachkommastellen; Runden mit ausdrücklich benannter Stelle. Keine stillschweigende Begrenzung auf Stammbrüche.
- Enthalten: gemischte Zahlen, Brüche über 1, Grundrechenarten, einfache kombinierte Terme/Vorrangregeln, Rechengesetze, einfache Platzhaltergleichungen und Alltagsanwendungen mit Einheiten; Dezimalrechnung als Anschluss zur Bruchdarstellung. Einfache Prozentangaben als Hundertstel und relative Häufigkeit als Anwendung des Anteils.
- Ausgeschlossen (guess): negative Bruchrechnung, Doppelbrüche, euklidischer Algorithmus, algebraisches Rückumwandeln periodischer Dezimalzahlen; die letzten drei nennt der G9-Lehrplan fakultativ. Keine eigene Geometrie- oder Statistiklektion.
- Vorwissen (guess): Grundrechenarten mit natürlichen Zahlen und Einmaleins; Teilbarkeit wird aufgefrischt. Deutsch, übliche Fachbegriffe und Arbeitstitel sind Annahmen. Ruhige Gestaltung durch die Vorlage. Keine Videos oder fremden eingebetteten Applets. Eigene Texte und Zeichnungen, Code MIT und Inhalte CC BY 4.0 (guess).
- Modelle: Kreis, Rechteck/Streifen, Zahlenstrahl und Menge. Gleich große Teile; gleiches Bezugs-Ganzes beim Größenvergleich; Mengenmodell nur für passende Anzahlen. Entdecken und Prüfen getrennt, damit Aufgabenbilder keine Lösung verraten. Bedienung mit Tastatur und Tippen, nicht nur Ziehen. Die Vorlage regelt die Seitenanordnung; die Komponenten müssen innerhalb ihres Bereichs auch bei 360 px bedienbar sein.


## Sources

### Geprüfte Quellen und offene Prüfung

Primär: Hessisches Kultusministerium, Kerncurriculum Mathematik Sek I Gymnasium (2011), Kap. 7.3 S. 26; ergänzend Lehrplan Mathematik Gymnasium (2002), 6.1 S. 14–15. Beide PDFs geöffnet und relevante Abschnitte gelesen. Kerncurriculum bündelt 5/6; kein schulinternes Curriculum geprüft.

- S1: Serlo, „Einführung zu Brüchen“, https://de.serlo.org/mathe/19479/einfuehrung-zu-bruechen — im Web geöffnet; Darstellungen/gleich große Teile gelesen. Direkter lokaler Abruf lieferte 403, daher Webtext verwendet.
- S2: Serlo, „Brüche kürzen und erweitern“, https://de.serlo.org/mathe/1509/brueche-kuerzen-und-erweitern und „Kleinstes gemeinsames Vielfaches“, https://de.serlo.org/mathe/1497/kleinstes-gemeinsames-vielfaches — Artikel im Web geöffnet; Regeln und Beispiele gelesen.
- S3: ZUM-Unterrichten, „Bruchteil, Anteil und Ganzes bei der Bruchrechnung“, https://unterrichten.zum.de/wiki/Teil,_Anteil_und_Ganzes_bei_der_Bruchrechnung — geöffnet, Text lokal gelesen; keine Applets übernommen.
- S4: Serlo, „Rechnen mit Brüchen – Überblick“, https://de.serlo.org/mathe/50493/rechnen-mit-bruechen-ueberblick — im Web geöffnet; Rechenregeln als Überblick. Regeln für alle vier Grundrechenarten im Artikel gelesen.
- S5: TU Berlin, „1.2.2 Umwandeln von Brüchen“, https://vorkurs-mathematik.innocampus.tu-berlin.de/section/001-VBKM01/001-M01_Bruchrechnung/001-VBKM01_USBrueche — geöffnet, deutschen Text lokal gelesen; Formeln im Textabruf teilweise nicht extrahiert, diese nicht als geprüft ausgeben.
- S6: Wikipedia, „Bruchrechnung“, https://de.wikipedia.org/wiki/Bruchrechnung — Artikel und Abschnitte zu gleichwertigen Brüchen sowie Bruchdarstellungen gelesen; gemischte Zahlen zusätzlich im Serlo-Kurs S1 geprüft.
- S7: Zweitquelle für Teilbarkeitsregeln noch offen: Aufgabenfuchs konnte im Web nicht geladen werden. Amtliche Vorgaben sind gelesen; passende Zweitquelle vor Code ergänzen.
- Nur Fakten als Grundlage; keine fremden Texte, Aufgaben oder Grafiken kopieren. Serlo nennt CC BY-SA 4.0; eigene Formulierungen und eigene Beispiele erstellen. Keine Videos geprüft oder vorgesehen.
- Katalogschema vollständig über curl gelesen; Katalog-llms.txt gelesen. Eintragsentwurf enthält nur bekannte Daten, Veröffentlichung/Urheber/Commit/fitness werden erst nach Umsetzung ergänzt; er ist deshalb noch kein vollständiger gültiger Eintrag.


## Adding a chapter or round

Zuerst Kompetenz, Quelle und Methode hier ergänzen, dann `src/<kapitel>/chapter.yaml`, Seite `<seite>.yaml`, Eintrag in `src/app.yaml`. Abschnittsstruktur und Übungen wie oben. Zahlenfälle sowie alternative richtige und falsche Antworten prüfen, Tutor und statische Alternative ergänzen, `lernapps check`, Screenshot Desktop/360 px prüfen, committen.

## Rules learned from mistakes

- Das Tooling erlaubt beim Anlegen nur seine Init-Dateien und `.vibe`: Hilfsskripte im übergeordneten `work/` halten.
- Übungskomponenten haben keinen eigenen Prüfknopf, keine eigene Ergebnisanzeige und keine eigenen Formulare; die Runtime prüft.

- `BruchBild` ist eine gemeinsame Zeichenhilfe; `BruchEntdecken` erlaubt freies Verändern von Zähler und Nenner. Übungen nutzen `BruchModelle` mit dem Runtime-Prüfvertrag. Beide Hilfen sind Teil der geplanten Bruchmodell-Komponente.


### Korrektur aus der frühen Vorschau

- Nutzerwunsch: einladender Einstieg „Was ist überhaupt ein Bruch?“, Beinbruch/Bruchteil und kurzes Pizza-Beispiel.
- Nutzerwunsch: In jeder Übungsaufgabe genau eine Darstellung. Die freie Entdeckung darf mehrere Ansichten vergleichen. BruchModelle zeigt pro Aufgabe Kreis, Streifen, Menge oder Zahlenstrahl, nicht alle gleichzeitig.

- Zweite Vorschaukorrektur: Lerninhalte nicht vorwegnehmen. `darstellen` nur Ganzes, gleich große Teile, Zähler und Nenner; `zahlenstrahl` nur Positionen; `gemischte-zahlen` nur Ganze/Rest. Gleichwertigkeit erst in `umformen`, Rechenarten erst in `rechnen`. Jede Aufgabe muss die eigene Seitenkompetenz üben.

- Verbindliche Übungsregel aus Browserfeedback: Vor der Prüfung weder markierte Anzahl als Ergebnisbruch anzeigen noch ein Ergebnisfeld durch Markieren, Regler oder Stückzähler ausfüllen. Modelle zeigen Gegebenes und eigene Markierungen. Zahlenstrahl-Seite ausschließlich 0 bis 1; unechte Brüche erst auf `gemischte-zahlen`.


### Didaktischer Aufbau nach Browserfeedback

- Alle Lernseiten beginnen mit einem alltagsnahen Einstieg und dem Begriff der Seite. Reihenfolge der Abschnitts-IDs jetzt `regel`, `entdecken`, `beispiel`, `ueben`; Inhaltlich passende Einstiegstitel, anschließend „Ausprobieren“ nur bei Interaktion oder sonst „Anschaulich erklärt“, danach „Am Beispiel nachvollziehen“ und „Üben“.
- `teilbarkeit/regeln`: Faktor und Produkt anhand von Bauklotz-Reihen, dann `FaktorEntdecken` zum selbstständigen Zerlegen einer Zahl von 2 bis 48; erst danach Primzahl und Primfaktorzerlegung definieren, zum Schluss Teilbarkeitsregeln als Abkürzungen. Jede Aufteilung bewahrt das Produkt; 1 und unpassende Faktoren sind ausgeschlossen. Eigene Tests prüfen genau das und das Ende bei Primzahlen.
- Neue Kompetenz: Ich kann eine zusammengesetzte Zahl in Primfaktoren zerlegen. Übung `primfaktoren` mit sechs Fällen aus `src/data/primfaktoren.yaml`, zusätzlicher Verständnischeck `verstehen` und Gruppenübung `aufgaben`.
- Quelle ergänzt und vollständig im Web gelesen: Serlo, „Primfaktorzerlegung“, https://de.serlo.org/mathe/1779/primfaktorzerlegung (Beispiele und Vorgehensweise).
- Quellen der App: Lernlandkarte Mathematik, KMK-Bildungsstandards (2022), Hessisches Kerncurriculum Mathematik Gymnasium und eigene Herleitungen und Aufgaben. Nachschlagen in anderen öffentlichen Seiten ist keine Quelle und steht nicht in der App; es werden keine Formulierungen, Aufgaben oder Bilder übernommen (Regeln des Mathe-Epics, Abschnitt 4). Die früher genannten Quellen S1 bis S7 in diesem Leitfaden sind Forschungsnotizen der ersten Fassung und stehen nicht mehr in `src/app.yaml` oder auf den Seiten.
- Standardübungen haben jetzt einen konkreten Lösungsweg mit den jeweiligen Zahlen und einer fachlichen Begründung; keine Sätze wie „Angaben einsetzen“ ohne Erklärung.
- Übungsmodelle schreiben niemals einen aus Markierungen berechneten Bruch in das Antwortfeld. Bei BruchModelle erscheint die symbolische Darstellung erst nach der Prüfung. Entdeckermodelle sind ausdrücklich freie Erkundung und dürfen Zusammenhänge anzeigen.

- Die interaktiven Modelle von Umformen, Grundaufgaben und Rechenarten stehen nach der Begriffsklärung unter „Ausprobieren“. Danach folgen die Herleitung am Beispiel und eigene Standardübungen unter „Üben“. Die stabilen Übungs-IDs bleiben erhalten.

- Tatsächliche Datenhaltung: zentrale Quellen in `src/app.yaml`, Zahlenlogik in `BruchAufgaben.ts` und `BruchModelle.ts`, Primfaktor-Datensätze in `src/data/primfaktoren.yaml`. Keine unbenutzten Data-Dateien anlegen. Die 20 Standardübungen liefern je sechs Varianten; zusammen mit den 20 Verständnisfragen und sechs Primfaktoraufgaben mindestens 146 Aufgabenstellungen, dazu Modellaufgaben.

- Browserkorrektur Erweitern: Kuchenbeispiel konsequent mit `KuchenTeilen` als Kreis mit drei ursprünglichen Stücken; alle Stücke gleichmäßig unterteilen. Zähler und Nenner wachsen bei unverändertem Flächenanteil. Keine Prozent-/Balkengrafik für diese Herleitung. Die freie Entdeckung zeigt 2/3 und die umgeschriebene Form; Aufgaben haben getrennte eigene Eingaben ohne Ergebnisvorschau.

- Browserkorrektur Umformen: unverbundene Markierreihe samt Unterteilungsregler entfernt. Aufgaben nutzen gegebenes Modell und direkte Bruch-Eingabe; konkrete Rückmeldung unterscheidet Wertänderung, ungültige Eingabe, noch mögliche Kürzung und falschen Erweiterungsfaktor. Regressionstest ergänzt.

- Konkrete Aufgabenwerte statt versteckter Erzeugungsrechnungen: gemeinsame Datensätze in `src/data/grundzahlen.yaml`. Kürzungsaufgaben zeigen z. B. 6/48 statt 6/(8 · 6); Gruppenmengen und Rundungszahlen sind ebenfalls bereits ausgerechnet. Rechenterme bleiben nur dort stehen, wo gerade das Berechnen solcher Terme geübt wird.

- Bruchteil-Einstieg aus Browserfeedback neu hergeleitet: `BruchteilEntdecken` führt 12 Plättchen erst in vier Gruppen, dann wählt das Kind drei Gruppen. Erst danach folgen Beispielrechnung und eigenständige Aufgaben mit anderer Menge. Der beliebige Gruppengrößenregler aus `AnteilGanzes` ist entfernt.

- Browserkorrektur Plus/Minus: Die lose Markierreihe bei Plus/Minus wird durch wiederholte, gleich breite Streifen unter dem Regler ersetzt. Die gewählte Unterteilung „Teile pro Ganzem“ liegt dort als gestricheltes Raster über beiden gegebenen Anteilen; darüber stehen die ursprünglichen Streifen zum Vergleich. Ursprüngliche Grenzen und Flächenanteile bleiben sichtbar; kein gemeinsamer Nenner und kein Ergebnis werden automatisch gewählt.

- Bruch-Eingabefelder zeigen bei gültiger Schreibweise mit / eine MathML-Vorschau „So schreibst du das“. Sie übernimmt den eigenen Zähler und Nenner unverändert, ohne Kürzung, Rechnung oder Korrektheitsanzeige. Für leere, unvollständige, ungültige und reine natürliche Zahleneingaben entfällt die Vorschau. Gemeinsame Hilfe `BruchEingabe` in Umformen, Grundaufgaben und Rechenarten.

- Multiplikationsmodell: Beide Faktoren sind als Randstreifen desselben Rechtecks dargestellt – z von n Spalten oben, b von d Zeilen links, jeweils beschriftet und zusätzlich zur Farbe markiert. Die Schnittmenge markiert das Kind selbst; keine vorausgefüllte Ergebnisfläche und kein berechneter Ergebnisbruch.

- Verbindliche Methodik nach Browserfeedback und simuliertem Kinder-Audit: Jede Darstellung erklärt das Ganze, ihre Teile/Zeichen, die Bedienhandlung und die Beobachtung. Gleichbleibende Farben und zusätzliche Muster verbinden die Faktoren beim Produkt mit Breite und Höhe; Zähler nennt nur eigene Markierungen, nicht die Musterlösung. Textbeschreibungen stehen im nojs-Block und bei Aufgaben zusätzlich im exakten describe-Vertrag; freie Modelle behalten nojs als aufklappbare Beschreibung.
- Abschnittstitel folgen der tatsächlichen Handlung: „Ausprobieren“ ausschließlich mit bedienbarer Interaktion, sonst „Anschaulich erklärt“. Einstiege bekommen inhaltliche Titel; überflüssige Definitionen werden nicht erzwungen. Stabile Anker-IDs bleiben bestehen.

- Theme-Regel aus Browserfeedback: Eigene Komponenten verwenden ausschließlich die vorhandenen Explainer-Variablen für Oberflächen, Text, Rahmen, Fokus und Bedienelement-Akzent (`--page-*`). Keine VitePress-Variablen oder weißen Fallback-Hintergründe. Fachliche Diagrammfarben bleiben mit jeweils eigenem kontrastreichem Textpaar und zusätzlicher Markierung verbunden. Hell- und Dunkelmodus prüfen.

- Faktorzerlegung: Knopfgruppen verwenden dieselben 0,5-rem-Abstände wie die Runtime und umbrechendes Flex-Layout. Die Runtime-Klasse `question-actions` bleibt ausschließlich deren Prüfsteuerung vorbehalten, weil sie dort auch Verhalten kennzeichnet. Neustart steht in einer eigenen Aktionszeile im normalen Absatzrhythmus; kein zusätzliches lokales Abstands-Theme.

- Die Bündelungs-/Rastermethodik wird bereits bei gemeinsamen Teilern und Vielfachen interaktiv eingeführt: `TeilerVielfacheEntdecken` bündelt 12 und 18 Plättchen für den ggT; ein zweiter Modus unterteilt gleich große Ganze mit 4/6 Teilen feiner, um das kgV zu finden. Plus/Minus ist ausdrücklich die Wiederaufnahme dieser bekannten Unterteilung und verlinkt zurück. Gröbere Gruppen und feinere Unterteilungen werden klar getrennt; nojs beschreibt beide mit Beispielen.

- Bruchstreifen zeigen ausgewählte Flächen gefüllt und dezent schraffiert, ohne Haken/Punkte als sichtbare Zellzeichen. Nicht ausgewählte Flächen bleiben leer; Fragezeichen für unbekannte Mengen bleiben fachlich sinnvoll. Screenreader-Beschriftungen und aria-pressed erhalten. Alle Eingabefelder der eigenen Komponenten sind in ihrem Label verschachtelt und werden mit vertikalem Abstand angeordnet; kein for-Attribut für diese implizite Zuordnung nötig.

- Multiplikation nutzt ausdrücklich zwei gleichberechtigte Vorstellungen: `KuchenMultiplizieren` zeigt interaktiv b/d von drei Vierteln, indem jedes ursprüngliche Viertel in d Stückchen zerlegt und b davon genommen werden; das Ergebnis bezieht sich auf den ganzen Kuchen. Daneben bleibt das Rechteck aus zwei Seitenlängen mit eigener Übungsaufgabe. Unterschiedliche Zahlen sind als eigene Aufgabe angekündigt. Beide Ideen besitzen getrennte Methoden-/nojs-Texte und eine gemeinsame Beispielrechnung.
- Flächenmuster sind Rauten und Punkte statt vertikaler/horizontaler Schraffur, damit sie nicht mit Teilgrenzen verwechselt werden. Die Beschriftungen erklären dieselbe Musterzuordnung.

- Kuchenmultiplikation startet mit dem zweiten Regler am Maximum (3 von 3). Auch eine Änderung der Unterteilung wählt zunächst alle neuen Stückchen aus. Damit ist zuerst die unveränderte Kuchenfläche sichtbar; erst die zweite Handlung verkleinert den Anteil.

- Dezimalrechnen ist in zwei Lernseiten geteilt: `dezimalrechnen` für Addition/Subtraktion, `dezimal-mal-geteilt` für Multiplikation/Division. Jede Rechenart hat eine eigene Herleitung, einen getrennten Beispielkasten mit Rechenschritten und eine variierte Übung mit sechs Datensätzen. Stellenwerttausch, Zehntelrechteck und gleichmäßige Skalierung der Division werden getrennt begründet. Daten in dezimalpaare/dezimalprodukte/dezimalquotienten. 21 Lernseiten, Kapitel Anwendungen nun fünf Seiten; der alte Plus/Minus-Pfad und die Übungs-ID aufgaben bleiben erhalten.

- Die abgenommene erste Fassung enthält keinen zusätzlichen Kapitel-Einstufungstest. Auf Wunsch des Nutzers ist der fertig durchgesehene Funktionsumfang für die Veröffentlichung abgeschlossen; die vorhandenen Übungen bleiben unmittelbar auf den Lernseiten.


## Stand nach Plan 02 und Plan 03 (2026-11)

- Name und Zuschnitt: `mathe-brueche-dezimal`, „Brüche und Dezimalzahlen“, Klassen 5 und 6, Format 2 mit `strand: mathematik/arithmetik`; jede Seite nennt ihren Baustein der Lernlandkarte (`competencies`), vier Seiten „Das brauchst du für dieses Kapitel“ (`recap`) für Voraussetzungen von außen (Kapitel Anteile, Teilbarkeit, Rechnen, Dezimalzahlen).
- Seiten: 28 (21 Lernseiten der ersten Fassung, davon neu geschnitten oder ergänzt, dazu neu `anwendungen/prozent`, `anwendungen/periode`, `teilbarkeit/primfaktoren` und die vier Recaps). Alle zehn Bausteine des Issues lernapps/apps#389 sind mit mindestens drei Aufgaben steigender Schwierigkeit geübt.
- Schreibweisen (Regeln Abschnitt 2): Dezimalkomma, Minus `−`, `·` und `:`, Brüche gesetzt (`$\frac{3}{4}$`, nie `3/4`; Eingaben dürfen `3/4`), geschützte Leerzeichen vor Einheit und `%`, „Zahlenstrahl“ (nicht „Zahlengerade“). Ein Test (`src/components/Schreibweisen.test.ts`) prüft das über alle Seiten; Überschriften behalten ein gewöhnliches Leerzeichen, weil der No-JS-Test des Werkzeugs sonst scheitert. Rückmeldungen der Komponenten sind Klartext (Laufzeit): dort stehen Brüche als `a/b`.
- Darstellungen: Rechteckmodell und Zahlenstrahl aus der ersten Fassung; Hunderterfeld über den eingebauten Block `draw: hundred-grid`; Stellenwerttafel nach rechts mit Spaltenköpfen aus Kürzel und Name (E Einer, z Zehntel, h Hundertstel, t Tausendstel), markierter Kommaspalte und „Bündeln“ (Komponente `StellenwertBuendeln`); Faktorbaum als eigene SVG-Bilder in `src/images`.
- Muster für neue Seiten: `anwendungen/prozent` (Abschnitte `regel`, `entdecken`, `beispiel`, `ueben`; Einstieg aus dem Alltag, eingebaute Figur, Beispielkasten, Übungen steigend: Eingabe aus der Seite lösbar, Auswahl, Erweitern, Umwandeln, Kürzen, Zuordnen; `mistakes` je typischem Fehler; Daten in `src/data`). Eingabefelder mit Prozent nutzen `compare: { number: { format: percent } }`.
- Komponenten: `BruchZahl` (gesetzter Bruch in HTML, kein MathML), `RichText` (Text mit `3/4` wird gesetzt), `BruchTippen` (Bruch-Antworten, akzeptiert gemischte Zahlen, verlangt gekürzte Brüche), `BruchAufgaben` (Eingabeaufgaben mit Modell), `StellenwertBuendeln`, `FaktorEntdecken` (mit Potenzen). Eine Komponente setzt keinen `<math>` (Regel des No-JS-Tests).
- Grenzen der Laufzeit, die wir nicht ändern können: Brüche in Komponenten-Rückmeldungen und in `generated`-`mistakes` bleiben Klartext; `\overline` fehlt in der Formelliste (der Periodenstrich ist das kombinierende Überstreichen U+0305 hinter jeder Periodenziffer); Datenfelder werden in `$…$` nicht gesetzt (Potenzen in `generated`-Aufgaben stehen als Hochzahlen).
- Nicht in dieser App: Grundwert, Prozentwert, Prozentsatz (lernapps/apps#391), negative Zahlen (#768), Potenzen als eigener Baustein (#386), Wurzeln (#392).

## Recap-Seiten (nach regeln.md Abschnitt 7)

- Vier Recap-Seiten (`anteile/recap`, `teilbarkeit/recap`, `anwendungen/recap`, `rechnen/recap`), je Voraussetzung von außen ein Abschnitt in der Wortwahl der Karte: fette Fachbegriffe als `definition` (ein Begriff einmal im ganzen Explainer, sie stehen im Glossar), ein Beispielkasten, „Kannst du das?“ mit ein bis zwei Aufgaben und Lösungskasten (mit dem häufigsten Fehler), Kartenlink, Schluss „Du bist bereit, wenn du …“.
- Der Seitentyp `recap` erlaubt keine Aufgabenblöcke (Build: „descriptive blocks only“): der Selbsttest ist Aufgabe plus Lösungskasten ohne sofortige Rückmeldung. Das vom Werkzeug erzeugte Kopffeld zeigt die Karten-ID als Text.
- Begriffe nur dort als `definition`: Ziffer, Stellenwert (`anteile/recap`); Summand, Vorrangregel, Vertauschungs-, Verbindungs-, Distributivgesetz, Potenz, Basis, Exponent, Zehnerpotenz (`teilbarkeit/recap`); Übertrag, Rest (`anwendungen/recap`). `rechnen/recap` erinnert nur kurz und verweist auf den Recap im Kapitel Teilbarkeit.

## Korrekturen aus dem Feedback #5 (Plan 05)

- Kreisstücke (`BruchModelle`): kein Fokusrahmen des Browsers; der Tastaturfokus ist ein dicker Rand entlang des Stücks, über die Nachbarn gezeichnet.
- `KuchenMultiplizieren`: Stückchen deiner Viertel, die du weglegst, sind hellrot mit Punkten (in hell und dunkel gleich), genommene grün; Legende unter den Kuchen.
- Rechteck (`BruchRechnen`, Mal): die Beschriftung der Höhe steht waagerecht links neben dem Rechteck, nie gedreht (ein gedrehter Bruch zerfällt).
- `AnteilGanzes`, Art `ratio`: Plättchen in Reihen der Länge Ganzes : Nenner; der Teil füllt ganze Reihen, so wird das Kürzen sichtbar. Hilfetext nur „Kürze, wenn möglich.“
- Übungen statt Leerlauf: `anteile/zahlenstrahl` `aufgaben` fragt den Nenner zu „s Teilstriche zwischen 0 und 1“ (Daten `teilstriche`, Fehler: Striche gezählt, 0 und 1 mitgezählt); `umformen/vergleichen` `aufgaben` vergleicht Brüche mit verschiedenen Nennern, Antwort <, = oder > (Daten `vergleichspaare`); `teilbarkeit/regeln` `ziffer-ergaenzen-4-6` ergänzt die letzte Ziffer für 4 und 6 (Daten `ziffernergaenzen46` mit Tipp, Fehlermeldungen und Schritten je Datensatz). Zahlenfelder nehmen keine Brüche an: nach Nenner oder Zähler fragen.
