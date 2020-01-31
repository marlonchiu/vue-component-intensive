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
  </div>
</template>

<script>
import iCheckbox from '_com/checkbox/checkbox.vue';
import iCheckboxGroup from '_com/checkbox/checkbox-group.vue';
export default {
  name: 'chapterSeven',
  data: () => ({
    single: 1,
    multiple: ['option1']
  }),
  methods: {},
  mounted() {},
  components: {
    iCheckbox,
    iCheckboxGroup
  }
};
</script>
