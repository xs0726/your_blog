



// Vue 项目的配置文件

//反向代理  proxy 设置一个代理对象   处理后端和前端数据请求的跨域问题
// 1.解决跨域
// 2.代替baseURL  如果使用了 代理  就不要使用baseURL

module.exports = {
  publicPath: '/',
  pwa: {
      iconPaths: {
          favicon32: 'favicon.ico',
          favicon16: 'favicon.ico',
          appleTouchIcon: 'favicon.ico',
          maskIcon: 'favicon.ico',
          msTileImage: 'favicon.ico'
      }
  },
  lintOnSave: false,  // 取消ESLint 的书写规范限制

  devServer: { // Vue 服务器的配置文件
    //   host: "localhost",
      port: '2101',
      open: true, // 自动打开浏览器
      hot: true, // 自动更新 热更新
      inline: true,
      proxy: {
          '/api': {
              target: 'http://106.15.186.163:8080',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  },
  css: {  // 处理css
      loaderOptions: {   // 加载器 处理样式
          css: {},
          postcss: {   // 样式代码处理
              plugins: [
                  // 补全css前缀(解决兼容性)
                  // require("autoprefixer")(),    // moz  ms  webkit
                  // 把px单位换算成rem单位
              ]
          }
      }
  }
}
