<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-23 15:49:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-23 19:03:10
-->
<template>
  <ul>
    <li v-for="item in list" :key="item" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
  <vueRef ref="child" />

  <button @click="handleGetValue">获取child值</button><br/>
  <div :style="{'font-size': `${fontSize}em`}">
    <ButtonCounter title="父组件传过来的title" @enlarge-text="changeFont" />
  </div>
  <Slot>
    师傅的说法收代理费尽量是
  </Slot>
  <component :is="componentObj[key]"></component>
  <div is="vue:A">77777</div>
  <div>
    <el-radio-group v-model="key">
      <el-radio label="A"></el-radio>
      <el-radio label="B"></el-radio>
      <el-radio label="C"></el-radio>
    </el-radio-group>
  </div>
  <Emit @submit="handleSubmit"></Emit>
  <div class="model">
    <VModel v-model="testValue"></VModel>
  </div>
  <div class="Capitalize">
    <Capitalize v-model.capitalize="capitalize"></Capitalize>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import vueRef from '@/components/vue-ref.vue';
import ButtonCounter from '@/components/ButtonCounter.vue';
import Slot from '@/components/Slot.vue';
import A from '@/components/A-com.vue';
import B from '@/components/B-com.vue';
import C from '@/components/C-com.vue';
import Emit from '@/components/Emit.vue';
import VModel from '@/components/V-model.vue';
import Capitalize from '@/components/Capitalize.vue';

const componentObj = {
  A, B, C,
};
const key = ref('');
const list = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
]);
const capitalize = ref('');
const fontSize = ref(0.2);
const itemRefs = ref([]);
const child = ref(null);
const testValue = ref('');
onMounted(() => console.log(itemRefs.value));
const handleGetValue = () => {
  console.log('===============', child.value.a);
};
const changeFont = () => {
  fontSize.value += 0.1;
};
const handleSubmit = (res) => {
  console.log(res);
};
</script>
