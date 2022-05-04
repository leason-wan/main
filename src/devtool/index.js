import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  debugStatusGet,
  createAppsConfig, RemoteAppsConfig
} from './configs';

Vue.use(ElementUI, {
  size: 'mini'
});

export function devtool(userKey, config) {
  const isDebug = debugStatusGet();
  if (!isDebug) {
    console.log('[micro-toy-devtool] devtool is closed');
    return config;
  }
  if (!config) {
    console.error('[micro-toy-devtool] remote config required');
    return;
  }
  RemoteAppsConfig.set(config);
  const localAppsConfig = createAppsConfig(userKey);
  let appsConfig = localAppsConfig.get();
  if (!appsConfig) {
    localAppsConfig.set(config);
    appsConfig = config;
  }
  const instence = new Vue({
    render: h => h(App, { props: { localAppsConfig } }),
  }).$mount()
  document.body.appendChild(instence.$el);
  return appsConfig;
}
