const path = require("path");

const resolve = dirName => path.join(__dirname, dirName);

module.exports = {
  lintOnSave: false,
  pages: {
    // 修改 src 为 examples
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule("js")
      .include.add(resolve("packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};
