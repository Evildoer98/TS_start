/**
 *
 * 匿名函数
 *
 * 当一个函数出现在 TypeScript 可以确定如何调用它的地方时，该函数的参数会自动被赋予类型
 *
 */

const names = ['a', 'b', 'c']

names.forEach(function (s) {
  console.log(s.toUpperCase())
})

names.forEach((s) => {
  console.log(s.toUpperCase())
})

/**
 * 尽管参数 s 没有类型注释，TypeScript 还是使用了 forEach 函数的类型以及推断的数组类型确
 * 定 s 将具有的类型
 *
 * 因为函数发生的上下文告知它应该具有什么类型
 */