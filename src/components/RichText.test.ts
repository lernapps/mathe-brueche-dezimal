import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./RichText.vue";
import { splitFractions } from "./BruchMath.ts";
test("fractions inside a sentence are typeset, other text stays", async () => {
  const html = await renderToString(createSSRApp(Component, { text: "Markiere 3/4. Alle Teile sind gleich groß." }));
  expect(html).toContain("Markiere ");
  expect(html).toContain("<mfrac>");
  expect(html).toContain(". Alle Teile sind gleich groß.");
  expect(html).not.toContain("3/4");
});
test("splitFractions finds every fraction and keeps the order", () => {
  expect(splitFractions("1/2 und 3/4")).toEqual([{ z: 1, n: 2 }, " und ", { z: 3, n: 4 }]);
  expect(splitFractions("ohne Bruch")).toEqual(["ohne Bruch"]);
});
