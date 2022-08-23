const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      host: "localhost",
    },
    //和原生webpack配置一样
  },
})
