import { createRouter, createWebHistory, type Router } from 'vue-router'
import Layout from '@/layout/index.vue'
import { useMenu } from '@/store/menu'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false
})

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '首页',
      icon: 'icon-shouye',
      auth: false
    },
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'home',
          auth: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pathMatch',
    hidden: true,
    redirect: '/404'
  }
]

export const asyncRoutes = [
  {
    path: '/maptalks',
    component: Layout,
    redirect: '/maptalks/index',
    meta: {
      title: 'maptalks',
      icon: 'icon-ditu'
    },
    children: [
      {
        name: 'Maptalks',
        path: '/maptalks/index',
        component: () => import('@/views/maptalks/index.vue'),
        meta: {
          title: 'maptalks'
        }
      }
    ]
  },
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
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: 'about'
        }
      },
      {
        name: 'AboutDetail',
        path: '/about/detail',
        component: () => import('@/views/about/detail.vue'),
        meta: {
          title: 'aboutDetail'
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
        component: () => import('@/views/portal/index.vue'),
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
        component: () => import('@/views/selfGraphic/index.vue'),
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
        component: () => import('@/views/driver/index.vue'),
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
        component: () => import('@/views/gsap/index.vue'),
        meta: {
          title: 'gsap'
        }
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  },
  sensitive: true,
  strict: true
})

router.beforeEach(async (to, _from) => {
  NProgress.start()
  const store = useMenu()
  console.log(router.getRoutes())
  console.log('to.meta.auth', to.meta.auth)
  if (!store.routes.length) {
    const routes: [] = (await store.handleRoutes()) as []
    routes.forEach((item: any) => {
      router.addRoute(item)
    })
    if (to.name === '404' && to.redirectedFrom) {
      return { path: to.redirectedFrom.fullPath }
    } else {
      return true
    }
  } else {
    return true
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
