<template>
  <div class="chapter-eleven">
    <!--<i-template></i-template> -->
    <!--<i-render></i-render> -->
    <!--<i-children></i-children> -->
    <my-component :render="render"></my-component>
  </div>
</template>

<script>
import iTemplate from '../components/render/template.vue'
import iRender from '../components/render/render.vue'
import iChildren from '../components/render/children.vue'
import myComponent from '../components/render/my-component.vue'

export default {
  name: 'chapterEleven',
  data: () => ({
    render: (h) => {
      return h('div', {
        style: {
          color: 'red'
        }
      }, '自定义内容')
    }
  }),
  mounted() {
  },
  methods: {},
  components: {
    iTemplate,
    iRender,
    iChildren,
    myComponent
  }
};
</script>
