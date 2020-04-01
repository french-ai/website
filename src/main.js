import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueTilt from 'vue-tilt.js';
import App from './App.vue';
import router from './router';
import Default from './layouts/Default.vue';

Vue.use(Buefy);
Vue.use(VueTilt);
Vue.component('default-layout', Default);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
