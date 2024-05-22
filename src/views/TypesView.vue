<script setup lang="ts">
import { ref } from 'vue'
import TypeMe from '@/components/TypeMe.vue'

// TODO FIXME
const elementRef = ref<any>()

function select(key: any, value: any) {
  alert(`Select ${key} with type ${typeof value}`)
}

function hover(e: any) {
  elementRef.value.innerState = e.x
}
</script>

<template>
  <main>
    <pre>
      /**
      * Необходимо типизировать компоненты `TypesView.vue` и `TypeMe.vue`
      */
    </pre>
    <type-me name="First" :options="new Map()"></type-me>
    <type-me
      :options="
        new Map([
          ['key1', 1],
          ['key2', 0],
          ['key3', 4]
        ])
      "
      is-fun
      @select="select"
    ></type-me>
    <type-me
      ref="elementRef"
      :name="`X: ${elementRef?.innerState}`"
      :options="
        new Map([
          ['key1', { a: 'a' }],
          ['key2', { a: 'b' }]
        ])
      "
      :is-fun="false"
      @select="select"
      @hover="hover"
    >
      <template #default="{ state }">
        <i>X: {{ state }}</i>
      </template>
    </type-me>
  </main>
</template>

<style scoped></style>
