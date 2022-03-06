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
