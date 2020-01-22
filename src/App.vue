<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">基础：Vue.js 组件的三个 API：prop、event、slot</router-link>
      <router-link to="/chapter-three">组件的通信 1：provide / inject</router-link>
      <router-link to="/chapter-four">组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法</router-link>
      <router-link to="/chapter-five">实战 1：具有数据校验功能的表单组件——Form</router-link>
      <router-link to="/chapter-six">组件的通信 3：找到任意组件实例——findComponents 系列方法</router-link>
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
