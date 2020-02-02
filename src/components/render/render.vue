<template>
  <div></div>
</template>
<script>
export default {
  data(){
    return {
      show: false
    }
  },
  //  h，即 createElement，是 Render 函数的核心
  render: (h) => {
    let childNode;
    if (this.show) {
      childNode = h('p', '内容 1');
    } else {
      childNode = h('p', '内容 2');
    }

    return h('div', {
      attrs: {
        id: 'main'
      },
      'class': {
        container: true
      },
      style: {
        color: 'red'
      }
    }, [childNode]);
  }
}
</script>
