/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:50:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-13 10:55:23
 */
import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

window.projectName = 'micro_vue';

let instance = null;

async function render(props = {}) {
  const { container, routerBase } = props;
  instance = await createApp(App);
  const router = await createRouter({
    // eslint-disable-next-line no-underscore-dangle
    history: createWebHistory(`${routerBase}`),
    routes,
  });
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('执行到了 micro_vue 0000000000000');
  render({ container: '', routerBase: '/' });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.unmount();
}
