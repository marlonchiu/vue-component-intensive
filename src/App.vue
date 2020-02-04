<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">02.基础：Vue.js 组件的三个 API：prop、event、slot</router-link>
      <router-link to="/chapter-three">03.组件的通信 1：provide / inject</router-link>
      <router-link to="/chapter-four">04.组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法</router-link>
      <router-link to="/chapter-five">05.实战 1：具有数据校验功能的表单组件——Form</router-link>
      <router-link to="/chapter-six">06.组件的通信 3：找到任意组件实例——findComponents 系列方法</router-link>
      <router-link to="/chapter-seven">07.实战 2：组合多选框组件——CheckboxGroup & Checkbox</router-link>
      <router-link to="/chapter-eight">08.Vue 的构造器——extend 与手动挂载——$mount</router-link>
      <router-link to="/chapter-nine">09.实战 3：动态渲染 .vue 文件的组件—— Display</router-link>
      <router-link to="/chapter-ten">10.实战 4：全局提示组件——$Alert</router-link>
      <router-link to="/chapter-eleven">11.更灵活的组件：Render 函数与 Functional Render</router-link>
      <router-link to="/chapter-twelve">12.实战 5：可用 Render 自定义列的表格组件——Table</router-link>
      <router-link to="/chapter-thirteen">13.实战 6：可用 slot-scope 自定义列的表格组件——Table</router-link>
      <router-link to="/table-render2">实战 6：可用 slot-scope 自定义列的表格组件 —— Table（方案 2）</router-link>
      <router-link to="/table-slot2">实战 6：可用 slot-scope 自定义列的表格组件 —— Table（方案 3）</router-link>
      <router-link to="/chapter-fourteen">14.递归组件与动态组件</router-link>
      <router-link to="/chapter-fifteen">15.实战 7：树形控件——Tree</router-link>
      <router-link to="/chapter-sixteen">16.拓展：Vue.js 容易忽略的 API 详解</router-link>
      <router-link to="/chapter-seventeen">17.拓展：Vue.js 面试、常见问题答疑</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import mixins_octokit from './mixins/octokit.js';
import { getTestData } from '_ser/moduleA';
export default {
  mixins: [mixins_octokit],
  provide() {
    return {
      app: this
    };
  }
  // data: () => ({
  //   octokitInfo: null
  // }),
  // mounted() {
  //   // this.getUserInfo();
  //   this.getOctokitInfo();
  // },
  // methods: {
  //   getUserInfo() {
  //     // // 这里通过 ajax 获取用户信息后，赋值给 this.userInfo，以下为伪代码
  //     // $.ajax('/user/info', data => {
  //     //   this.userInfo = data;
  //     // });
  //   },
  //   async getOctokitInfo() {
  //     const response = await getTestData();
  //     console.log(response);
  //     this.octokitInfo = response;
  //   },
  // }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
