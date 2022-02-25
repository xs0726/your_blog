import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory()

import Home from '../views/Home'

const routes = [
  { path: '/', redirect: { name: 'home' } },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: { path: '/home/home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home/Home')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('../views/Detail')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register')
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
]

const router = new createRouter({
  history,
  routes
})

export default router
