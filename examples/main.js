import Vue from "vue";
import App from "./App.vue";
import InputPlateNum from "./../packages/index";

Vue.config.productionTip = false;
Vue.use(InputPlateNum);

new Vue({
  render: h => h(App)
}).$mount("#app");
