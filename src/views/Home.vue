<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-12-27 16:12:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 14:38:57
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="hanleClick">{{store.state.user.age}}</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    const hanleClick = () => {
      store.commit('addAge');
    };
    return {
      hanleClick,
      store,
    };
  },
};
</script>
