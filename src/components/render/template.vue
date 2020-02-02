<template>
  <div id="main" class="container" style="color: red">
    <p v-if="show">内容 1</p>
    <p v-else>内容 2</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>
