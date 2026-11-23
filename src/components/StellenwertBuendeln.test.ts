import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./StellenwertBuendeln.vue";
import { bundle, canBundle, clamp, format, thousandths } from "./StellenwertBuendeln.ts";

const props = {
  e: 0,
  z: 0,
  h: 13,
  t: 0,
  einer: "E Einer",
  zehntel: "z Zehntel",
  hundertstel: "h Hundertstel",
  tausendstel: "t Tausendstel",
  komma: "Komma",
  bundleText: "Bündeln",
  becomesText: "werden",
  resetText: "Neu anfangen",
  numberText: "Die Zahl ist",
};

test("ten Hundertstel become one Zehntel and the number stays the same", () => {
  const start = { e: 0, z: 0, h: 13, t: 0 };
  expect(canBundle(start, "h")).toBe(true);
  const next = bundle(start, "h");
  expect(next).toEqual({ e: 0, z: 1, h: 3, t: 0 });
  expect(thousandths(next)).toBe(thousandths(start));
  expect(format(thousandths(start))).toBe("0,13");
  expect(format(thousandths(next))).toBe("0,13");
});

test("bundling every place keeps the value", () => {
  const start = { e: 0, z: 12, h: 11, t: 25 };
  const a = bundle(start, "t");
  expect(a).toEqual({ e: 0, z: 12, h: 12, t: 15 });
  const b = bundle(bundle(a, "h"), "z");
  expect(b).toEqual({ e: 1, z: 3, h: 2, t: 15 });
  for (const s of [a, b]) expect(thousandths(s)).toBe(thousandths(start));
});

test("fewer than ten tokens cannot be bundled and the state is unchanged", () => {
  const s = { e: 1, z: 9, h: 9, t: 9 };
  for (const col of ["z", "h", "t"] as const) {
    expect(canBundle(s, col)).toBe(false);
    expect(bundle(s, col)).toEqual(s);
  }
});

test("numbers are written with a comma and without trailing zeros", () => {
  expect(format(500)).toBe("0,5");
  expect(format(1250)).toBe("1,25");
  expect(format(2008)).toBe("2,008");
  expect(format(3000)).toBe("3");
  expect(format(0)).toBe("0");
});

test("a start state is kept inside the board", () => {
  expect(clamp({ e: -3, z: 100, h: 2.9, t: Number.NaN })).toEqual({ e: 0, z: 29, h: 2, t: 0 });
});

test("renders every place with its name, the comma column and the number, without browser globals", async () => {
  const html = await renderToString(createSSRApp(Component, props));
  for (const text of ["Einer", "Zehntel", "Hundertstel", "Tausendstel", "Komma", "0,13", "Bündeln: 10 h werden 1 z"])
    expect(html).toContain(text);
  expect(html).not.toContain("<math");
  expect(html).not.toMatch(/\d\/\d/);
});
