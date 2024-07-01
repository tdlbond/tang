import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import 'driver.js/dist/driver.min.css'

import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'

import 'maptalks/dist/maptalks.css'

import './style.scss'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from '@/store'

import FontIcon from '@/components/FontIcon.vue'

const app = createApp(App)

app.component('FontIcon', FontIcon)

// app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
