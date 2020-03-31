import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from "./App.vue";
import router from "./router";
import Default from "./layouts/Default.vue";
import VueTilt from 'vue-tilt.js'

Vue.use(Buefy)
Vue.use(VueTilt)
Vue.component("default-layout", Default);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
