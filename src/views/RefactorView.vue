<script setup lang="ts">
import RefactorMe from '@/components/RefactorMe.vue'
import { reactive } from 'vue'

const list = reactive([
  {
    name: 'First',
    level: 5,
    state: {
      a: '>',
      b: '>'
    }
  },
  {
    name: 'Second',
    state: {
      a: '>',
      b: '>'
    },
    exclude: ['xqy', 'pon', 'sxr']
  }
])
</script>

<template>
  <main>
    <pre>
      /**
      * Необходимо отрефакторить компоненты `RefactorView.vue` и `RefactorMe.vue`
      */
    </pre>
    <!-- TODO FIXME -->
    <refactor-me
      :name="list[0].name"
      :level="list[0].level"
      :state="list[0].state"
    />
    <refactor-me v-bind="list[1]" />
  </main>
</template>

<style scoped></style>
