// typeof 类型守卫
// eg1:
function padLeft1(padding: number | string, input: string): string {
  throw new Error('Not implemented yes!')
}

// eg2:
function padLeft2(padding: number | string, input: string): string {
  // Argument of type 'string | number' is not assignable to parameter of type 'number'.
  // Type 'string' is not assignable to type 'number'.
  return " ".repeat(padding) + input
}

// eg3:
function padLeft3(padding: number | string, input: string) {
  if(typeof padding === "number") {
    return "".repeat(padding) + input
  }
  return padding + input
}

// 在我们的if检查中，TypeScript 将typeof padding === "number"其视为一种特殊形式的代码，称为类型保护。TypeScript 遵循我们的程序可以采用的可能执行路径来分析给定位置的值的最具体的可能类型。它着眼于这些特殊检查（称为类型保护）和分配，将类型精炼为比声明的更具体的类型的过程称为缩小。



