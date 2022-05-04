import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const global = {
  name: 'mainApp'
};
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'about', // 唯一的子应用名称
    entry: '//localhost:7100', // 子应用入口 html
    container: '#MICRO_APP', // 挂载节点
    activeRule: '/about', // url base 微应用
    props: {
      global
    }
  },
  {
    name: 'dashboard', // 唯一的子应用名称
    entry: '//localhost:7101', // 子应用入口 html
    container: '#MICRO_APP', // 挂载节点
    activeRule: '/dashboard', // url base 微应用
    props: {
      global
    }
  },
]);

start();