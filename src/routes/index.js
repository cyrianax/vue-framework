import { createRouter, createWebHashHistory } from 'vue-router'

// import { getToken } from '@/utils/auth'
import storage from '@/utils/storage'

// import MainLayout from '@/layouts/Main'
// import BlankLayout from '@/layouts/Blank'

import SignIn from '@/views/common/SignIn/index.vue'
// import _404 from '@/views/common/404'

import systemRoutes from './route.system'

// 从配置生成动态路由方法
const makeDynamicRoutes = configs => {
  return configs
    .reduce((config, routes) => routes.concat(config), [])
    .map(config => ({
      path: config.path,
      name: config.name,
      redirect: config.redirect,
      meta: config.meta,
      component: () => import(`../views${config.component}/index.vue`)
    }))
}
// 动态路由
const dynamicRoutes = makeDynamicRoutes([
  systemRoutes
])

// 静态路由
const staticRoutes = [
  {
    path: '/',
    redirect: '/system/user',
  },
  {
    path: '/common/sign-in',
    component: SignIn,
    meta: { title: '登录' }
  },
  // {
  //   path: '/common/404',
  //   component: _404,
  //   meta: { title: '404：找不到页面' }
  // },
  ...dynamicRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

// router.beforeEach(async (to, from) => {
//   return checkPermission({
//     target: to,
//     redirect: {
//       authorized: '/',
//       unauthorized: '/common/sign-in',
//     }
//   })
// })

export default router
