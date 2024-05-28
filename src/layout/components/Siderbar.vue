<template>
  <div class="h-full">
    <el-menu
      class="h-full overflow-auto"
      :default-active="defaultActive"
      router
    >
      <Siderbaritem
        v-for="item in avaliableRoutes"
        :key="item.path"
        :item="item"
      />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useMenu } from '@/store/menu'
import { useRoute } from 'vue-router'
import Siderbaritem from './SiderbarItem.vue'

const { routes } = storeToRefs(useMenu())

const route = useRoute()

const defaultActive = computed(() => route.path)

const avaliableRoutes = computed(() => {
  return routes.value.filter((item: any) => item?.hidden != true)
})
</script>

<style lang="scss"></style>
