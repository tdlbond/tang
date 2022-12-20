import * as VueRouter from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about.vue')
  },
  {
    name: 'canvas',
    path: '/canvas',
    component: () => import('@/views/canvas.vue')
  },
  {
    name: 'selfGraphic',
    path: '/selfGraphic',
    component: () => import('@/views/selfGraphic.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
