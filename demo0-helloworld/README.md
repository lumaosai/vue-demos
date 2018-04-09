# demo0

## 准备

```shell
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

## 项目结构

```
  demo0
  |- package.json
+ |- /src
+   |- index.js
+ |- /dist
+   |- index.html
```

安装 `jquery`:

```shell
npm i jquery
```

## src/index.js

```javascript
const $ = require('jquery')

$(function () {
  console.log('hahhaa')
})

```

## dist/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script src="main.js"></script>  
</body>
</html>
```

## 打包构建

```shell
# 1. 找到 src/index.js 入口文件
# 2. 分析代码中的依赖（说白了就是 require）
# 3. 打包构建，将结果打包到 dist/main.js
npx webpack
```

执行完以上命令你会发现在项目的 `dist` 目录下产出了一个文件 `main.js`。

## 开心的打开 `dist/index.html` 访问测试
