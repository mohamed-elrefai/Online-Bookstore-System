const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
})
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
  devServer: {
        proxy: 'https://3vnrwyrw06.execute-api.us-east-1.amazonaws.com/dev/',
  }
}
