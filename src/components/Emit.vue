<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 18:15:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 18:21:23
-->
<template>
  <el-input v-model="obj.username" placeholder=""></el-input>
  <el-input v-model="obj.phone" placeholder=""></el-input>
  <el-button type="primary" @click="submitForm">提交</el-button>
</template>
<script setup>
import { reactive, defineEmits } from 'vue';

const obj = reactive({
  username: '',
  phone: '',
});

const emit = defineEmits({
  submit: ({ username, phone }) => {
    if (username && phone) {
      return true;
    }
    console.warn('Invalid submit event payload!');
    return false;
  },
});
function submitForm() {
  emit('submit', { username: obj.username, phone: obj.phone });
}
</script>
