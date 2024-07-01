<template>
  <div>
    <h2>{{ color }}</h2>
    <div @click="changeData">about</div>
    <div
      v-for="(item, index) of data"
      :key="index"
    >
      {{ item }}
    </div>
    <h1>{{ test.name }}</h1>
    <div class="h-60 bg-slate-200 flex">
      <div class="w-20">left</div>
      <div class="grow flex">
        <div class="h-full w-60 overflow-y-auto">
          <div>right-left</div>
        </div>
        <div class="grow">
          <el-button
            type="primary"
            @click="download"
            >下载MP3</el-button
          >
        </div>
      </div>
    </div>
    <div class="list">
      卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格卡网红打卡价格
    </div>
    <article><span>title</span></article>
    <article><h3>title2</h3></article>
  </div>
</template>

<script lang="ts" setup>
import instance from '@/api/axios'
import { downloadFile } from '@/utils'

defineProps<{ color: string }>()

const state = reactive({
  data: [1, 2, 3]
})

const { data } = toRefs(state)

const changeData = (): void => {
  window.open('http://localhost:30012/')
}

interface TestType {
  name?: string
}
const test: TestType = reactive({})
onMounted(() => {
  const test2 = { name: 'tom' }
  Object.assign(test, test2)

  setTimeout(() => {
    Object.assign(test, { name: 'jerry' })
  }, 3000)

  // console.log(state)
})

const url =
  'https://webfs.hw.kugou.com/202405221319/dc12a3f38322684870a7eaf1520b933e/v2/01ec46720c978c90ee409ca49974bb24/part/0/960121/G349/M05/D1/05/clip_PZUEAGUM5saAehIfAEdufKtWDQQ742.mp3'
const download = () => {
  instance
    .get(url, { responseType: 'blob' })
    .then((res) => {
      // console.log(res)
      downloadFile(res.data, 'music.mp3')
    })
    .catch(() => {})
}

const a = [1, 2, 3, 4, 5]
a.copyWithin(3, 1, 4)
console.log(a, a.entries())
</script>

<style lang="scss" scoped>
div.list::first-line {
  font-size: 18px;
  color: pink;
}

article *:first-child {
  color: cyan;
}
</style>
