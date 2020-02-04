<template>
  <div :class="{show: isShow}">内容</div>
</template>
<script>
  export default {
    data () {
      return {
        isShow: false
      }
    }
  }
</script>

<style >
  .show {
    color: red
  }
</style>
