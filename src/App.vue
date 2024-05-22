<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <button
    v-if="$route.name != 'hello'"
    class="back-button"
    @click="$router.push({ name: 'hello' })"
  >
    🔙
  </button>
  <router-view />
</template>

<style scoped>
.back-button {
  position: absolute;
  top: 1em;
  left: 1em;

  font-size: 1.5em;
  cursor: pointer;

  min-width: min-content;
  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
}
.back-button:hover {
  border: 1px solid var(--color-border-hover);
}
</style>
