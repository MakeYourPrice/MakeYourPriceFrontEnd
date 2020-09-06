import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';
import CadastroProduto from 'views/CadastroProduto.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/new',
    name: 'Cadastro de Produto',
    component: CadastroProduto,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
