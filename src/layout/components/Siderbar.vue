<template>
  <div>
    <el-menu
      :default-active="path"
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

const { path } = useRoute()

const avaliableRoutes = computed(() => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return routes.value.filter((item: any) => !item.hidden)
})
</script>

<style lang="scss"></style>
@/store/menu
