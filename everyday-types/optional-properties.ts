/**
 *
 * 对象类型可以指定它们的部分或者全部属性是可选的
 *
 * 添加 ? 在属性名称之后即可
 *
 */

function printName(name: {first: string, last?: string}) {
  //...
}

printName({first: 'a'})
printName({first: 'a', last: 'b'})

/**
 *
 * 在 js 中，若访问一个不存在的属性，会得到 undefined，而不是运行时的错误
 *
 * 因此，在从可选属性中读取数据时，必须要使用前检查 undefined
 *
 */

function printName2(name: {first: string, last?: string}) {
  // (property) last?: string | undefined
  // Object is possibly 'undefined'
  console.log(name.last.toUpperCase())

  // 推荐使用
  console.log(name.last?.toUpperCase())

  // or
  if(name.last !== undefined) {
    console.log(name.last.toUpperCase())
  }
}