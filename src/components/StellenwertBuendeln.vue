<script setup lang="ts">
defineOptions({ nojs: "caption" });
import { computed, nextTick, ref } from "vue";
import { LEFT, bundle, canBundle, clamp, format, thousandths } from "./StellenwertBuendeln.ts";
import type { Spalte } from "./StellenwertBuendeln.ts";
const props = defineProps<{
  e: number;
  z: number;
  h: number;
  t: number;
  einer: string;
  zehntel: string;
  hundertstel: string;
  tausendstel: string;
  komma: string;
  bundleText: string;
  becomesText: string;
  resetText: string;
  numberText: string;
}>();
const start = computed(() => clamp({ e: props.e, z: props.z, h: props.h, t: props.t }));
const bundleCols: Spalte[] = ["z", "h", "t"];
const state = ref({ ...start.value });
const total = computed(() => format(thousandths(state.value)));
const names = computed<Record<"e" | Spalte, string>>(() => ({
  e: props.einer,
  z: props.zehntel,
  h: props.hundertstel,
  t: props.tausendstel,
}));
const abbr = (key: "e" | Spalte) => names.value[key].split(" ")[0] ?? "";
const rest = (key: "e" | Spalte) => names.value[key].split(" ").slice(1).join(" ");
const buttonText = (col: Spalte) => `${props.bundleText}: 10 ${abbr(col)} ${props.becomesText} 1 ${abbr(LEFT[col])}`;
const numberEl = ref<HTMLElement | null>(null);
const nothingLeft = computed(() => !bundleCols.some((col) => canBundle(state.value, col)));
const doBundle = (col: Spalte) => {
  state.value = bundle(state.value, col);
  // the pressed button may be disabled now: keep the keyboard focus on the page, at the result
  void nextTick(() => numberEl.value?.focus());
};
const reset = () => {
  state.value = { ...start.value };
};
const places: ("e" | Spalte)[] = ["e", "z", "h", "t"];
</script>
<template>
  <div class="board">
    <div class="grid" role="group" :aria-label="`${einer}, ${komma}, ${zehntel}, ${hundertstel}, ${tausendstel}`">
      <template v-for="key in places" :key="key">
        <div v-if="key === 'z'" class="comma-col">
          <div class="head">
            <span class="ab">,</span><span class="nm">{{ komma }}</span>
          </div>
        </div>
        <div class="col">
          <div class="head">
            <span class="ab">{{ abbr(key) }}</span
            ><span class="nm">{{ rest(key) }}</span>
          </div>
          <div class="tokens">
            <span v-for="i in state[key]" :key="i" class="token" aria-hidden="true">{{ abbr(key) }}</span>
          </div>
          <div class="count">{{ state[key] }} {{ abbr(key) }}</div>
        </div>
      </template>
    </div>
    <div class="actions">
      <button
        v-for="col in bundleCols"
        :key="col"
        type="button"
        :disabled="!canBundle(state, col)"
        @click="doBundle(col)"
      >
        {{ buttonText(col) }}
      </button>
      <button type="button" class="reset" @click="reset">{{ resetText }}</button>
    </div>
    <p v-if="nothingLeft" class="done" aria-live="polite">
      Hier lässt sich nichts mehr bündeln. Mit „Neu anfangen“ legst du die Plättchen zurück.
    </p>
    <p ref="numberEl" class="number" tabindex="-1" aria-live="polite">
      {{ numberText }} <strong>{{ total }}</strong>
    </p>
  </div>
</template>
<style scoped>
button {
  font: inherit;
}
.board {
  border: 1px solid var(--page-border);
  border-radius: 8px;
  padding: 0.5rem;
  background: var(--page-surface);
  color: var(--page-text);
}
.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 1.4rem repeat(3, minmax(0, 1fr));
  gap: 0.25rem;
}
.comma-col {
  border-left: 3px solid var(--page-text);
  border-right: 3px solid var(--page-text);
  background: var(--page-background);
  text-align: center;
}
.comma-col .nm {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
.comma {
  font-weight: 700;
  font-size: 1.4rem;
  padding-top: 1.2rem;
}
.col,
.comma-col {
  min-width: 0;
  border: 1px solid var(--page-border);
  border-radius: 6px;
  padding: 0.15rem;
  text-align: center;
}
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--page-border);
  padding-bottom: 0.25rem;
  min-height: 2.6rem;
}
.ab {
  font-weight: 700;
}
.nm {
  font-size: 0.65rem;
  color: var(--page-muted);
}
.tokens {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2rem;
  min-height: 3.8rem;
  padding: 0.35rem 0;
}
.token {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  border: 2px solid var(--page-text);
  font-size: 0.7rem;
  font-weight: 700;
  background: var(--page-background);
}
.count {
  font-size: 0.8rem;
  color: var(--page-muted);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.actions button {
  min-height: 44px;
  padding: 0 0.75rem;
  border: 1px solid var(--page-accent);
  border-radius: 6px;
  background: var(--page-accent);
  color: var(--page-on-accent);
  cursor: pointer;
}
.actions button:disabled {
  opacity: 0.45;
  cursor: default;
}
.actions button.reset {
  background: transparent;
  color: var(--page-text);
  border-color: var(--page-border);
}
.number {
  margin: 0.75rem 0 0;
}
</style>
