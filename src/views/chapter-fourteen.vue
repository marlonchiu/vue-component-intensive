<template>
  <div class="chapter-fourteen">
    <h2 style="color: red;">递归组件与动态组件</h2>
    <hr></hr>

    <h4>递归组件</h4>
    <my-component></my-component>

    <h4>动态组件</h4>
    <button @click="handleChange('A')">显示 A 组件</button>
    <button @click="handleChange('B')">显示 B 组件</button>
    <button @click="handleChange('C')">显示 C 组件</button>

    <!--<component :is="component"></component>-->
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>

    <br>
    <br>
    <br>
    <i-button>普通按钮</i-button>
    <br>
    <i-button to="https://juejin.im">链接按钮</i-button>
    <br>
    <i-button to="https://juejin.im" target="_blank">新窗口打开链接按钮</i-button>

  </div>
</template>

<script>
  import MyComponent from '../components/recursion/my-component'
  import componentA from '../components/recursion/a.vue';
  import componentB from '../components/recursion/b.vue';
  import componentC from '../components/recursion/c.vue';
  import iButton from '../components/recursion/button.vue';
  export default {
    name: 'chapterFourteen',
    data: () => ({
      component: componentA
    }),
    mounted() {
    },
    methods: {
      handleChange (component) {
        this.component = `component${component}`;
        // if (component === 'A') {
        //   this.component = componentA;
        // } else if (component === 'B') {
        //   this.component = componentB;
        // } else if (component === 'C') {
        //   this.component = componentC;
        // }
      }
    },
    components: {
      MyComponent,
      componentA,
      componentB,
      componentC,
      iButton
    }
  };
</script>
