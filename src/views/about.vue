<template>
  <div @click="changeData">about</div>
  <div
    v-for="(item, index) of data"
    :key="index"
  >
    {{ item }}
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  data: [1, 2, 3]
})

const { data } = toRefs(state)

const changeData = (): void => {
  window.open('http://localhost:30012/')
}
</script>

<style lang="scss" scoped></style>
