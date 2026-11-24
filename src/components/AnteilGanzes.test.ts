import { expect, test } from "vite-plus/test";
import { generate, check, solution, wrong } from "./AnteilGanzes.ts";
test("exact properties and alternate answers across all supported tasks", () => {
  for (const kind of ["part", "whole", "ratio"])
    for (let seed = 1; seed <= 50; seed++) {
      const t = generate(seed, { kind, task: "Aufgabe", mistakes: [] });
      expect(check(t, solution(t))).toBe(true);
      expect(check(t, wrong(t))).toBe(false);
      expect(check(t, "1/0")).toBe(false);
      if (!["expand", "reduce", "compare", "ratio"].includes(kind))
        expect(check(t, `${t.rz * 2}/${t.rn * 2}`)).toBe(true);
      // the task asks for a fully reduced share: an unreduced one is right in value, but not accepted
      if (kind === "ratio" && t.rz > 0) expect(check(t, `${t.rz * 2}/${t.rn * 2}`)).toBe(false);
    }
});
