<template>
  <div>
    组件 C
    <component-d></component-d>
    <component-d></component-d>
    <component-d></component-d>
    <hello-world />
  </div>
</template>
<script>
import componentD from './component-d.vue';
import HelloWorld from './HelloWorld.vue';
import { findComponentDownward } from '../utils/assist.js';

export default {
  name: 'componentC',
  components: { componentD, HelloWorld },
  data() {
    return {
      name: 'Aresn'
    };
  },
  mounted() {
    const comD = findComponentDownward(this, 'componentD');
    if (comD) {
      console.log(
        'start|||||||||||||||||||||||||||||' + 'findComponentDownward'
      );
      console.log(comD.message); // Happy New Year!
      comD.sayHappy(); // Happy New Year!
      console.log('end|||||||||||||||||||||||||||||' + 'findComponentDownward');
    }
  },
  methods: {
    sayHello() {
      console.log('Hello, Vue.js');
    }
  }
};
</script>
