<template>
  <div>
    <h4>事件修饰符</h4>
    <i-button @click.native="handleActive">内容</i-button>
    <!-- 即使 Alt 或 Shift 被一同按下时也会触发-->
    <button @click.ctrl="handleCtrl">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button @click.ctrl.exact="handleCtrlExact">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发-->
    <button @click.exact="handleExact">A</button>
    <!-- Alt + C -->
    <input @keyup.alt.67="clear">
    <!-- Alt + C -->
    <input @click.left="mouseLeft">
  </div>
</template>

<script>
import IButton from "../i-button"
export default {
  methods: {
    handleActive() {
      console.log('active');
    },
    handleCtrl() {
      console.log('即使 Alt 或 Shift 被一同按下时也会触发');
    },
    handleCtrlExact() {
      console.log('有且只有 Ctrl 被按下的时候才触发');
    },
    handleExact() {
      console.log('没有任何系统修饰符被按下的时候才触发');
    },
    clear() {
      console.log('clear');
    },
    mouseLeft() {
      console.log('mouseLeft');
    }
  },
  components: {
    IButton
  }
}
</script>
