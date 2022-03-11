// 实现内置参数泛型而不使用它
// https://github.com/type-challenges/type-challenges/blob/master/questions/3312-easy-parameters/README.md

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Params) => any ? Params : never

