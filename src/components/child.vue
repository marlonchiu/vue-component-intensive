<template>
  <div class="child">
    <button @click="handleEmitEvent">触发自定义事件</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // 监听自定义事件 test
    // this.$on('test', text => {
    //   window.alert(text);
    // });
    this.$on('child-callback', data => {
      console.log(data);
    });
  },
  methods: {
    handleEmitEvent() {
      // 在当前组件上触发自定义事件 test，并传值
      this.$emit('test', 'Hello Vue.js');
    }
  }
};
</script>
