import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/main/MainPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: '/single',
    name: 'single',
    component: () => import('../components/shop/ShopCartItemsGroup.vue')
  },
  {
    path: '/:type/:name',
    name: 'singleItem',
    component: () => import('../components/items/itemSingleVis.vue'),
  },
  {
    path:'/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoprCartView.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
