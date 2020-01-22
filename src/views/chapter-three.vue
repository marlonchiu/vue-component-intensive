<template>
  <div class="home">
    <component-a ref="comA"></component-a>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentA from '@/components/component-a.vue';

export default {
  name: 'home',
  // provide: {
  //   user: 'Marlon'
  // },
  methods: {
    handleClick(data) {
      console.log(data);
    }
  },
  mounted() {
    // vm.$children
    // console.log(this.$children)  // [] 有四个
    // ref
    const comA = this.$refs.comA;
    console.log(comA);
    console.log(comA.title); // Vue.js
    // comA.sayHello(); // 弹窗
  },
  components: {
    ComponentA
  }
};
</script>
