<template>
  <div class="chapter-nine">
    <h3>动态渲染 .vue 文件的组件—— Display</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
  import iDisplay from '_com/display/display.vue';
  import defaultCode from './default-code.js';

  export default {
    name: 'chapterNine',
    data: () => ({
      code: defaultCode
    }),
    mounted() {
    },
    methods: {},
    components: {
      iDisplay
    }
  };
</script>
