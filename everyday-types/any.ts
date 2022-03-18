/**
 *
 * 特殊类型 any
 * 任意类型，any 可以解决特定值导致类型检查错误，但不建议一直使用 any
 * any 类型可以访问它的任何属性（也是 any 类型）
 * 像函数一样调用它，将它分配给任意类型的值，基本上在语法上都是合法的
 *
 */


let anyObj: any = { x: 0 }

anyObj.foo()
anyObj()

anyObj.test = 100
anyObj = 'Evildoer98'

const n: number = anyObj

// 以上代码，虽然 anyObj 没有对应的属性，但是在语法上是合法的，是能通过 ts 类型检查的


