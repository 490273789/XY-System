import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home' }
      }
    ]
  },
  {
    path: '/xy1',
    component: Layout,
    redirect: '/xy2/room',
    name: 'xy2',
    meta: { title: '房间', icon: 'product' },
    children: [
      {
        path: 'room',
        name: 'room',
        component: () => import('@/views/room/index'),
        meta: { title: '房间', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy2',
    component: Layout,
    redirect: '/xy2/hand-card',
    name: 'xy2',
    meta: { title: '手牌', icon: 'product' },
    children: [
      {
        path: 'hand-card',
        name: 'hand-card',
        component: () => import('@/views/hand-card/index'),
        meta: { title: '手牌', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy3',
    component: Layout,
    redirect: '/xy3/order',
    name: 'xy3',
    meta: { title: '下单', icon: 'product' },
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '下单', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy4',
    component: Layout,
    redirect: '/xy4/cash',
    name: 'xy4',
    meta: { title: '收银', icon: 'product' },
    children: [
      {
        path: 'cash',
        name: 'cash',
        component: () => import('@/views/cash/index'),
        meta: { title: '收银', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy5',
    component: Layout,
    redirect: '/xy5/member-center',
    name: 'xy5',
    meta: { title: '会员', icon: 'product' },
    children: [
      {
        path: 'member-center',
        name: 'member-center',
        component: () => import('@/views/member-center/index'),
        meta: { title: '会员', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy6',
    component: Layout,
    redirect: '/xy6/engineer',
    name: 'xy6',
    meta: { title: '技师', icon: 'product' },
    children: [
      {
        path: 'engineer',
        name: 'engineer',
        component: () => import('@/views/engineer/index'),
        meta: { title: '技师', icon: 'product-list' }
      }
    ]
  },
  {
    path: '/xy7',
    component: Layout,
    redirect: '/xy7/data-config',
    name: 'xy7',
    meta: { title: '数据配置', icon: 'product' },
    children: [
      {
        path: 'data-config',
        name: 'data-config',
        component: () => import('@/views/data-config/index'),
        meta: { title: '数据配置', icon: 'product-list' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
