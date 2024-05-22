<script setup lang="ts">
// TODO FIXME

defineProps<{
  name: string
  level?: number
  state: {
    a: '>' | '<'
    b: '>' | '<'
  }
}>()

const level = 10
</script>

<template>
  <!-- TODO FIXME -->
  <div class="vlock">
    <pre>name: {{ name }}</pre>
    <div>
      <button @click="state.a = state.a == '>' ? '<' : '>'">
        A {{ state.a }}
      </button>
      &nbsp;
      <span v-for="a of Array.from(Array(level).keys())">{{ a }}, </span>
    </div>
    <div>
      <button @click="state.b = state.b == '>' ? '<' : '>'">
        B {{ state.b }}
      </button>
      &nbsp;
      <span v-for="a of Array.from(Array(level).keys())">{{ a }}, </span>
    </div>
  </div>
</template>

<style>
.vlock {
  width: 80%;
  outline: 1px dashed var(--color-text);
}
</style>
