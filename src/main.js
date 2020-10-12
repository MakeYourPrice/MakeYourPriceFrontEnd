import Vue from 'vue';
import VueMaterial from 'vue-material';
import ax from 'config/axiosConfig';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import 'styles/_app.scss';
import router from './router';
import store from './store';
import helpers from './helpers';

require('./validation');
require('./errorHandling');

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueAxios, ax);
Vue.use(VueSweetalert2);

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
