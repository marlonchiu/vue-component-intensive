<template>
  <div class="chapter-sixteen">
    <h2 style="color: red;">拓展：Vue.js 容易忽略的 API 详解</h2>
    <hr>
    <next-tick />
    <!-- 实现一  -->
    <!--<v-model-input-number :value='10' /> -->
    <!-- 实现二 -->
    <!--<v-model-input-number v-model='value' />-->
    <!-- 实现三  -->
    <!-- <VModelInputNumber :value="value" @input="handleChange" />-->
    <!-- 实现四  -->
    <!-- <InputNumberB :value="value" @input="handleChange" />-->
    <!-- 实现五  .sync 修饰符-->
    <InputNumberC :value.sync="value" />


    <!-- $set 用法-->
    <set-array />
    <set-object />
    <!-- $set 用法-->
    <computed-set />

  </div>
</template>

<script>
import NextTick from '../components/sixteen/nextTick'
import VModelInputNumber from '../components/sixteen/v-model'
import InputNumberB from '../components/input-number/input-number-b'
import InputNumberC from '../components/input-number/input-number-c'
import SetArray from '../components/sixteen/set-array'
import SetObject from '../components/sixteen/set-object'
import ComputedSet from '../components/sixteen/computed-set'
export default {
  name: 'chapterSixteen',
  data() {
    return {
      value: 1
    }
  },
  mounted() {
  },
  methods: {
    handleChange(val) {
      console.log(val);
      // 传递的值会同步修改
      this.value = val
    }
  },
  components: {
    NextTick,
    VModelInputNumber,
    InputNumberB,
    InputNumberC,
    SetArray,
    SetObject,
    ComputedSet
  }
};
</script>
