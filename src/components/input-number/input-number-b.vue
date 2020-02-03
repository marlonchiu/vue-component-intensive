<template>
 <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
export default {
  name: 'InputNumberB',
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
  model: {
    prop: 'number',
    event: 'change'
  },
  methods: {
    increase (val) {
      this.currentValue += val
      this.$emit('number', this.currentValue)
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
}
</script>
