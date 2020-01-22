<template>
  <div>组件 D</div>
</template>
<script>
import {
  findComponentUpward,
  findBrothersComponents
} from '../utils/assist.js';

export default {
  name: 'componentD',
  data: () => ({
    message: 'Happy New Year!'
  }),
  mounted() {
    const comC = findComponentUpward(this, 'componentC');
    if (comC) {
      console.log('start>>>>>>>>>>>>>>' + 'findComponentUpward');
      console.log(comC); // Aresn
      console.log(comC.name); // Aresn
      comC.sayHello(); // Hello, Vue.js
      console.log('end>>>>>>>>>>>>>>' + 'findComponentUpward');

      // 找到兄弟
      const comBrotherD = findBrothersComponents(this, 'componentD', true);
      console.log('________我的兄弟__________' + comBrotherD); // []，空数组
      console.log(comBrotherD); // []，空数组
    }
  },
  methods: {
    sayHappy() {
      console.log(this.message);
    }
  }
};
</script>
