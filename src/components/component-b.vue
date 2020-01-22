<template>
  <div>
    <span>这里是子组件</span>
    {{title}}
    <button @click="sendResponse">告诉父组件我收到数据啦</button>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter.js';
export default {
  name: 'componentB',
  mixins: [Emitter],
  data() {
    return {
      title: '没有数据'
    };
  },
  created() {
    this.$on('on-message', data => {
      console.log('我接收到父组件的数据啦');
      console.log(data);
      this.showMessage(data);
    });
  },
  methods: {
    handleDispatch() {
      this.dispatch();
    },
    handleBroadcast() {
      this.broadcast();
    },
    sendResponse() {
      // dispatch 向上反馈消息
      this.dispatch('chapterFour', 'response-msg', '告诉父组件我收到数据啦');
    },
    showMessage(text) {
      this.title = text;
    }
  }
};
</script>
