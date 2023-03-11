import { createRouter, createWebHistory } from 'vue-router'
import useRouterHook from '~/router/useRouterHook.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('~/views/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
useRouterHook(router)
export default router
