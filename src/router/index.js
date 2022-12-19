import * as VueRouter from 'vue-router'

const routes = [
  {
    name: 'ViewHome',
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    name: 'ViewAbout',
    path: '/about',
    component: () => import('@/views/about.vue')
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
