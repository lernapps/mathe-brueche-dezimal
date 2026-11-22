<script setup lang="ts">
import { computed } from "vue";
import BruchZahl from "./BruchZahl.vue";
import { splitFractions } from "./BruchMath.ts";
const props = defineProps<{ text: string }>();
const parts = computed(() => splitFractions(props.text));
</script>
<template>
  <span
    ><template v-for="(part, i) in parts" :key="i"
      ><BruchZahl v-if="typeof part !== 'string'" :z="part.z" :n="part.n" /><template v-else>{{
        part
      }}</template></template
    ></span
  >
</template>
