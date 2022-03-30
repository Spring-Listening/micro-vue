<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 18:38:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 18:57:06
-->
<template>
  <!-- <input type="text"
  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" > -->
  <el-input v-model="value" placeholder="请输入"></el-input>
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>
