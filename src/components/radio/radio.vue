<template>
  <label>
    <span>
      <input
        type="radio"
        :disabled="disabled"
        :checked="currentValue"
        @change="change">
    </span>
    </span>
      <slot>{{ label }}
    </slot>
  </label>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import { findComponentUpward } from '../../utils/assist.js'
export default {
  name: 'iRadio',
  mixins: [Emitter],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: [String, Number]
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: false
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      group: false,
      parent: null
    };
  },
  mounted() {
    this.parent = findComponentUpward(this, 'iRadioGroup');

    if(this.parent) {
      this.group = true;
    }

    if (this.group) {
      this.parent.updateValue();
    } else {
      this.updateValue();
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked
      // console.log(checked);
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if(this.group) {
        if(this.label !== undefined) {
          this.parent.change({
            value: this.label,
            checked: this.value
          });
        }
      } else {
        this.$emit('on-change', value);
        this.dispatch('iFormItem', 'on-form-change', value);
      }
    },
    updateValue () {
      this.currentValue = this.value === this.trueValue;
    }
  },
  watch: {
    value (val) {
      console.log(val);
      if(val === this.trueValue || val === this.falseValue) {
        this.updateValue();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  }
}
</script>
