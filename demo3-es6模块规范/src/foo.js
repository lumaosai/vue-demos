// 导出默认成员
// 一个模块中有且只能有一个
// 没有可以不写
// 这种方式就是加载方便
// 缺点：只能导出一个
// 也就是说这句代码等价于 module.export = function...
export default function () {
  console.log('我是 foo 导出的默认成员')
}

// 一个一个的导出
export const foo = 'bar'
export const num = 123
export function add(x, y) {
  return x + y
}

// export 123

const a = 1
const b = 2

// 统一导出
// 统一导出不是覆盖
// 注意这里的语法，不是 = {}
export {
  a,
  b
}

export const c = 3
