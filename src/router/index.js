import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomeView';
import ProductRegisterView from '@/views/ProductRegisterView';
import ProductsView from '@/views/productsView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/product/new',
    name: 'cadastro-de-produto',
    component: ProductRegisterView,
  },
  {
    path: '/product/show',
    name: 'Lista de Produtos',
    component: ProductsView,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
