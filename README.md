# vue-component-intensive

## 项目简介

> [掘金小册 - Vue.js 组件精讲](https://juejin.im/book/5bc844166fb9a05cd676ebca)
>
> 【第4节.组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法】 扩展文章
> [掘金博客 -- Vue读懂这篇，进阶高级](https://juejin.im/post/5e2453e8518825366e13f59a)

## 获取的开发日常知识

* [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate)
  * vuex-persistedstate 使用浏览器的本地存储（ local storage ）对状态（ state ）进行持久化
  * 安装：`npm install --save vuex-persistedstate`
  * 使用：

```javascript
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  // ...
  plugins: [createPersistedState()]
})
 ```
