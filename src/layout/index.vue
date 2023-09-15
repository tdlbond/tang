<template>
  <div>
    <section><Navbar /></section>
    <div>
      <section><Siderbar /></section>
      <section><AppMain /></section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Siderbar from './components/Siderbar.vue'
</script>

<style lang="scss"></style>
