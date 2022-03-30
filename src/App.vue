<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:50:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 16:33:52
-->
<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div>{{ $translate('greetings.hello') }}</div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
