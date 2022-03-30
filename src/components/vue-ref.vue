<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 16:01:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 17:05:40
-->
<template>
  <div class="ref-container">
    {{`22233332 ${a}---${b}`}}
  </div>
</template>
<script setup>
import { ref, defineExpose } from 'vue';

const a = ref(22);
const b = ref(33);
defineExpose({
  b,
});
</script>
