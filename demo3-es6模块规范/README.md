Node 中的模块化不是标准的 JavaScript 语法。

ECMAScript 官方并没有定义 `require`、`module.exports` 这样的程序成员。

- Node 中我们一般称之为 CommonJS 模块规范。
- 以前的浏览器也有模块化解决方案
  + RequireJS AMD asynchronous module definition
  + SeaJS CMD Common module definition
- 无论是 CommonJS、AMD、CMD 他们都是为了解决一个问题：JavaScript 模块化
  + 说白了就是输入与输出

- ECMAScript 官方发现你们太乱了，开发人员都快被搞死了
  + 所以在 2015 年的 ES6 标准中退出了官方的 模块化规范定义

import dsa from '包'

// node 未来也会采用这种模块化语法，因为它是官方，它是统一标准
const fsa = require('包')

## 输入


## 输出
