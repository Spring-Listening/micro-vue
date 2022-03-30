/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:50:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 14:35:14
 */
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      username: 'spring',
      age: 20,
      description: '烦死了开发吉林省涉及到了方技术打开了房间数量',
    },
  },
  mutations: {
    addAge(state) {
      state.user.age += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
