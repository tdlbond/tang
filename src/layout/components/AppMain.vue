<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss"></style>
