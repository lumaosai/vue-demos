console.log('main start')

// 加载 jquery 包实际上加载是 node_modules 目录中 package.json 文件 main 指定的文件
const $ = require('jquery')

// const age = 18

const foo = require('./foo')

console.log(foo)

console.log(age)

console.log('main end')
