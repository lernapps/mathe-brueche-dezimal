import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import { equal } from "./BruchMath.ts";
import Tippen from "./BruchTippen.vue";
import {
  KINDS,
  about,
  check,
  describe,
  generate,
  mistakes,
  parseAnswer,
  params,
  reason,
  show,
  solution,
  template,
  wrong,
} from "./BruchTippen.ts";

const messages = ["generisch", "ungültig", "nicht gekürzt {rz}", "A", "B", "C"];
const props = (kind: string) => ({ kind, task: "Rechne {z}/{n}.", mistakes: messages });
// The value of each kind computed independently with plain fractions.
const expected = (kind: string, z: number, n: number, b: number, d: number, k: number): [number, number] => {
  switch (kind) {
    case "add-ungleich":
    case "add-gemischt":
      return [z * d + b * n, n * d];
    case "sub-ungleich":
      return [z * d - b * n, n * d];
    case "mal-natuerlich":
      return [z * k, n];
    case "mal-kuerzen":
      return [z * b, n * d];
    case "geteilt-natuerlich":
      return [z, n * k];
    case "term-punkt":
      return [z * d + b * k * n, n * d];
    case "term-klammer":
      return [(z * d + b * n) * k, n * d];
    case "gleichung-summand":
      return [z * d - b * n, n * d];
    default:
      return [z * d, n * b];
  }
};

test("every kind: solution passes, slips and unreduced answers fail with their own message", () => {
  for (const kind of KINDS)
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, props(kind));
      const [ez, en] = expected(kind, t.z, t.n, t.b, t.d, t.k);
      expect(equal({ z: t.rz, n: t.rn }, { z: ez, n: en })).toBe(true);
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "1/0")).toBe(false);
      expect(check(t, "")).toBe(false);
      expect(reason(t, "", props(kind))).toBe("ungültig");
      const list = mistakes(t);
      expect(list.length).toBe(about.mistakes.length);
      list.forEach((answer, i) => {
        if (answer === undefined) return;
        expect(check(t, answer), `${kind} seed ${seed} mistake ${i}: ${answer}`).toBe(false);
        expect(reason(t, answer, props(kind)), `${kind} seed ${seed} mistake ${i}`).not.toBe("generisch");
      });
      expect(params(t)).toEqual({ z: t.z, n: t.n, b: t.b, d: t.d, k: t.k });
      expect(template(props(kind))).toContain("{z}");
      expect(show("1 1/12")).toContain("frac");
    }
});

test("unlike denominators: the product is right in value but not smallest", () => {
  const t = generate(3, props("add-ungleich"));
  expect(`${t.z}/${t.n}+${t.b}/${t.d}`).toBe("1/4+1/6");
  expect(solution(t)).toBe("5/12");
  expect(check(t, "10/24")).toBe(false);
  expect(reason(t, "10/24", props("add-ungleich"))).toContain("nicht gekürzt 5");
  expect(reason(t, "2/10", props("add-ungleich"))).toBe("A");
  expect(reason(t, "2/12", props("add-ungleich"))).toBe("B");
});

test("mixed numbers and improper fractions are both read", () => {
  const t = generate(3, props("add-gemischt"));
  expect(solution(t)).toBe("1 7/12");
  expect(check(t, "1 7/12")).toBe(true);
  expect(check(t, "19/12")).toBe(true);
  expect(check(t, "1 19/12")).toBe(false);
  expect(check(t, "38/24")).toBe(false);
  expect(parseAnswer("2 0/3")).toBeUndefined();
  expect(parseAnswer("1,5")).toBeUndefined();
});

test("division: dividend and divisor swapped is told", () => {
  const t = generate(1, props("geteilt-bruch"));
  expect(solution(t)).toBe("2");
  expect(reason(t, "1/2", props("geteilt-bruch"))).toBe("B");
  const n = generate(1, props("geteilt-natuerlich"));
  expect(solution(n)).toBe("3/8");
  expect(reason(n, "8/3", props("geteilt-natuerlich"))).toBe("B");
  expect(reason(n, "3/2", props("geteilt-natuerlich"))).toBe("A");
});

test("description names task and solution without MathML sources", () => {
  const d = describe(generate(1, props("mal-kuerzen")), props("mal-kuerzen"));
  expect(d.task).toContain("\\frac");
  expect(d.solution).toContain("Ergebnis");
});

test("renders the task with set fractions, an input, and no solution before checking", async () => {
  const html = await renderToString(
    createSSRApp(Tippen, {
      ...props("add-ungleich"),
      seed: 1,
      checked: false,
      inputLabel: "Dein Ergebnis",
      ownLabel: "So schreibst du das",
    }),
  );
  expect(html).toContain("Dein Ergebnis");
  expect(html).toContain("<input");
  expect(html).not.toContain("<math");
  expect(html).not.toContain("5/6");
});
