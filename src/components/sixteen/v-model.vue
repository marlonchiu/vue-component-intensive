<template>
 <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>

// v-model 常用于表单元素上进行数据的双向绑定，比如 <input>。除了原生的元素，它还能在自定义组件中使用。
// v-model 是一个语法糖，可以拆解为 props: value 和 events: input。
// 就是说组件必须提供一个名为 value 的 prop，以及名为 input 的自定义事件，
// 满足这两个条件，使用者就能在自定义组件上使用 v-model

export default {
  name: 'VModelInputNumber',
  props: {
    value: {
      type: Number
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    increase (val) {
      this.currentValue += val
      this.$emit('input', this.currentValue)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
}
</script>
