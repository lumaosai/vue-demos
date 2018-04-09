// 加载模块中 default 成员
import fn from './foo'

// 如何加载 export xxx 成员？
import {foo, num, a, c} from './foo'

// 一次性加载所有导出的成员（包括 default）
import * as fooModule from './foo'

fn()

console.log(foo)
console.log(num)
console.log(a)
console.log(c)

console.log(fooModule)
