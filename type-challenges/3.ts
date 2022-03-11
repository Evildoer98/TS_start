// // Omit 剔除属性
// type Omit = Pick<T, Exclude<keyof T, K>>


// type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

// type Diff<T, U> = T extends U ? never : T;
// type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// type myOmit = Pick<T, Diff<T, U>>
// type T31 = myOmit<"a" | "b" | "c" | "d", "b" | "d"> = "c"


//   in 只能用于 type，不能用于 interface

//  items entends unique

//  extends 在子类上扩展

// type A = (a: string) => {}
// type B = (a: string) => {}
// type B = () => {}

// function 返回值只能变少或者相等 形参相等或者少

// type D = (...arg: any[]) => any
// extends 不同的继承方式

// // error 不是具体类型
// function First(T extends any[]) {
//   return arr[0]
// }

// type P = ReturnType<typeof First<string>>

// unknown 和 any 的区别

// infer 只能用于 extends