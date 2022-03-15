// 使用 const、var、let 声明变量时，可以选择添加类型注释以显式指定变量的类型

let myName1: string = 'Evildoer98'

// 在大多数情况下，ts 会尽可能地尝试自动推断代码中的类型
// 变量的类型是根据其初始化程序的类型推断出来的
let myName2 = 'Evildoer98' // 可自动推断出 myName2 是 string 类型
