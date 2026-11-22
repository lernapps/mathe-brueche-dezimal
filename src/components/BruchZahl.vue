<script setup lang="ts">
defineProps<{ z: number | string; n: number | string }>();
</script>
<template>
  <component is="math"
    ><component is="mfrac"
      ><component is="mn">{{ z }}</component
      ><component is="mn">{{ n }}</component></component
    ></component
  >
</template>
<style scoped>
math {
  font-size: 1.25em;
}
</style>
