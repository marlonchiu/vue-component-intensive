<template>
  <div ref="display"></div>
</template>


<script>
  import Vue from 'vue';
  import randomStr from '../../utils/random_str.js';
  // 父级传递 code 后，将其分割，并保存在 data 的 html、js、css 中，后续使用
  export default {
    props: {
      code: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        id: randomStr(),
        html: '',
        js: '',
        css: '',
        component: null
      }
    },
    mounted() {
      this.renderCode();

      if (this.html !== '' && this.js !== '') {
        const parseStrToFunc = new Function(this.js)();

        parseStrToFunc.template =  this.html;
        const Component = Vue.extend(parseStrToFunc);
        this.component = new Component().$mount();

        this.$refs.display.appendChild(this.component.$el);

        if (this.css !== '') {
          const style = document.createElement('style');
          style.type = 'text/css';
          style.id = this.id;
          style.innerHTML = this.css;
          document.getElementsByTagName('head')[0].appendChild(style);
        }
      }
    },
    methods: {
      renderCode() {
        this.splitCode();
      },
      // getSource 方法接收两个参数：
      // - source：.vue 文件代码，即 props: code；
      // - type：分割的部分，也就是 template、script、style
      getSource (source, type) {
        const regex = new RegExp(`<${type}[^>]*>`);
        let openingTag = source.match(regex);

        if (!openingTag) return '';
        else openingTag = openingTag[0];

        return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));
      },
      splitCode () {
        const script = this.getSource(this.code, 'script').replace(/export default/, 'return ');
        const style = this.getSource(this.code, 'style');
        const template = '<div id="app">' + this.getSource(this.code, 'template') + '</div>';

        this.js = script;
        this.css = style;
        this.html = template;
      },
      destroyCode () {
        const $target = document.getElementById(this.id);
        if ($target) $target.parentNode.removeChild($target);

        if (this.component) {
          this.$refs.display.removeChild(this.component.$el);
          this.component.$destroy();
          this.component = null;
        }
      }
    },
    beforeDestroy () {
      this.destroyCode();
    },
    watch: {
      code () {
        this.destroyCode();
        this.renderCode();
      }
    }
  }
</script>
