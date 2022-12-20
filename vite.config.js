import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/styles/variables.scss';`
      }
    }
  }
})
