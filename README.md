# vue-component-intensive

## 项目简介

> [掘金小册 - Vue.js 组件精讲](https://juejin.im/book/5bc844166fb9a05cd676ebca)
> [项目源码 vue-component-book](https://github.com/icarusion/vue-component-book)
>
> 【第4节.组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法】 扩展文章
> [掘金博客 -- Vue读懂这篇，进阶高级](https://juejin.im/post/5e2453e8518825366e13f59a)
> [一份超级详细的Vue-cli3.0使用教程](https://juejin.im/post/5bdec6e8e51d4505327a8952)

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

* 自定义实现 dispatch 和 broadcast 方法

```javascript
注：本节部分代码参考 [iView](https://github.com/iview/iview/blob/2.0/src/mixins/emitter.js)。

// src/mixins/emitter.js

function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}

export default {
  methods: {
    // 接收了三个参数，
    // 第一个是组件的 name 值，用于向上或向下递归遍历来寻找对应的组件，
    // 第二个和第三个就是上文分析的自定义事件名称和要传递的数据
    dispatch (componentName, eventName, params) {
      let parent = this.$parent || this.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
```

* [表单校验 async-validator](https://github.com/yiminghe/async-validator)
