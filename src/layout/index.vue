<template>
  <div class="layout h-full flex flex-col">
    <section class="h-20 flex justify-center items-center">
      <Navbar />
    </section>
    <div class="flex-1 flex">
      <section class="w-50"><Siderbar /></section>
      <section class="flex-1 overflow-y-auto"><AppMain /></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Siderbar from './components/Siderbar.vue'
</script>

<style lang="scss"></style>
