/**
 *
 * 联合类型
 *
 */

/**
 *
 * defining a union type
 *
 * 两种或多种其他类型组合的类型，表示可能是这些类型中的任何一种值
 *
 */

function printId(id: number | string) {
  console.log('my id is ' + id)
}

// ok
printId(18)
printId('Evildoer')

// error
// Argument of type '{ id: number; }' is not assignable to parameter of type 'string | number'.ts(2345)
printId({id: 18})


/**
 *
 * working with union types
 *
 * 若使用联合类型，使用的方法不能是仅针对一种类型的方法
 * 只有在对联合体的每个成员都有效的情况下才允许操作
 * 
 */

function printId2(id: number | string) {
  // Property 'toUpperCase' does not exist on type 'string | number'.
  // Property 'toUpperCase' does not exist on type 'number'.
  console.log(id.toUpperCase())
}