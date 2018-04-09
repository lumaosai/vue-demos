const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 开发过程中建议使用 development，打包速度快
  // 上线的时候使用 production 模式，打包速度慢，因为要做压缩等优化处理
  mode: 'development', // production(默认的)|development
  devtool: 'inline-source-map', // 加入源代码地图，调试信息可以看到我们的源代码信息
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      // 当你 import vue 的时候会加载这里配置的文件路径
      // key 表示的是模块标识
      // 这里表示当你加载以 vue 开头的模块的时候会使用后面这个路径
      // 我们建议严谨一点，vue$
      'vue$': 'vue/dist/vue.js'
    }
  },
  // devServer 用来专门为 webpack-dev-server 配置的
  // contentBase 用来设置我们开发服务器的 www 目录
  devServer: {
    contentBase: './dist',
    hot: true // 开启热更新
  },
  plugins: [
    // HtmlWebpackPlugin 插件会将你指定的 template 给打包到结果目录中
    // 它还能帮你实现 html 压缩处理
    new CleanWebpackPlugin(['./dist']), // 打包之前先把 dist 目录清除一遍
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        // 当匹配到以这些后缀名结尾的资源的时候，使用 url-loader 来处理
        // url-loader 会把小于 8192 字节大小的文件直接 base64 转码内置，大于它的则以独立文件来提供
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // ES6 转 ES5 [babel-loader](https://webpack.js.org/loaders/babel-loader/)
        // yarn add --dev "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env
        // 当加载以 .js 结尾的资源的时候，使用 babel-loader 对 ES6 => ES5 处理
        // exclude 表示排除第三方包转码
        // 不仅做了转码处理，还有代码优化
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // 当加载到以 .less 结尾的资源的时候使用：
        //   less-loader 编译成 css
        //   css-loader 转换成 JavaScript 模块
        //   style-loader 创建 style 节点插入 head 节点中
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          // less-loader 依赖了 less
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        // 1. yarn add --dev vue-loader vue-template-compiler
        // 2. 配置
        // 当加载到以 .vue 结尾的文件资源的时候，使用 vue-loader 转换处理
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}
