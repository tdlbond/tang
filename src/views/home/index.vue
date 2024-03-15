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
  </div>
</template>

<script lang="ts" setup>
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
