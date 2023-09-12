export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/index.vue')  
  },
  {
    path: '/test',
    component: () => import('@/views/test.vue')  
  },
]