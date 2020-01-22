<template>
  <div class="chapter-six">
    引入组件C:
    <component-c ref="comA"></component-c>
  </div>
</template>

<script>
import ComponentC from '_com/component-c.vue';
export default {
  name: 'chapterSix',
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    ComponentC
  }
};
</script>
