<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import { findComponentsDownward } from '../../utils/assist.js'
export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  mounted() {
    this.updateModel(true);
  },
  methods: {
    change (data) {
      this.currentValue = data;
      this.$emit('input', data);
      this.$emit('on-change', data);
      this.dispatch('iFormItem', 'on-form-change', data);
    },
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iCheckbox')
      if(this.childrens){
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        })
      }
    }
  },
  watch: {
    value (val) {
      this.updateModel(true);
    }
  }
}
</script>
