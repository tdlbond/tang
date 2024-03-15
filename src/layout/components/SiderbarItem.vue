<template>
  <el-sub-menu
    v-if="item.children && item.children.length > 1"
    :index="item.path"
  >
    <template #title>
      <!-- <el-icon><location /></el-icon> -->
      <span>{{ item.meta.title }}</span>
    </template>
    <SiderbarItem
      v-for="route in item.children"
      :key="route.path"
      :item="route"
    />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="item.children[0].path"
    >{{ item.children[0].meta.title }}</el-menu-item
  >
</template>

<script setup lang="ts">
// import path from 'path'

defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

// const hasOneShowingChild = () => {}
</script>

<style lang="scss"></style>
