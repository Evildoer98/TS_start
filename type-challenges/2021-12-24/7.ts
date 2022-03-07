// 复制一次
type MyReadonly<T> = {
  readonly [key in keyof T] : T[key]
}
