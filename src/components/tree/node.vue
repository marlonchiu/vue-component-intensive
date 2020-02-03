<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <i-checkbox
        v-if="showCheckbox"
        :value="data.checked"
        @input="handleCheck"
      ></i-checkbox>
      <span>{{ data.title }}</span>
      <!--终结递归的条件   v-for="(item, index) in data.children"-->
      <tree-node
        v-if="data.expand"
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
        :show-checkbox="showCheckbox"
      ></tree-node>
    </li>
  </ul>
</template>

<script>
  import iCheckbox from '../checkbox/checkbox.vue'
  import { findComponentUpward } from '../../utils/assist.js'

  export default {
    name: 'TreeNode',
    components: { iCheckbox },
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        tree: findComponentUpward(this, 'Tree')
      }
    },
    methods: {
      handleExpand() {
        // 修改 data 的 expand 数据即可
        // 不用 this.data.expand = !this.data.expand 原因
        // cloneData 里的节点数据，是不一定含有 expand 或 checked 字段的，
        // 如果不含有，直接通过 this.data.expand 修改，这个 expand 就不是可响应的数据，
        // Vue.js 是无法追踪到它的变化，视图自然不会更新，
        // 而 $set 的用法就是对可响应对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。
        this.$set(this.data, 'expand', !this.data.expand)

        if(this.tree) {
          this.tree.emitEvent('on-toggle-expand', this.data)
        }
      },
      handleCheck (checked) {
        this.updateTreeDown(this.data, checked);

        if (this.tree) {
          this.tree.emitEvent('on-check-change', this.data);
        }
      },
      updateTreeDown (data, checked) {
        this.$set(data, 'checked', checked)

        if (data.children && data.children.length) {
          data.children.forEach(item => {
            this.updateTreeDown(item, checked);
          });
        }
      }
    },
    watch: {
      // 通过 watch 来监听当前节点的子节点是否都选中，进而修改当前的 checked 字段
      'data.children': {
        handler (data) {
          if(data) {
            const checkedAll = !data.some(item => !item.checked)
            this.$set(this.data, 'checked', checkedAll)
          }
        },
        deep: true
      }
    },
  }
</script>
<style>
  .tree-ul, .tree-li{
    list-style: none;
    padding-left: 18px;
  }
  .tree-expand{
    cursor: pointer;
  }
</style>
