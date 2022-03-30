/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:50:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 17:03:17
 */
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: 'micro_vue首页' },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'micro_vue关于' },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/study',
    name: 'Vuestudy',
    meta: { title: 'micro_vue学习' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuestudy.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
];

export default routes;
