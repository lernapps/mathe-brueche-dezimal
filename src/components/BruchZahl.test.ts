import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./BruchZahl.vue";
test("a fraction is set as numerator over denominator, never as a slash", async () => {
  const html = await renderToString(createSSRApp(Component, { z: 3, n: 4 }));
  expect(html).toContain("<mfrac>");
  expect(html).toContain("<mn>3</mn>");
  expect(html).toContain("<mn>4</mn>");
  expect(html).not.toContain("3/4");
});
