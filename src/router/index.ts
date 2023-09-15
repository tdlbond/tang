import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: async () => await import('@/views/home.vue')
      },
      {
        name: 'about',
        path: 'about',
        component: async () => await import('@/views/about.vue')
      },
      {
        name: 'portal',
        path: 'portal',
        component: async () => await import('@/views/portal.vue')
      },
      {
        name: 'selfGraphic',
        path: 'selfGraphic',
        component: async () => await import('@/views/selfGraphic.vue')
      },
      {
        name: 'driver',
        path: 'driver',
        component: async () => await import('@/views/driver.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
