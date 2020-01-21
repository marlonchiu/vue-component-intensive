<template>
  <div>{{title}}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js component-a'
    };
  },
  mounted() {
    // vm.$parent
    // console.log(this.$parent);
  },
  methods: {
    sayHello() {
      window.alert('Hello');
    }
  }
};
</script>
