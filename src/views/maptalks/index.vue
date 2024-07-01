<template>
  <div class="maptalks w-full h-full flex">
    <div class="w-40 h-full">left</div>
    <div
      ref="mapRef"
      class="h-full flex-1"
    >
      right
    </div>
  </div>
</template>

<script setup lang="ts">
import * as maptalks from 'maptalks'
import type { MapOptions, Map } from 'maptalks/src/index'

const mapRef = ref()
const map = ref<Partial<Map>>({})
onMounted(() => {
  map.value = new maptalks.Map(mapRef.value, {
    center: [118.79429, 32.06319],
    centerCross: true,
    zoom: 19,
    spatialReference: {
      projection: 'baidu'
    },
    baseLayer: new maptalks.TileLayer('base', {
      urlTemplate:
        'https://gss{s}.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20170927',
      subdomains: [0, 1, 2, 3],
      attribution:
        '&copy; <a target="_blank" href="http://map.baidu.com">Baidu</a>'
    })
  } satisfies MapOptions)
})
</script>

<style lang="scss"></style>
