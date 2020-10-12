import Vue from 'vue';
import VueMaterial from 'vue-material';
import ax from 'config/axiosConfig';
import VueAxios from 'vue-axios';
import Swal from 'sweetalert2';
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

// helpers
Vue.use({
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  },
});

// sweet alert
Vue.use({
  install() {
    Vue.swal = Swal;
    Vue.prototype.$swal = Swal;
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
