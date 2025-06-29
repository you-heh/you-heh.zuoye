// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://v.yiketianqi.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}