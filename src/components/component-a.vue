<template>
  <div>
    {{title}}
    <h3>{{app.octokitInfo && app.octokitInfo.url}}</h3>
    <button @click="changeOctokitInfo">重新请求数据</button>
  </div>
</template>

<script>
export default {
  name: 'componentA',
  // inject: ['user'],
  inject: ['app'],
  data() {
    return {
      title: 'Vue.js component-a'
    };
  },
  mounted() {
    // console.log('inject  获得数据：' + this.user);
    // vm.$parent
    console.log(this.$parent.$options);
    console.log(this.$parent.$options.name); // 获取父组件的名字  前提是父组件要添加 name
  },
  methods: {
    sayHello() {
      window.alert('Hello');
    },
    changeUserInfo() {
      // 这里修改完用户数据后，通知 app.vue 更新，以下为伪代码
      // $.ajax('/user/update', () => {
      //   // 直接通过 this.app 就可以调用 app.vue 里的方法
      //   this.app.getUserInfo();
      // });
    },
    changeOctokitInfo() {
      this.app.getOctokitInfo();
    }
  }
};
</script>
