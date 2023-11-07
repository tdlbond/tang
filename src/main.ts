import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'normalize.css/normalize.css'
import 'driver.js/dist/driver.min.css'
import './style.scss'
import './styles/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(ElementPlus)
app.use(router)
app.mount('#app')
