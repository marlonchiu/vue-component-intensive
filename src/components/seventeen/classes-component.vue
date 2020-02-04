<template>
  <div :class="classes">ABCD</div>
</template>
<script>
  const prefixCls = 'button'
  export default {
    data () {
      return {
        size: 'mini'
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${this.size}`]: this.size !== 'default',
            [`${prefixCls}-loading`]: this.loading != null && this.loading,
            [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
            [`${prefixCls}-ghost`]: this.ghost
          }
        ];
      }
    }
  }
</script>
