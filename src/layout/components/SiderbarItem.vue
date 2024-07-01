<template>
  <el-sub-menu
    v-if="item.children && item.children.length > 1"
    :index="item.path"
  >
    <template #title>
      <FontIcon
        v-if="item.meta.icon"
        class="icon"
        :type="item.meta.icon"
      />
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
    :index="item.children ? item.children[0].path : item.path"
  >
    <FontIcon
      v-if="item.meta.icon"
      class="icon"
      :type="item.meta.icon"
    />
    <span>{{
      item.children ? item.children[0].meta.title : item.meta.title
    }}</span></el-menu-item
  >
</template>

<script setup lang="ts">
// import path from 'path'

defineProps({
  item: {
    type: Object as any,
    default: () => {}
  }
})

// const hasOneShowingChild = () => {}
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 5px;
}
</style>
