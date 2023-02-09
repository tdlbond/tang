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
    name: 'portal',
    path: '/portal',
    component: () => import('@/views/portal.vue')
  },
  {
    name: 'selfGraphic',
    path: '/selfGraphic',
    component: () => import('@/views/selfGraphic.vue')
  },
  {
    name: 'driver',
    path: '/driver',
    component: () => import('@/views/driver.vue')
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
