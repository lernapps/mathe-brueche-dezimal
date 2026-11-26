<script setup lang="ts">
import { computed, ref, useId } from "vue";
import { cakePieces } from "./KuchenMultiplizieren.ts";
import { sector, fill, spoken } from "./BruchMath.ts";
defineOptions({ nojs: "caption" });
const props = defineProps<{
  instruction: string;
  denominatorLabel: string;
  numeratorLabel: string;
  beforeLabel: string;
  afterLabel: string;
  imageLabel: string;
  resultLabel: string;
  takenLegend: string;
  removedLegend: string;
}>();
const d = ref(3);
const b = ref(3);
const patternId = useId();
const removedId = useId();
const pieces = computed(() => cakePieces(3, 4, b.value, d.value));
function subdivide(value: number): void {
  d.value = value;
  b.value = value;
}
import RichText from "./RichText.vue";
import BruchZahl from "./BruchZahl.vue";
</script>
<template>
  <div class="cake-product">
    <p>{{ instruction }}</p>
    <label
      >{{ denominatorLabel }}: {{ d
      }}<input
        :value="d"
        type="range"
        min="1"
        max="6"
        @input="subdivide(Number(($event.target as HTMLInputElement).value))"
    /></label>
    <label>{{ numeratorLabel }}: {{ b }}<input :key="d" v-model.number="b" type="range" min="0" :max="d" /></label>
    <div class="cakes">
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="spoken(fill(imageLabel, { z: 3, n: 4 }))">
          <defs>
            <pattern :id="patternId" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#16765d" />
              <path
                d="M-5 5 L5 -5 M0 10 L10 0 M5 15 L15 5 M-5 5 L5 15 M0 0 L10 10 M5 -5 L15 5"
                stroke="white"
                stroke-opacity="0.25"
                stroke-width="0.6"
              />
            </pattern>
          </defs>
          <path
            v-for="i in 4"
            :key="i"
            :d="sector(i - 1, 4)"
            :style="{ fill: i <= 3 ? `url(#${patternId})` : 'var(--page-background)' }"
          />
        </svg>
        <figcaption>{{ beforeLabel }}: <BruchZahl :z="3" :n="4" /></figcaption>
      </figure>
      <figure>
        <svg viewBox="0 0 120 120" role="img" :aria-label="spoken(fill(imageLabel, { z: 3 * b, n: 4 * d }))">
          <defs>
            <pattern :id="removedId" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" class="removed-fill" />
              <circle cx="3" cy="3" r="0.9" class="removed-dot" />
            </pattern>
          </defs>
          <path
            v-for="(piece, index) in pieces"
            :key="index"
            :d="sector(index, 4 * d)"
            :style="{
              fill:
                piece === 'taken'
                  ? `url(#${patternId})`
                  : piece === 'removed'
                    ? `url(#${removedId})`
                    : 'var(--page-background)',
            }"
          />
          <path v-for="i in 4" :key="`original-${i}`" :d="sector(i - 1, 4)" class="original" />
        </svg>
        <figcaption>{{ afterLabel }}: <BruchZahl :z="b" :n="d" /> · <BruchZahl :z="3" :n="4" /></figcaption>
      </figure>
    </div>
    <ul class="legend">
      <li><span class="swatch taken" aria-hidden="true"></span>{{ takenLegend }}</li>
      <li><span class="swatch removed" aria-hidden="true"></span>{{ removedLegend }}</li>
    </ul>
    <p aria-live="polite"><RichText :text="fill(resultLabel, { b, d, z: 3 * b, n: 4 * d })" /></p>
  </div>
</template>
<style scoped>
.cake-product {
  border: 1px solid var(--page-border);
  border-radius: 0.375rem;
  padding: 1rem;
}
label {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
}
input {
  width: 100%;
  min-height: 44px;
  accent-color: var(--page-accent);
}
.cakes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
figure {
  margin: 0;
  min-width: 0;
  text-align: center;
}
svg {
  display: block;
  width: 100%;
  max-width: 240px;
  margin: auto;
}
svg > path {
  stroke: var(--page-text);
  stroke-width: 0.6;
}
.original {
  fill: none;
  stroke-width: 1.6;
}
figcaption {
  margin-top: 0.5rem;
}
/* Light red in both themes: the subject's colour for "put away", with dots as a second mark. */
.removed-fill {
  fill: #f8d3cf;
}
.removed-dot {
  fill: #a1281f;
  opacity: 0.5;
}
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}
.legend li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.swatch {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid var(--page-text);
}
.swatch.taken {
  background: #16765d;
}
.swatch.removed {
  background-color: #f8d3cf;
  background-image: radial-gradient(circle, rgb(161 40 31 / 0.5) 1.5px, transparent 1.6px);
  background-size: 6px 6px;
}
</style>
