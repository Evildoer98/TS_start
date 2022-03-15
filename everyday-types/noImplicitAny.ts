/**
 *
 * 当没有指定类型时，在 ts 中不能从上下文推断出来时，编译器会默认为 any 类型
 *
 * 但是 any 没有经过类型检查
 *
 * 可以使用编译器标志 noImplicitAny 将任何隐式 any 标记为错误
 * https://www.typescriptlang.org/tsconfig#noImplicitAny
 *
 */

// 在某些不存在类型注释的情况下，TypeScript 将在无法推断类型时回退到变量的任何类型
// (parameter) s: any
// Parameter 's' implicitly has an 'any' type.ts(7006)
function noFun(s) {
  // No error?
  console.log(s.substr(3))
}

noFun(18)