// 实现一个类型 IsUnion，它接受一个输入类型 T 并返回 T 是否解析为一个联合类型

/**
 *
 * eg:
 * type case1 = IsUnion<string>  // false
 * type case2 = IsUnion<string|number>  // true
 * type case3 = IsUnion<[string|number]>  // false
 *
 */

type IsUnion1<T, U extends T = T> = T extends unknown ?
[U] extends [T] ? false : true
: false

type IsUnion2<T, B = T> = T extends T ?
[Exclude<B, T>] extends never[] ?
false : true
: never

// A extends A 导致A被分发，所以在[B] extends [A] 这里，B 是联合类型，而A 是分发类型，二者如果不等，那么表示A就是联合类型
type IsUnion3<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : false


