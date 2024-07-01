<template>
  <span @click="color = 'blue'">color</span>
  <router-view v-slot="{ Component }">
    <!-- <transition mode="out-in"> -->
    <component
      :is="Component"
      :color="color"
    ></component>
    <!-- </transition> -->
  </router-view>
</template>

<script setup lang="ts">
const color = ref('red')
</script>

<style lang="scss"></style>
