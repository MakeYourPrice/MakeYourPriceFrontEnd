import Vue from 'vue';
import VueMaterial from 'vue-material';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import 'styles/_app.scss';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
const axiosConfig = {
  baseURL: process.env.API_URL,
  timeout: 30000,
};

Vue.use(VueAxios, axios.create(axiosConfig));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
