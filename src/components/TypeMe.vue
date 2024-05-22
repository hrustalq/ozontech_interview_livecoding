<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: String,
  options: {
    type: Object,
    required: true
  },
  isFun: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['hover', 'select'])

const innerState = ref()

defineExpose({
  innerState
})
</script>

<template>
  <div class="vlock">
    <pre @mousemove="(e) => emit('hover', e)">
      name: {{ props.name || 'no name' }}
      {{ props.isFun ? 'fun' : 'not fun' }}
      state: {{ innerState }}
    </pre>
    <hr />
    <slot name="default" :state="innerState"> slot here </slot>
    <template v-if="props.options.size > 0">
      <hr />
      Select option:
      <div class="list-select">
        <div
          v-for="[key, value] in props.options"
          :key="key"
          class="item-select"
          @click="() => emit('select', key, value)"
        >
          {{ key }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.vlock {
  width: 80%;
  outline: 1px dashed var(--color-text);
  padding: 0.5em;
}

.list-select {
  display: flex;
  gap: 0.5em;
}
.item-select {
  cursor: pointer;
}
.item-select:hover {
  text-decoration: underline;
}
</style>
