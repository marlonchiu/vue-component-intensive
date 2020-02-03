<template>
  <div>
    <ul>
      <li v-for="(attr, index) in item">{{attr}}</li>
    </ul>
    <button @click="handler">修改Object</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        a: 1
      }
    }
  },
  methods: {
    handler () {
      // this.item.b = 2;  // 不是响应性的
      this.$set(this.item, 'b', 2);  // 是响应性的
    }
  }
}
</script>
