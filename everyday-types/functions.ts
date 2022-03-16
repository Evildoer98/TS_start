// 允许指定函数的输入和输出值的类型

/**
 *
 * 参数类型注解:
 *
 * 声明函数时，可以在每个参数后面加上类型注解，声明函数接受哪些类型的参数。
 * 参数类型注释在参数名称之后
 *
 */

function greetFun(name: string) {
  console.log('Hello ' + name.toLocaleUpperCase() + '!')
}

// 当参数具有类型注释时，将检查该函数的参数
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
greetFun(18)

// 即使您的参数没有类型注释，TypeScript 仍会检查您传递的参数数量是否正确。
// Expected 1 arguments, but got 0.ts(2554)
// functions.ts(12, 19): An argument for 'name' was not provided.
greetFun()


/**
 *
 * 返回类型注解
 *
 * 可以添加返回类型注释。返回类型注释出现在参数列表之后
 *
 * TypeScript 将根据其返回语句推断函数的返回类型
 *
 */
function getAge(): number {
  return 18
}

