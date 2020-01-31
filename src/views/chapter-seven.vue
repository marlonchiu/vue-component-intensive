<template>
  <div class="chapter-seven">
    <!-- 单选框实例 -->
    <i-checkbox
      v-model="single"
      :trueValue="1"
      :falseValue="0"
      >单独选项</i-checkbox>
    <br>
      数据：{{ single }}

      <br><br>
      <!-- 复选框实例 -->
      <i-checkbox-group v-model="multiple">
        <i-checkbox label="option1">选项 1</i-checkbox>
        <i-checkbox label="option2">选项 2</i-checkbox>
        <i-checkbox label="option3">选项 3</i-checkbox>
        <i-checkbox label="option4">选项 4</i-checkbox>
      </i-checkbox-group>

      <br>
      数据：{{ multiple }}

      <br>
      <br>
      <br>
      
    <!-- 单选按钮实例 -->
    <i-radio
      v-model="radio1"
      :trueValue="1"
      :falseValue="0"
      >Radio</i-radio>
    <br>
      数据：{{ radio1 }}

      <br><br>
      <!-- 单选按钮实例  -->
      <i-radio-group v-model="radio2">
        <i-radio label="option1">选项 1</i-radio>
        <i-radio label="option2">选项 2</i-radio>
        <i-radio label="option3">选项 3</i-radio>
        <i-radio label="option4">选项 4</i-radio>
      </i-radio-group>

      <br>
      数据：{{ radio2 }}
  </div>
</template>

<script>
import iCheckbox from '_com/checkbox/checkbox.vue';
import iCheckboxGroup from '_com/checkbox/checkbox-group.vue';
import iRadio from '_com/radio/radio.vue';
import iRadioGroup from '_com/radio/radio-group.vue';
export default {
  name: 'chapterSeven',
  data: () => ({
    single: 1,
    multiple: ['option1'],
    radio1: 1,
    radio2: 'option4'
  }),
  methods: {},
  mounted() {},
  components: {
    iCheckbox,
    iCheckboxGroup,
    iRadio,
    iRadioGroup
  }
};
</script>
