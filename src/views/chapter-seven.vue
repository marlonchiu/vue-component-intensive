<template>
  <div class="chapter-seven">
    /** 单选框实例 */
    <i-checkbox
      v-model="single"
      :trueValue="1"
      :falseValue="0"
      >单独选项</i-checkbox>
  </div>
</template>

<script>
import iCheckbox from '_com/checkbox/checkbox.vue';
export default {
  name: 'chapterSeven',
  data: () => ({
    single: 1
  }),
  methods: {},
  mounted() {},
  components: {
    iCheckbox
  }
};
</script>
