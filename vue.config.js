const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_lib', resolve('src/common'))
      .set('_com', resolve('src/components'))
      .set('_img', resolve('src/assets/images'))
      .set('_ser', resolve('src/services'))
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    // string | Object 代理设置
    proxy: {
      '/repos': {
        target: 'https://api.github.com',
        changeOrigin: true
        // pathRewrite: {'^/api': ''}
      }
    },
    progress: false,
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
  }
}
