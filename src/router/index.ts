import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: () => import('../views/HelloView.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../views/GridView.vue')
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/RefactorView.vue')
    },
    {
      path: '/type',
      name: 'type',
      component: () => import('../views/TypesView.vue')
    }
  ]
})

export default router
