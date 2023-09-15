import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import viteCompression from 'vite-plugin-compression'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = resolve(__dirname, 'src')
const lifecycle = process.env.npm_lifecycle_event

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      dts: resolve(pathSrc, 'auto-import.d.ts'),
      eslintrc: {
        enabled: true,
        filepath: '.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: [resolve(pathSrc, 'components')],
      extensions: ['vue'],
      dts: resolve(pathSrc, 'components.d.ts')
    }),
    splitVendorChunkPlugin(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    legacy({
      targets: ['chrome < 60', 'edge < 15', 'firefox < 59'],
      renderLegacyChunks: true
    }),
    lifecycle === 'stats'
      ? visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true
        })
      : null
  ],
  resolve: {
    alias: {
      '@': pathSrc
    }
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
  },
  server: {
    port: 9527,
    open: true
  }
})
