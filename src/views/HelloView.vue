<script setup lang="ts">
const tasks = [
  { name: 'grid', label: 'Grid layout' },
  { name: 'type', label: 'Typing component' },
  { name: 'ref', label: 'Refactor component' },
  { name: 'comp', label: 'Computed issues' }
]
</script>

<template>
  <main>
    <h1>Мини лайв-кодинг</h1>
    <ul class="task-list">
      <template v-for="({ name, label }, idx) of tasks" :key="name">
        <span v-if="idx">🔸</span>
        <li @click="$router.push({ name })" class="task-item">
          {{ label }}
        </li>
      </template>
    </ul>
  </main>
</template>

<style scoped>
.task-list {
  padding: unset;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.task-item {
  cursor: pointer;
}
.task-item:hover {
  color: var(--color-accent);
}
.task-item:hover::before {
  content: '🔺';
  position: absolute;
  translate: -2em;
  rotate: -30deg;
}
</style>
