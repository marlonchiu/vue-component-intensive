<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
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

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
