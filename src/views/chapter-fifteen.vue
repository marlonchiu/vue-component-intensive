<template>
  <div class="chapter-fifteen">
    <h2 style="color: red;">实战 7：树形控件——Tree</h2>
    <hr>

    <Tree
      :data="data"
      show-checkbox
      @on-toggle-expand="handleToggleExpand"
      @on-check-change="handleCheckChange"
    ></Tree>
  </div>
</template>

<script>
import Tree from '../components/tree/tree.vue'
export default {
  name: 'chapterFifteen',
  data() {
    return {
      data: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    handleToggleExpand (data) {
      console.log(data);
    },
    handleCheckChange (data) {
      console.log(data);
    }
  },
  components: {
    Tree
  }
};
</script>
