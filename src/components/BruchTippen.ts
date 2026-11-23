// Logic of BruchTippen: a typed fraction task without a model. The learner types the result as a fraction, a whole
// number or a mixed number ("1 1/12"); the result must be fully reduced. All arithmetic is exact (integers only).
import { equal, fill, gcd, reduce, tex, type Fraction } from "./BruchMath.ts";

export interface Props {
  kind: string;
  /** The task with {z}, {n}, {b}, {d} and {k}. */
  task: string;
  /** 0 generic, 1 invalid input, 2 right value but not reduced, 3 and on: the slips of the kind in their order. */
  mistakes: string[];
}

export interface Task {
  kind: string;
  z: number;
  n: number;
  b: number;
  d: number;
  k: number;
  /** The reduced result. */
  rz: number;
  rn: number;
}

export type Answer = string;

export const KINDS = [
  "add-ungleich",
  "sub-ungleich",
  "add-gemischt",
  "mal-natuerlich",
  "mal-kuerzen",
  "geteilt-natuerlich",
  "geteilt-bruch",
  "term-punkt",
  "term-klammer",
  "gleichung-summand",
  "gleichung-faktor",
] as const;

/** The cases of each kind as [z, n, b, d] (or [z, n, k]); every case is checked by the tests of this module. */
const CASES: Record<string, number[][]> = {
  "add-ungleich": [
    [1, 2, 1, 3],
    [1, 3, 1, 4],
    [1, 4, 1, 6],
    [1, 2, 1, 5],
    [2, 3, 1, 6],
    [3, 8, 1, 4],
    [1, 6, 1, 4],
    [1, 2, 1, 6],
  ],
  "sub-ungleich": [
    [3, 4, 1, 2],
    [5, 6, 1, 3],
    [2, 3, 1, 4],
    [3, 4, 1, 6],
    [5, 6, 1, 4],
    [7, 10, 1, 2],
    [3, 4, 1, 3],
    [5, 6, 3, 8],
  ],
  "add-gemischt": [
    [3, 4, 1, 2],
    [2, 3, 3, 4],
    [3, 4, 5, 6],
    [5, 6, 2, 3],
    [3, 5, 7, 10],
    [5, 8, 3, 4],
    [4, 5, 1, 2],
    [7, 8, 1, 2],
  ],
  "mal-natuerlich": [
    [3, 8, 4],
    [2, 5, 3],
    [5, 6, 3],
    [3, 4, 2],
    [7, 10, 5],
    [2, 9, 3],
    [5, 12, 4],
    [4, 15, 5],
  ],
  "mal-kuerzen": [
    [4, 9, 3, 8],
    [3, 10, 5, 6],
    [6, 7, 14, 15],
    [2, 3, 9, 10],
    [5, 8, 4, 15],
    [9, 14, 7, 12],
    [8, 15, 5, 12],
    [3, 4, 8, 9],
  ],
  "geteilt-natuerlich": [
    [3, 4, 2],
    [2, 3, 4],
    [5, 6, 3],
    [3, 5, 6],
    [4, 5, 2],
    [6, 7, 3],
    [3, 8, 2],
    [9, 10, 3],
  ],
  "term-punkt": [
    [1, 2, 1, 3, 2],
    [1, 4, 1, 2, 3],
    [2, 3, 1, 4, 2],
    [1, 2, 2, 3, 3],
    [3, 4, 1, 6, 2],
    [1, 3, 3, 4, 2],
    [1, 5, 1, 2, 4],
    [5, 6, 1, 3, 2],
  ],
  "term-klammer": [
    [1, 2, 1, 3, 3],
    [1, 2, 1, 4, 4],
    [2, 3, 1, 6, 6],
    [1, 4, 1, 6, 12],
    [3, 4, 1, 2, 2],
    [1, 3, 1, 5, 15],
    [1, 2, 1, 3, 6],
    [2, 5, 1, 2, 10],
  ],
  "gleichung-summand": [
    [3, 4, 1, 4],
    [3, 4, 1, 2],
    [5, 6, 1, 3],
    [7, 8, 1, 4],
    [2, 3, 1, 6],
    [4, 5, 1, 2],
    [5, 6, 1, 4],
    [7, 10, 2, 5],
  ],
  "gleichung-faktor": [
    [3, 4, 3, 8],
    [1, 2, 1, 4],
    [2, 3, 1, 6],
    [3, 4, 1, 2],
    [5, 6, 5, 12],
    [2, 5, 1, 10],
    [3, 5, 3, 10],
    [3, 4, 1, 3],
  ],
  "geteilt-bruch": [
    [3, 4, 3, 8],
    [2, 3, 1, 6],
    [5, 6, 5, 12],
    [3, 4, 3, 16],
    [2, 3, 4, 9],
    [3, 4, 1, 2],
    [4, 5, 2, 3],
    [3, 5, 3, 10],
  ],
};

const lcm = (a: number, b: number) => (a / gcd(a, b)) * b;

/** The exact result of a case, not reduced yet. */
function result(kind: string, z: number, n: number, b: number, d: number, k: number): Fraction {
  switch (kind) {
    case "add-ungleich":
    case "add-gemischt":
      return { z: z * d + b * n, n: n * d };
    case "sub-ungleich":
      return { z: z * d - b * n, n: n * d };
    case "mal-natuerlich":
      return { z: z * k, n };
    case "mal-kuerzen":
      return { z: z * b, n: n * d };
    case "geteilt-natuerlich":
      return { z, n: n * k };
    case "term-punkt":
      return { z: z * d + b * k * n, n: n * d };
    case "term-klammer":
      return { z: (z * d + b * n) * k, n: n * d };
    case "gleichung-summand":
      return { z: z * d - b * n, n: n * d };
    default:
      return { z: z * d, n: n * b };
  }
}

export function generate(seed: number, p: Props): Task {
  const cases = CASES[p.kind] ?? CASES["add-ungleich"] ?? [];
  const c = cases[(seed - 1) % cases.length] ?? [1, 2, 1, 3];
  const natural = p.kind === "mal-natuerlich" || p.kind === "geteilt-natuerlich";
  const [z = 1, n = 2] = c;
  const b = natural ? 0 : (c[2] ?? 1);
  const d = natural ? 0 : (c[3] ?? 1);
  const k = natural ? (c[2] ?? 2) : (c[4] ?? 0);
  const raw = result(p.kind, z, n, b, d, k);
  const r = reduce(raw.z, raw.n);
  return { kind: p.kind, z, n, b, d, k, rz: r.z, rn: r.n };
}

/** An answer as an improper fraction: "5/6", "7", or the mixed number "1 1/12". */
export function parseAnswer(text: string): Fraction | undefined {
  const mixed = /^\s*(\d+)\s+(\d+)\s*\/\s*(\d+)\s*$/.exec(text);
  if (mixed) {
    const [whole, z, n] = [Number(mixed[1]), Number(mixed[2]), Number(mixed[3])];
    if (n === 0 || z === 0 || z >= n) return undefined;
    return { z: whole * n + z, n };
  }
  const simple = /^\s*(\d+)(?:\s*\/\s*(\d+))?\s*$/.exec(text);
  if (!simple) return undefined;
  const z = Number(simple[1]);
  const n = Number(simple[2] ?? 1);
  return n > 0 && z <= 100000 && n <= 100000 ? { z, n } : undefined;
}

const reduced = (q: Fraction) => gcd(q.z, q.n) === 1;

export function check(t: Task, a: unknown): boolean {
  if (typeof a !== "string") return false;
  const q = parseAnswer(a);
  return q !== undefined && equal(q, { z: t.rz, n: t.rn }) && reduced(q);
}

/** The result as a learner may write it: whole number, proper fraction or mixed number. */
export function solution(t: Task): string {
  if (t.rn === 1) return String(t.rz);
  if (t.rz < t.rn) return `${t.rz}/${t.rn}`;
  return `${Math.floor(t.rz / t.rn)} ${t.rz % t.rn}/${t.rn}`;
}

const text = (q: Fraction) => `${q.z}/${q.n}`;

/** The common slips of a kind, in the order of the messages 3 and on; undefined where a slip makes no sense. */
function slips(t: Task): [Fraction | undefined, Fraction | undefined, Fraction | undefined] {
  const common = lcm(t.n, t.d || 1);
  switch (t.kind) {
    case "add-ungleich":
    case "add-gemischt":
      return [{ z: t.z + t.b, n: t.n + t.d }, { z: t.z + t.b, n: common }, undefined];
    case "sub-ungleich":
      return [
        t.z >= t.b && t.n !== t.d ? { z: t.z - t.b, n: Math.abs(t.n - t.d) } : undefined,
        { z: t.z - t.b, n: common },
        undefined,
      ];
    case "mal-natuerlich":
      return [{ z: t.z * t.k, n: t.n * t.k }, { z: t.z + t.k, n: t.n }, undefined];
    case "mal-kuerzen":
      return [{ z: t.z * t.b, n: t.n + t.d }, { z: t.z * t.d, n: t.n * t.b }, undefined];
    case "geteilt-natuerlich":
      return [{ z: t.z * t.k, n: t.n }, { z: t.k * t.n, n: t.z }, undefined];
    case "term-punkt":
      // from left to right: (z/n + b/d) · k
      return [{ z: (t.z * t.d + t.b * t.n) * t.k, n: t.n * t.d }, undefined, undefined];
    case "term-klammer":
      // the bracket ignored; only the first summand times k
      return [
        { z: t.z * t.d + t.b * t.k * t.n, n: t.n * t.d },
        { z: t.z * t.k * t.d + t.b * t.n, n: t.n * t.d },
        undefined,
      ];
    case "gleichung-summand":
      return [
        { z: t.z * t.d + t.b * t.n, n: t.n * t.d },
        t.n !== t.d && t.z >= t.b ? { z: t.z - t.b, n: Math.abs(t.n - t.d) } : undefined,
        undefined,
      ];
    case "gleichung-faktor":
      return [{ z: t.z * t.b, n: t.n * t.d }, { z: t.b * t.n, n: t.d * t.z }, undefined];
    default:
      return [
        { z: t.z * t.b, n: t.n * t.d },
        { z: t.b * t.n, n: t.d * t.z },
        { z: t.n * t.d, n: t.z * t.b },
      ];
  }
}

/** The answer that is right in value but not reduced: the denominator is a multiple of the smallest one. */
function unreduced(t: Task): Fraction {
  const common = lcm(t.n, t.d || 1);
  const f = Math.max(2, (t.n * (t.d || 1)) / common);
  return { z: t.rz * f, n: t.rn * f };
}

export const wrong = (t: Task): string => text(slips(t)[0] ?? slips(t)[1] ?? { z: t.rz + 1, n: t.rn });

/** The fixed answers of about.mistakes in order: the unreduced one, then the slips of the kind. */
export function mistakes(t: Task): (string | undefined)[] {
  return ["", text(unreduced(t)), ...slips(t).map((q) => (q && q.n > 0 ? text(q) : undefined))];
}

export function params(t: Task): Record<string, number> {
  return { z: t.z, n: t.n, b: t.b, d: t.d, k: t.k };
}

export const template = (p: Props): string => p.task;

export const show = (answer: unknown): string => (String(answer).trim() === "" ? "Keine Eingabe" : tex(String(answer)));

/** The values a message may use: the task, its smallest common denominator and the result. */
function values(t: Task): Record<string, number | string> {
  const common = lcm(t.n, t.d || 1);
  return {
    ...params(t),
    l: common,
    p: t.n * (t.d || 1),
    ez: t.z * (common / t.n),
    eb: t.d ? t.b * (common / t.d) : 0,
    rz: t.rz,
    rn: t.rn,
    r: solution(t),
  };
}

export function reason(t: Task, a: unknown, p: Props): string {
  let index = 0;
  const q = typeof a === "string" ? parseAnswer(a) : undefined;
  if (q === undefined) index = 1;
  else if (equal(q, { z: t.rz, n: t.rn }) && !reduced(q)) index = 2;
  else {
    const found = slips(t).findIndex((s) => s !== undefined && s.n > 0 && equal(q, s));
    if (found >= 0) index = 3 + found;
  }
  return fill(p.mistakes[index] ?? p.mistakes[0] ?? "", values(t));
}

export function describe(t: Task, p: Props): { task: string; solution: string } {
  const v = values(t);
  const l = Number(v["l"]);
  const steps: Record<string, string> = {
    "add-ungleich": `Der kleinste gemeinsame Nenner ist das kgV von ${t.n} und ${t.d}, also ${l}. ${t.z}/${t.n} = ${v["ez"]}/${l} und ${t.b}/${t.d} = ${v["eb"]}/${l}. Zähler addieren: ${Number(v["ez"]) + Number(v["eb"])}/${l}. Gekürzt: ${solution(t)}.`,
    "sub-ungleich": `Der kleinste gemeinsame Nenner ist das kgV von ${t.n} und ${t.d}, also ${l}. ${t.z}/${t.n} = ${v["ez"]}/${l} und ${t.b}/${t.d} = ${v["eb"]}/${l}. Zähler subtrahieren: ${Number(v["ez"]) - Number(v["eb"])}/${l}. Gekürzt: ${solution(t)}.`,
    "add-gemischt": `Der kleinste gemeinsame Nenner ist das kgV von ${t.n} und ${t.d}, also ${l}. ${v["ez"]}/${l} + ${v["eb"]}/${l} = ${Number(v["ez"]) + Number(v["eb"])}/${l}. Das ist mehr als ein Ganzes. Gekürzt und als gemischte Zahl: ${solution(t)}.`,
    "mal-natuerlich": `${t.k} · ${t.z}/${t.n} bedeutet ${t.k} Mal ${t.z}/${t.n}. Nur der Zähler wird mit ${t.k} multipliziert: ${t.z * t.k}/${t.n}. Gekürzt: ${solution(t)}.`,
    "mal-kuerzen": `Kürze vor dem Multiplizieren über Kreuz, dann Zähler mal Zähler und Nenner mal Nenner. Ergebnis: ${solution(t)}.`,
    "geteilt-natuerlich": `Durch ${t.k} teilen heißt mit 1/${t.k} multiplizieren. Der Nenner wird mit ${t.k} multipliziert: ${t.z}/${t.n * t.k}. Gekürzt: ${solution(t)}.`,
    "term-punkt": `Punktrechnung vor Strichrechnung: ${t.b}/${t.d} · ${t.k} = ${t.b * t.k}/${t.d}. Dann addieren: ${t.z}/${t.n} + ${t.b * t.k}/${t.d}, gemeinsamer Nenner ${l}. Ergebnis gekürzt: ${solution(t)}.`,
    "term-klammer": `Die Klammer zuerst: ${t.z}/${t.n} + ${t.b}/${t.d} = ${Number(v["ez"]) + Number(v["eb"])}/${l}. Dann mal ${t.k}. Ergebnis gekürzt: ${solution(t)}.`,
    "gleichung-summand": `Umkehrrechnung: Ein fehlender Summand ist die Differenz. x = ${t.z}/${t.n} − ${t.b}/${t.d} = ${Number(v["ez"]) - Number(v["eb"])}/${l}. Gekürzt: ${solution(t)}. Probe: ${solution(t)} + ${t.b}/${t.d} ergibt ${t.z}/${t.n}.`,
    "gleichung-faktor": `Umkehrrechnung: Ein fehlender Faktor ist der Quotient. x = ${t.z}/${t.n} : ${t.b}/${t.d} = ${t.z}/${t.n} · ${t.d}/${t.b} = ${t.z * t.d}/${t.n * t.b}. Gekürzt: ${solution(t)}.`,
    "geteilt-bruch": `Der Divisor ${t.b}/${t.d} hat den Kehrbruch ${t.d}/${t.b}. ${t.z}/${t.n} · ${t.d}/${t.b} = ${t.z * t.d}/${t.n * t.b}. Gekürzt: ${solution(t)}.`,
  };
  return {
    task: tex(fill(p.task, params(t))),
    solution: tex(steps[t.kind] ?? solution(t)),
  };
}

export const about = {
  task: "Brüche addieren, subtrahieren, multiplizieren oder dividieren; die Aufgabe nennt die Rechnung und verlangt das vollständig gekürzte Ergebnis.",
  answer:
    "Ergebnis als Bruch (zum Beispiel 5/6), als ganze Zahl oder als gemischte Zahl (zum Beispiel 1 1/12) eintippen; danach Prüfen drücken.",
  correct: "Der Wert stimmt und der Bruch ist vollständig gekürzt; gemischte Zahl und unechter Bruch gelten gleich.",
  mistakes: [
    "Keine oder ungültige Eingabe.",
    "Ergebnis stimmt im Wert, ist aber nicht vollständig gekürzt.",
    "Erster typischer Fehler der Aufgabenart: bei Plus und Minus Zähler und Nenner einzeln gerechnet, bei Mal Nenner addiert oder Nenner mitmultipliziert, bei Geteilt mit dem Teiler multipliziert oder den Kehrbruch weggelassen.",
    "Zweiter typischer Fehler: bei Plus und Minus den Zähler nicht mit erweitert, bei Mal Kehrbruch benutzt, bei Geteilt Dividend und Divisor vertauscht.",
    "Dritter typischer Fehler: bei Geteilt durch einen Bruch beide Brüche umgekehrt.",
  ],
};
