<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">{{item}}</li>
    </ul>
    <button @click="handler">修改Array</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['a', 'b', 'c']
    }
  },
  methods: {
    handler () {
      // this.items[1] = 'x';  // 不是响应性的
      // this.$set(this.items, 1, 'x');  // 是响应性的

      // copy 一个数组，然后通过 index 修改后，再把原数组整个替换  响应的
      const data = [...this.items];
      data[1] = 'x';
      this.items = data
    }
  }
}
</script>
