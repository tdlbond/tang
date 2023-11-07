<template>
  <div>
    <div @click="changeData">about</div>
    <div
      v-for="(item, index) of data"
      :key="index"
    >
      {{ item }}
    </div>
    <h1>{{ test.name }}</h1>
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

interface TestType {
  name?: string
}
const test: TestType = reactive({})
onMounted(() => {
  const test2 = { name: 'tom' }
  Object.assign(test, test2)

  setTimeout(() => {
    Object.assign(test, { name: 'jerry' })
  }, 3000)
})
</script>

<style lang="scss" scoped></style>
