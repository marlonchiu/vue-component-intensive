import Vue from 'vue'

const AlertComponent = Vue.extend({
  template: '<div>{{ message }}</div>',
  data () {
    return {
      message: 'Hello, Aresn'
    }
  }
})

// const component = new AlertComponent().$mount()

// document.body.appendChild(component.$el)

// 在 $mount 里写参数来指定挂载的节点
new AlertComponent().$mount('#app')
// 不用 $mount， 直接在创建实例时指定 el 选项
// new AlertComponent({ el: '#app' });
