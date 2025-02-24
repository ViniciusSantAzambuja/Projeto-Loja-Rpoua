import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/MainPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/camisetas',
    name: 'camisetas',
    component: () => import('../views/T-shirts.vue')
  },
  {
    path: '/moletons',
    name: 'moletons',
    component: () => import('../views/SweatshirtsView.vue')
  },
  {
    path: '/calças',
    name: 'calças',
    component: () => import('../views/PantsView.vue')
  },
  {
    path: '/:type/:name',
    name: 'singleItem',
    component: () => import('../components/items/itemSingleVis.vue'),
  },
  {
    path:'/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "about" */ '@/shop/view/ShopCartItemsGroup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */  '@/auth/views/VUserLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
