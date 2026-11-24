import { expect, test } from "vite-plus/test";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import Component from "./BruchZahl.vue";
test("a fraction is set as numerator over denominator, never as a slash, and is no <math>", async () => {
  const html = await renderToString(createSSRApp(Component, { z: 3, n: 4 }));
  expect(html).toMatch(/aria-label="3 durch 4"/);
  expect(html).toMatch(/class="z"[^>]*>3</);
  expect(html).toMatch(/class="n"[^>]*>4</);
  expect(html).not.toContain("<math");
  expect(html).not.toContain("3/4");
});
