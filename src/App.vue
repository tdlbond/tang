<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { titleKey } from '@/constant/keys'

provide(titleKey, 'hello world')
</script>
