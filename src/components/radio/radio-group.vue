<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import { findComponentsDownward } from '../../utils/assist.js'
export default {
  name: 'iRadioGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  mounted() {
    this.updateValue();
  },
  methods: {
    change (data) {
      console.log(data);
      this.currentValue = data.value;
      this.updateValue();
      this.$emit('input', data.value);
      this.$emit('on-change', data.value);
      this.dispatch('iFormItem', 'on-form-change', data.value);
    },
    updateValue () {
      this.childrens = findComponentsDownward(this, 'iRadio')
      if(this.childrens){
        this.childrens.forEach(child => {
          child.currentValue = this.currentValue === child.label;
          child.group = true;
        })
      }
    }
  },
  watch: {
    value () {
      if(this.currentValue !== this.value){
        this.currentValue = this.value;
        this.$nextTick(()=>{
          this.updateValue();
        });
      }
    }
  }
}
</script>
