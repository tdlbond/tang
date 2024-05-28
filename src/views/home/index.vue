<template>
  <div>
    <p class="color-primary text-3xl font-bold underline">
      {{ name }}
    </p>
    <p>{{ title }}</p>
    <div>
      <a
        href="https://vitejs.dev"
        target="_blank"
      >
        <img
          src="@/assets/vite.svg"
          class="logo"
          alt="Vite logo"
        />
      </a>
      <a
        href="https://vuejs.org/"
        target="_blank"
      >
        <img
          src="@/assets/vue.svg"
          class="logo vue"
          alt="Vue logo"
        />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <div id="music"></div>
  </div>
</template>

<script lang="ts" setup>
import Player from 'xgplayer'
import Music from 'xgplayer-music'
import 'xgplayer/dist/index.min.css'
import 'xgplayer-music/dist/index.min.css'
import { titleKey } from '@/constant/keys'

const name = ref('123123')

const calcStrPos = (str1: string, str2: string, pos: number = 0): number => {
  let i = pos
  let j = 0
  const len1 = str1.length
  const len2 = str2.length
  const str1Arr = [...str1]
  const str2Arr = [...str2]
  while (i < len1 && j < len2) {
    if (str1Arr[i] === str2Arr[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  if (j >= len2) {
    return i - j
  } else {
    return -1
  }
}

console.log(calcStrPos('hello world', 'wor'))

const title = inject(titleKey)

onMounted(() => {
  const player = new Player({
    id: 'music',
    url: '/koushixinfei.mp3', // [{ src: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3', name: '林宥嘉·脆弱一分钟', poster: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-small.jpeg' }],
    volume: 0.8,
    width: window.innerWidth,
    height: 50,
    mediaType: 'audio',
    presets: ['default', Music],
    ignores: ['playbackrate'],
    controls: {
      initShow: true,
      mode: 'flex'
    },
    marginControls: true,
    videoConfig: {
      crossOrigin: 'anonymous'
    }
  })
  player.crossOrigin = 'anonymous'
})
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.color-primary {
  background-color: $bg-color-primary;
}
</style>
