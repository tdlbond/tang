<template>
  <i
    :class="['iconfont', type]"
    v-bind="$attrs"
  ></i>
</template>

<script setup lang="ts">
interface PropsType {
  type: string
}
defineProps<PropsType>()
</script>

<style lang="scss"></style>
