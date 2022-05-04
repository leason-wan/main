import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { devtool } from './devtool/index.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import { registerMicroApps, start } from 'qiankun';

const microConfig = [
  {
    name: 'about', // 唯一的子应用名称
    // entry: '//localhost:7100', // 子应用入口 html
    entry: '//micro-about.netlify.app', // 子应用入口 html
    container: '#MICRO_APP', // 挂载节点
    activeRule: '/about', // url base 微应用
  },
  {
    name: 'dashboard', // 唯一的子应用名称
    entry: '//micro-dashboard.netlify.app', // 子应用入口 html
    // entry: '//localhost:7101', // 子应用入口 html
    container: '#MICRO_APP', // 挂载节点
    activeRule: '/dashboard', // url base 微应用
  },
];

const _config = devtool('zhangsan', microConfig);
registerMicroApps(_config);
start();
