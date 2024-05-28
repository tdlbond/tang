import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { useMenu } from '@/store/menu'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: ''
    },
    children: [
      {
        name: 'Home',
        path: '/home',
        component: async () => await import('@/views/home/index.vue'),
        meta: {
          title: 'home'
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: async () => await import('@/views/error/404.vue')
  }
]

export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    meta: {
      title: 'about',
      icon: ''
    },
    children: [
      {
        name: 'About',
        path: '/about/index',
        component: async () => await import('@/views/about/index.vue'),
        meta: {
          title: 'about'
        }
      }
    ]
  },
  {
    path: '/portal',
    component: Layout,
    redirect: '/portal/index',
    meta: {
      title: 'portal',
      icon: ''
    },
    hidden: true,
    children: [
      {
        name: 'Portal',
        path: '/portal/index',
        component: async () => await import('@/views/portal/index.vue'),
        meta: {
          title: 'portal'
        }
      }
    ]
  },
  {
    path: '/selfGraphic',
    component: Layout,
    redirect: '/selfGraphic/index',
    meta: {
      title: 'selfGraphic',
      icon: ''
    },
    children: [
      {
        name: 'SelfGraphic',
        path: '/selfGraphic/index',
        component: async () => await import('@/views/selfGraphic/index.vue'),
        meta: {
          title: 'selfGraphic'
        }
      }
    ]
  },
  {
    path: '/driver',
    component: Layout,
    redirect: '/driver/index',
    meta: {
      title: 'driver',
      icon: ''
    },
    children: [
      {
        name: 'Driver',
        path: '/driver/index',
        component: async () => await import('@/views/driver/index.vue'),
        meta: {
          title: 'driver'
        }
      }
    ]
  },
  {
    path: '/gsap',
    component: Layout,
    redirect: '/gsap/index',
    meta: {
      title: 'gsap',
      icon: ''
    },
    children: [
      {
        name: 'Gsap',
        path: '/gsap/index',
        component: async () => await import('@/views/gsap/index.vue'),
        meta: {
          title: 'gsap'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

router.beforeEach(async (to, _from, next) => {
  const store = useMenu()
  if (!store.routes.length) {
    const routes: [] = (await store.handleRoutes()) as []
    routes.forEach((item: any) => {
      router.addRoute(item)
    })
    // console.log(router.getRoutes(), to)
    next({ ...to, replace: true })
  } else {
    next()
  }
})

export default router
