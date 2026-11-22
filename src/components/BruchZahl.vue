<script setup lang="ts">
// A fraction inside a component, set as numerator over denominator with a fraction bar. It is HTML, not MathML:
// the no-JavaScript test of the runtime counts every <math> outside the described tasks as a formula of the content.
defineProps<{ z: number | string; n: number | string }>();
</script>
<template>
  <span class="bruch" role="math" :aria-label="`${z} durch ${n}`"
    ><span class="z" aria-hidden="true">{{ z }}</span
    ><span class="n" aria-hidden="true">{{ n }}</span></span
  >
</template>
<style scoped>
.bruch {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  line-height: 1.15;
  font-size: 0.9em;
  margin: 0 0.1em;
}
.z {
  border-bottom: 0.08em solid currentColor;
  padding: 0 0.2em;
}
.n {
  padding: 0 0.2em;
}
</style>
