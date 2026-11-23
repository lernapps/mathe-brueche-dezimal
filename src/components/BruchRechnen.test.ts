import { expect, test } from "vite-plus/test";
import { generate, check, solution, wrong, reason } from "./BruchRechnen.ts";
test("exact properties and alternate answers across all supported tasks", () => {
  for (const kind of ["add", "subtract", "multiply", "divide", "divide2"])
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, { kind, task: "Aufgabe", mistakes: [] });
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "1/0")).toBe(false);
      if (!["expand", "reduce", "compare"].includes(kind)) expect(check(t, `${t.rz * 2}/${t.rn * 2}`)).toBe(true);
    }
});
test("subtraction uses unlike denominators and never goes below zero", () => {
  for (let seed = 1; seed <= 12; seed++) {
    const t = generate(seed, { kind: "subtract", task: "", mistakes: [] });
    expect(t.n).not.toBe(t.d);
    expect(t.rz).toBeGreaterThan(0);
  }
});
test("a mixed number is read like the improper fraction", () => {
  const t = generate(1, { kind: "add", task: "", mistakes: [] });
  expect(t.rz / t.rn).toBeGreaterThan(0);
  expect(check({ ...t, rz: 13, rn: 12 }, "1 1/12")).toBe(true);
  expect(check({ ...t, rz: 13, rn: 12 }, "13/12")).toBe(true);
  expect(check({ ...t, rz: 13, rn: 12 }, "1 13/12")).toBe(false);
});
test("typical slips get their own message", () => {
  const messages = ["generisch", "ungültig", "erste", "zweite"];
  const add = generate(1, { kind: "add", task: "", mistakes: messages });
  expect(reason(add, `${add.z + add.b}/${add.n + add.d}`, { kind: "add", task: "", mistakes: messages })).toBe("erste");
  const div = generate(1, { kind: "divide2", task: "", mistakes: messages });
  expect(div.rz).toBe(2);
  // the divisor and the dividend swapped: 3/8 : 3/4 = 1/2
  expect(reason(div, "1/2", { kind: "divide2", task: "", mistakes: messages })).toBe("zweite");
  expect(reason(div, "", { kind: "divide2", task: "", mistakes: messages })).toBe("ungültig");
});
