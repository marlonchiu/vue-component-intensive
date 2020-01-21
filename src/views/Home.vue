<template>
  <div class="home">
    <i-button size="large" @on-click="handleClick">大按钮</i-button>
    <i-button disabled>不可点击的按钮</i-button>
    <i-button id="btn1" class="btn-submit">
      <i-icon slot="icon" type="checkmark"></i-icon>提交
    </i-button>
    <component-a ref="comA"></component-a>
  </div>
</template>

<script>
// @ is an alias to /src
import IButton from '@/components/i-button.vue';
import IIcon from '@/components/i-icon.vue';
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
    IButton,
    IIcon,
    ComponentA
  }
};
</script>
