<script setup lang="ts">
import { ref } from 'vue'

const list = ref<Array<string>>([])

function generateList() {
  const length = Math.round(Math.random() * 100)
  list.value = Array.from(Array(length).keys()).map((a) => a.toString())
}
</script>

<template>
  <main>
    <pre>
      /**
      * Есть список неопределённой длинны от 1 до 100, необходимо отрисовать его уместив на этот экран.
      *
      * Например, если элементов 10 и они умещаются на экран, отобразить их как вертикальный список.
      * Если элементов 20, и они не умещаются одним списком, расположить их 2 списками в две колонки.
      * Если элементов 30, 3 столбца по 10 строк и т.д.
      *
      * П.С. Множитель 10 для примера, в одной колонке может быть как больше так и меньше элементов.
      * П.С. Размер самих элементов мы считаем фиксированным.
      */
    </pre>

    <button @click="() => generateList()">Сгенерировать список</button>

    <div class="list-wrapper" ref="listWrapper">
      <!-- TODO -->

      <div v-for="(item, idx) of list" :key="idx" class="list-item">
        {{ item }}
      </div>

      <!-- TODO -->
    </div>
  </main>
</template>

<style scoped>
.list-wrapper {
  /* TODO */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  row-gap: 1em;
  column-gap: 1em;
  overflow: auto;
  flex: 1 1 max-content;
  flex-wrap: wrap;
}

.list-item {
  border: 1px solid var(--color-border);
  border-radius: 0.5em;
  background-color: var(--color-background-mute);

  width: 6ch;
  height: 2em;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
