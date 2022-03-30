<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 18:59:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 19:06:32
-->
<template>
  <!-- <input type="text"
  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" > -->
  <el-input v-model="value" placeholder="请输入"></el-input>
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
});
const emit = defineEmits(['update:modelValue']);

console.log(props.modelModifiers);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    if (props.modelModifiers.capitalize) {
      // eslint-disable-next-line no-param-reassign
      val = val.charAt(0).toUpperCase() + val.slice(1);
    }
    emit('update:modelValue', val);
  },
});
</script>
