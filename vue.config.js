const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // 重写路径
        // http://localhost:3000/api/aa => http://localhost:3000/aa
        pathRewrite:{
          "^/api":""
        },
        ws: true,
        changeOrigin: true
      },
    }
  }
})
