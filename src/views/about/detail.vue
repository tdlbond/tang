<template>
  <div>
    <p>123</p>
    <div class="d2">22</div>
    <div class="d2">33</div>
    <div class="d2">44</div>
    <hr />
    <div @click="setName">{{ test.helloName }}</div>
  </div>
</template>

<script setup lang="ts">
import { useTest } from '@/store/test'

const test = useTest()

const setName = () => {
  test.setName('jerry')
}
</script>

<style lang="scss">
.d2 {
  color: red;

  &:first-of-type {
    color: orange;
  }
}
</style>
