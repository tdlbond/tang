<template>
  <div class="layout h-full flex flex-col">
    <section
      class="h-20 min-h-20 flex justify-center items-center border-b border-slate-300"
    >
      <Navbar />
    </section>
    <div class="grow flex overflow-auto">
      <section class="w-50"><Siderbar /></section>
      <section class="grow overflow-auto"><AppMain /></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Siderbar from './components/Siderbar.vue'
</script>

<style lang="scss"></style>
