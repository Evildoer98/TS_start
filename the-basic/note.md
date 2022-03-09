# The Basic

## 概述

1. 在编译的时候就已经知道结果，而不是在运行时或运行后才知道结果
2. 类型是描述哪些值可以传递给 fn 以及哪些会崩溃的概念。js 仅真正提供动态类型 - 执行代码以查看会发生什么
3. 使用静态类型再运行之前预测预期的代码

## Static type-checking

## Non-exception Failures

```ts
  const user = {
    name: 'Evildoer98',
    age: 18
  }
  user.location;

  error: Property 'location' does not exist on type '{ name: string; age: number}'
```

静态系统能避免可避免的错误（eg：为定义的参数等）捕获合法的错误

1. typos 错别字
2. uncalled functions 未回调函数
3. or basic logic errors 基本逻辑错误

## Types for Tooling

类型检查器具有检查诸如我们是否正在访问变量和其他属性的正确属性之类的信息。一旦有了这些信息，它还可以开始建议您可能想要使用哪些属性。

## tsc, the TypeScript compiler

1. tsc TypeScript 编译器
2. tsc fileName.ts
3. tsc 将 fileName.ts 文件编译或转换为纯 JavaScript 文件后输出

## Emitting with Errors

tsc --noEmitOnError hello.ts 编译时不发出错误提示
No Emit On Error - noEmitOnError <https://www.typescriptlang.org/tsconfig#noEmitOnError>

如果报告了任何错误，请不要发出编译器输出文件，如 JavaScript 源代码、源映射或声明
这默认为 false，这使得在类似手表的环境中使用 TypeScript 变得更容易
在这种环境中，您可能希望在确保解决所有错误之前在另一个环境中查看代码更改的结果

忽视编译时所报的错误，知道自己在做什么

## Explicit Types

使用时类型声明是明确的

也可以进行类型推导
