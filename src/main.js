import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from 'vue-axios';
import axios from 'axios';
import https from 'axios';
Vue.prototype.$https = https;

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// https({
//   method: "post",
//   url: URL,
//   data: data,
//   params: params,
// }).then(res=> {}).catch(onrejected, err=>{});
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
