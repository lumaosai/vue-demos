# demo2

## 准备

```shell
mkdir webpack-demo & cd webpack-demo
npm init -y
npm i -D webpack webpack-cli
```

## 配置文件

在项目根目录下创建 `webpack.config.js`:

```javascript
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist')
    filename: 'bundle.js'
  }
}

```

## 配置 NPM Scripts

```json
{
  "name": "demo0",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.3.1"
  },
  "devDependencies": {
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14"
  }
}

```

## 打包构建

```shell
npm run build
```
