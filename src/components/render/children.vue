<template>
  <div></div>
</template>

<script>
const Child = {
  render: (h) => {
    return h('p', 'text')
  }
}

export default {
  //  h，即 createElement，是 Render 函数的核心
  render: (h) => {
    const children = Array.apply(null, {
      length: 5
    }).map(() => {
      return h(Child)
    });

    return h('div', children);
  }
}
</script>
