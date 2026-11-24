import { expect, test } from "vite-plus/test";
import { parse } from "yaml";

// Regeln für Mathe-Explainer, Abschnitt 2: Schreibweisen in allen Texten, Aufgaben und Rückmeldungen.
// Nicht geprüft werden Ausdrücke, Antworten, Vorgaben und Komponenten-Eigenschaften (props): Eingabefelder dürfen 3/4 lesen.
const SKIP = new Set([
  "value",
  "answer",
  "given",
  "where",
  "compare",
  "id",
  "component",
  "type",
  "image",
  "url",
  "props",
  "examples",
  "title",
  "scope",
  "formula",
]);
const CHECKS: [string, RegExp][] = [
  ["Bruch als a/b statt gesetzt ($\\frac{a}{b}$)", /\d\/\d|\d\/\{\{|\}\}\/\d|\}\}\/\{\{/],
  ["Minus als kurzer Bindestrich statt −", /[\da-z)] - [\d(a-z]/],
  ["Zahlengerade statt Zahlenstrahl", /Zahlengerade/],
  ["Dezimalpunkt statt Komma", /(?<![\d.])\d+\.\d+(?![\d.])/],
  ["Stern oder Schrägstrich als Malzeichen", /\d [*/] \d/],
  ["Zahl mit fünf Stellen ohne schmales Leerzeichen", /(?<![\d,.])\d{5,}(?![\d,])/],
  [
    "Zahl und Einheit mit gewöhnlichem Leerzeichen statt geschütztem",
    /[\d}] (?:cm|mm|km|kg|ml|cl|m|g|l|€|%|Liter|Litern|Euro|Zentiliter|Zentilitern)(?![\wäöüß])/,
  ],
  ["Zahl und Einheit ohne geschütztes Leerzeichen", /\d(?:cm|mm|km|kg|ml|cl|€|%)(?![\wäöü])/],
];
const strings = (value: unknown, out: string[] = []): string[] => {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const item of value) strings(item, out);
  else if (value && typeof value === "object")
    for (const [key, item] of Object.entries(value)) if (!SKIP.has(key)) strings(item, out);
  return out;
};
const withoutFormulas = (text: string) => text.replace(/\$[^$]*\$/g, "");
const all = import.meta.glob<string>("../*/*.yaml", { query: "?raw", import: "default", eager: true });
const sources = Object.fromEntries(
  Object.entries(all).filter(([path]) => !path.startsWith("../components/") && !path.startsWith("../data/")),
);
const files = Object.keys(sources);

test("every page is covered", () => {
  expect(files.length).toBeGreaterThan(20);
});
for (const file of files) {
  test(`Schreibweisen in ${file}`, () => {
    const found: string[] = [];
    for (const text of strings(parse(sources[file] ?? "")))
      for (const [rule, pattern] of CHECKS) {
        const hit = pattern.exec(withoutFormulas(text));
        if (hit) found.push(`${rule}: …${text.slice(Math.max(0, hit.index - 20), hit.index + 30)}…`);
      }
    expect(found).toEqual([]);
  });
}
