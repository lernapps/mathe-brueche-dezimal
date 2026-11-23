<script setup lang="ts">
import { computed, ref } from "vue";
import RichText from "./RichText.vue";
import { fill } from "./BruchMath.ts";
import { generate, params, parseAnswer } from "./BruchTippen.ts";
const props = defineProps<{
  kind: string;
  task: string;
  mistakes: string[];
  seed: number;
  checked: boolean;
  inputLabel: string;
  ownLabel: string;
}>();
const emit = defineEmits<{ answer: [string] }>();
const taskNow = computed(() => generate(props.seed, props));
const input = ref("");
// The preview only repeats what was typed, set as a fraction; it never calculates or judges.
const preview = computed(() => input.value.includes("/") && parseAnswer(input.value) !== undefined);
function update(value: string): void {
  input.value = value;
  emit("answer", value);
}
</script>
<template>
  <div class="tippen">
    <p><RichText :text="fill(task, params(taskNow))" /></p>
    <label
      >{{ inputLabel }}
      <input
        :value="input"
        type="text"
        inputmode="text"
        autocomplete="off"
        @input="update(($event.target as HTMLInputElement).value)"
    /></label>
    <p v-if="preview" class="own" aria-live="polite">{{ ownLabel }}: <RichText :text="input.trim()" /></p>
  </div>
</template>
<style scoped>
.tippen {
  margin: 1rem 0;
}
label {
  display: grid;
  gap: 0.5rem;
  justify-items: start;
}
input {
  font: inherit;
  min-height: 44px;
  max-width: 100%;
  padding: 0 0.6rem;
  color: var(--page-text);
  background: var(--page-surface);
  border: 1px solid var(--page-border);
  border-radius: 6px;
}
input:focus-visible {
  outline: 3px solid var(--page-accent);
  outline-offset: 2px;
}
.own {
  min-height: 2.5rem;
}
</style>
