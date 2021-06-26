import Vue from 'vue';
import PortalVue from 'portal-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import helpers from './helpers';

require('./validation');

Vue.use(PortalVue);

Vue.config.productionTip = false;

Vue.use({
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
