<template>
  <div>
    <canvas width="500" height="500"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// let canvas
// let ctx

const initCanvas = () => {
  // const canvas = document.querySelector('canvas')
  // // console.log(canvas)
  // const ctx = canvas.getContext('2d')
  // ctx.fillRect(100, 100, 200, 200)
}

onMounted(() => {
  initCanvas()
})
</script>

<style lang="scss" scoped></style>
