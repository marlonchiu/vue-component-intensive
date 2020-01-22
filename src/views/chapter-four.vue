<template>
  <div class="chapter-four">
    <child @test="handleEvent"/>
    <span>当前是父组件</span>
    <button @click="handleClick">自定义实现 dispatch 和 broadcast 方法 ----触发事件</button>
    <component-b></component-b>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter.js';
import Child from '_com/child.vue';
import ComponentB from '_com/component-b.vue';
export default {
  name: 'chapterFour',
  mixins: [Emitter],
  methods: {
    handleEvent(text) {
      console.log(text); // Hello Vue.js
      // 同时给子组件返回消息
    },
    handleDispatch() {
      this.dispatch();
    },
    handleBroadcast() {
      this.broadcast();
    },
    handleClick() {
      // broadcast 向下分发数据
      this.broadcast('componentB', 'on-message', 'Hello Vue.js');
    }
  },
  mounted() {
    this.$on('response-msg', (data) =>{
      console.log(data)
    });
  },
  components: {
    Child,
    ComponentB
  }
};
</script>
