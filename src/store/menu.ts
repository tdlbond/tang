import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'

export const useMenu = defineStore('menu', () => {
  const routes = ref<any[]>([])

  const handleRoutes = () => {
    return new Promise((resolve) => {
      routes.value = [...constantRoutes, ...asyncRoutes]
      const otherRoute = {
        path: '/:pathMatch(.*)*',
        name: 'pathMatch',
        hidden: true,
        redirect: '/404'
      }
      resolve([...asyncRoutes, otherRoute])
    })
  }

  return {
    routes,
    handleRoutes
  }
})
