# 打包 css 资源

## 装包

```shell
npm install --save-dev style-loader css-loader
```

## 修改配置文件

```json
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```

## 在 js 中加载 css

```javascript
import './css/main.css'
```
