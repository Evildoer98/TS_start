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

// 解决以上问题，使用代码缩小联合
// 在 ts 中根据代码的结构为某个值推断出更具体的类型时，就会出现收窄

function printId3(id: number | string) {
  if (typeof id === 'string') {
    // id: string
    console.log(id.toLowerCase())
  } else {
    // id: number
    console.log(id)
  }
}

function welcomePeople(x: string[] | string) {
  if(Array.isArray(x)) {
    console.log(x.join('or'))
  } else {
    console.log(x)
  }
}

// 若所有成员都有共同点
// 如果联合中的每个成员都有一个共同的属性，则可以使用该属性而不会缩小范围
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3)
}

// 通过取每种类型的值的并集组成的