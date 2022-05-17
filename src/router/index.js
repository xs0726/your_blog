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
        component: () => import('../views/Home/Home'),
        meta: {
          title: '你的博客'
        }
      },
      {
        path: 'posts/:id',
        name: 'posts',
        component: () => import('../views/About'),
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
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/bindAccount',
    name: 'bindAccount',
    component: () => import('@/views/Login/bindQQ'),
    meta: {
      title: '绑定账号'
    }
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/Editor'),
    meta: {
      title: '发布文章'
    }
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
]

const router = new createRouter({
  history,
  routes
})

export default router
