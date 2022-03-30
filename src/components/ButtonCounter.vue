<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 16:35:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 17:04:24
-->
<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
  {{title}}
  <button @click="emit('enlarge-text')">改变字号</button>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['enlarge-text']);

const count = ref(0);
</script>
<style lang="scss">

</style>
