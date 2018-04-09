const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 当匹配到以 .css 结尾的文件的时候，使用 css-loader 和 style-loader 来处理
        // 注意：use 中的 loader 顺序很重要
        // css-loader 的作用是 css 转成 js 模块（存储了 css 字符串）
        // style-loader 的作用是根据 css转换得到的 js 模块动态的生成 style 节点插入 head 标签中
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
