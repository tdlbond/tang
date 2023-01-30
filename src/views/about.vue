<template>
  <div @click="changeData">about</div>
  <div v-for="(item, index) of data" :key="index">{{ item }}</div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  data: [1, 2, 3]
})

const { data } = toRefs(state)

const changeData = () => {
  window.open('http://localhost:30012/')
}
</script>

<style lang="scss" scoped></style>
