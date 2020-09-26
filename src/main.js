import Vue from 'vue';
import VueMaterial from 'vue-material';
import ax from 'config/axiosConfig';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import 'styles/_app.scss';
import router from './router';
import store from './store';
import validationRules from './validation';
import helpers from './helpers';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueAxios, ax);

validationRules();

// helpers
Vue.use({
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
