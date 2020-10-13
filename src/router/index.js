import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';
import CadastroProduto from 'views/CadastroProduto.vue';
import ProdutosCadastrados from 'views/ProdutosCadastrados';

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
  {
    path: '/product/show',
    name: 'Lista de Produtos',
    component: ProdutosCadastrados,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
