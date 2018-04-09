console.log('foo start')

exports.foo = 'bar'

exports.add = function (x, y) {
  return x + y
}

console.log('foo end')

var age = 18

// 每个模块最终向外导出的是 module.exports
// 也就是说每个模块最终都有这么一句代码
// return module.exports
// 为了方便，每个模块还为 module.exports 提供了一个别名 exports
