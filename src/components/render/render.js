// Functional Render 函数式组件渲染

export default {
  functional: true,
  props: {
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h)
  }
}
