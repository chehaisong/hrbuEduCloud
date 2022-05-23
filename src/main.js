import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

// 引入vuex
import store from "./stote"

// 引入路由
import router from "./router"

// 按需引入 elementUI
// import {Input,Button} from 'element-ui';
// Vue.use(Input);
// Vue.use(Button);


new Vue({
  render: h => h(App),
  // 添加 vuex
  store,
  // 添加路由
  router,
  beforeCreate() {
    // 添加全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount('#app')