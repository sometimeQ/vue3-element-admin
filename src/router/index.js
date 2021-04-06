import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/setting.vue'),
        name: 'setting',
        meta: { title: '设置', icon: 'el-icon-s-tools', roles: ['admin'] }
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/menu/index.vue'),
        meta: { title: '菜单', icon: 'el-icon-menu', roles: ['admin', 'editor'] },
        redirect: '/menu2',
        children: [
          {
            path: '/menu1',
            name: 'menu1',
            component: () => import('@/views/menu/menu10.vue'),
            meta: { title: '菜单1', roles: ['admin', 'editor'] },
            redirect: '/menu1-2',
            children: [
              {
                path: '/menu1-1',
                component: () => import('@/views/menu/menu11.vue'),
                name: 'menu1-1',
                meta: { title: '菜单1-1', roles: ['admin', 'editor'] }
              },
              {
                path: '/menu1-2',
                component: () => import('@/views/menu/menu12.vue'),
                name: 'menu1-2',
                meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
              }
            ]
          },
          {
            path: '/menu2',
            component: () => import('@/views/menu/menu2.vue'),
            name: 'menu2',
            meta: { title: '菜单2', roles: ['admin', 'editor'] }
          }
        ]
      },
      {
        path: '/user',
        component: () => import('@/views/user/user.vue'),
        name: 'user',
        meta: { title: '用户', icon: 'el-icon-user-solid', roles: ['admin', 'editor'] }
      }
    ]
  }
]

export const asyncRoutes = []

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router