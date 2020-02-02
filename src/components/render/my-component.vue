<template>
  <div>
    <Render :render="render"></Render>
  </div>
</template>

<script>
import Render from './render.js'
export default {
  props: {
    render: Function
  },
  components: {
    Render
  }
}
</script>
