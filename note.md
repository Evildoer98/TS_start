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

## Erased Types

tsc 编译后会擦除掉类型

```ts
  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }

  greet("Evildoer98", new Date());
```

编译后的结果

```js
  "use strict";
  function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
  }
  greet("Evildoer98", new Date());
```

实际上没有任何浏览器或其他运行时可以在未修改的情况下运行 TypeScript。这就是 TypeScript 首先需要一个编译器的原因——它需要某种方式来剥离或转换任何 TypeScript 特定的代码，以便您可以运行它。大多数特定于 TypeScript 的代码都被删除了，同样地，我们的类型注释也被完全删除了。

## Downleveling(降级)

支持浏览器

```ts
  `Hello ${person}, today is ${date.toDateString()}!`;
```

```js
  "Hello " + person + ", today is " + date.toDateString() + "!";
```

运行 tsc --target es2015 hello.ts

```js
  function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  greet("Evildoer98", new Date());
```

## Strictness

可以选择严格模式，也可以选择非严格模式
在 tsconfig.json 中的 ‘strict’: true 会同时将他们全部打开
可以选择单独退出 noImplicitAny 和 strictNullChecks

## noImplicitAny

对更多的 any 进行约束，如果都是用 any，那是用 ts 将没有任何意义
打开 noImplicitAny 标志将对任何类型被隐式推断为 any 的变量发出错误

## strictNullChecks

默认情况下，像 null 和 undefined 这样的值可以分配给任何其他类型。

strictNullChecks 标志使处理 null 和 undefined 更加明确

# Everyday Types

## The primitives: string, number, and boolean

对 js 中一些原始类型的支持（string、number、boolean）

## Arrays

写法：Array<string> 以及string[]
范型：T<U>

其中：[number] 为元祖类型

## any

1. 特殊类型 any 没有经过类型检查
2. 用途：any 可以解决特定值导致类型检查错误
3. 不建议一直使用：对类型不能进行准确的规范
4. any 类型可以访问它的任意属性（其属性也是 any 类型）

## noImplicitAny

1. 编译器的配置
2. 不能推断出类型时，一般默认为 any
3. 关闭配置，可将隐式 any 标记为错误

## type annotations on Variables

1. const、var、let 声明变量时，可以选择添加类型注释显式指定变量类型
2. 类型注释将始终在输入的内容之后。
3. TS 会尽量推断出类型，但是类型声明会增加代码可读性
4. 变量的类型是根据其初始化程序的类型推断的，当初始值为 null 或者 undefined ，若不给出类型声明，类型推导就会出现问题

## functions

1. 允许指定函数的输入和输出值的类型
2. 参数类型注解：声明函数时，在参数后面加上类型注解，声明函数接受那些类型的参数
3. 当参数没有类型注释，TS 会检查传递的参数数量是否正确
4. 返回类型注解：添加函数返回类型注解，TS 会根据返回语句推断函数返回类型
5. 匿名函数：TS 会在调用它的时候，参数的类型自动赋于类型

## Object Types

1. 对象类型：关注其属性及其类型
2. 其中每个属性的类型都是可选的，若不给类型则自动赋与 any 类型
3. 可选属性使用 ? 符号
4. 使用可选属性时需要检测可选属性是否存在，否则会出现 undefined 的情况

## Union Types

* TS 中可以对类型进行组合使用

1. | 符号表示可能是这些类型中的任何一种的值
2. 符合联合类型时，在使用时应注意当前值是哪种类型，例如 number 和 string 对应的 API 是不同的，应在使用时进行区分，以及可能会出现共同属性
3. 联合类型会使得参数的类型变得多种多样，所以使用代码缩小联合范围，当 TS 可以根据代码的结构为某个值推断出更具体的类型时，就会出现收窄（eg: isArray 等等）

## Type Aliases

1. 通过类型别名可以多次使用同一个类型并用一个名称引用
2. 不能使用类型别名创建相同类型的不同版本，避免两种类型都是同一类型的别名

## interface

1. 接口声明是命名对象类型的另一种方式
2. TS 只关心是否具有预期的属性，只关心类型的结构和功能是 TS 为结构类型系统的原因

### 接口和别名的区别：接口的几乎所有功能都可以在类型中使用，关键区别在于不能重新打开类型以添加​​新属性（再次重新使用并给新的属性），而接口始终可扩展

## Type Assertions

1. 当 TS 推断不出来类型时，并且需要告诉 TS 做的是正确的，使用断言
2. 像类型注释一样，类型断言被编译器删除，不会影响代码的运行时行为，所以没有与类型断言关联的运行时检查。如果类型断言错误，不会产生异常或 null。
3. TS 只允许类型断言转换为更具体或更不具体的类型（unknown）版本
4. 使用 as 不允许可能有效的更复杂的强制转换，解决这个问题使用双重 as（(eg as any/unknown) as T）

## Literal Type（字面量类型）

1. 除了一般类型的字符串和数字外，我们还可以在类型位置引用特定的字符串和数字
2. JavaScript 使用不同的方法来声明变量。 var 和 let 都允许更改变量中保存的内容，而 const 则不允许。这反映在 TypeScript 如何为字面量创建类型

```ts
  let x: 'hello' = 'hello'
  ok: x = 'hello'
  error: x = 'test'
```

3. 联合字变量

```ts
  let alignment: 'left' | 'right' | 'up' | 'down'
  let a: 1 | 0 | -1
  interface Options {
    width: number;
  }
  function configure(x: Options | "auto") {}
```

* 布尔类型本身也是联合 true | false

4. 字面量也同样会进行推导，可以使用断言或者const 对字面量进行约束

## null and undefined

1. undefined 未初始化的值
2. null 不存在
3. strictNullChecks 控制是否对 null 和 undefined 进行检查

## Non-null Assertions Operator（Postfix !）

1. 非空断言符号!: 可以在不进行任何显式检查的情况下从类型中删除 null 和 undefined
2. ！在任何表达式实际上是该值不为空或未定义的类型断言之后
3. 不会影响运行时的行为

## Enums

允许描述一个值，该值可能是一组可能的命名常量之一

## Less Common Primitives

1. bigint: 用于非常大的整数
2. symbol: JavaScript 中有一个原语用于通过函数 Symbol() 创建全局唯一引用

# Narrowing

通过判断条件对类型进行收窄

## typeof type guards

1. string、number、bigint、boolean、symbol、undefined、object、function
2. 在 TS 中，检查 typeof 返回的值是一种类型保护。因为 TypeScript 编码了 typeof 如何对不同的值进行操作，并且 typeof 不返回字符串 null（typeof null 实际上是“对象object”）

## Truthiness narrowing

1. 可以通过布尔函数或使用较短的双布尔否定来将值强制为布尔值（双布尔的优点是 TypeScript 推断出一个狭窄的字面量布尔类型 true，而将第一个推断为布尔类型）
2. 是在防范 null 或 undefined 之类的值

## Equality narrowing

通过使用相等条件对类型进行收窄
== 伪相等，eg: null 和 undefined 会被判断为一样的
=== 全等
!= 伪不等
!== 全不等

## The in operator narrowing

使用 in 操作符对类型进行收窄
eg: 'swim' in animal

## instanceof narrowing

使用实例收窄，相当于检查原型链
eg: x instanceof Date

## Assignments

在最开始定义变量可以直接给出结果类型，二次赋值依旧会对类型进行检查
eg:

```ts
let x = Math.random() < 0.5 ? 10 : 'test'
    ok: x = 1
    error: x = true
```

## Control flow analysis

通过条件判断进行类型收窄
eg: if else, switch

## Using type predicates

使用类型谓词对变量类型进行指定
eg:

```ts
  function isDog(pet: Bird | Dog): pet is Dog {}
```

## Discriminated unions

对可选类型属性类型，使用它可能会被类型检测出为空的错误
当使用者知道在当前条件下可选参数不可能出现为空时，可使用!
超过两种类型对象时，并且拥有公共属性，可判断公共属性对类型进行区分

## The never type

类型收窄当收到没有类型符合时，会出现 never，never 类型表示不可抵达的类型，不应该存在的情况
never 类型可以分配给每种类型，但是没有任何类型可以分配给 never（除了 never 本身）

## Exhaustiveness checking

对于枚举类型会进行穷举检查
eg: 在 switch 语句中应对所有条件进行符合条件处理，TS 会对类型进行详尽的检查

# More on Functions

## Function Type Expressions

描述函数类型使用函数类型表达式，其中参数名称时必须的，若对参数不加类型则会默认为 any 类型
可以使用类型别名来命名函数类型
eg:

```ts
  type testFunction = (test: string) => void
```

## Call Signatures

在函数表达式中不允许声明属性，若需要声明属性可使用对象类型声明，回调签名
参数列表和返回类型之间使用: 而不是 =>
eg:

```ts
  type Test = {
    a: string;
    (b: string): boolean
  }
  function testFucntion(test: Test) {
    return test('test')
  }
```

## Construct Signatures

可以通过 new 关键词对构造函数进行使用，在有些特定的对象可以省略 new 关键词(Date等)
eg:

```ts
  interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
    (x: string): Date
  }
```

## Generic Functions

通用函数可以通过范型进行约束
eg:

```ts
  function firstElement<T>(arr: T[]): T | undefined {
    return arr[0]
  }
```

## Inference

TS 有类型推导系统，部分函数类型可以不进行约束
TS 可以根据函数表达式的返回值,推断输入类型参数的类型和输出类型参数

## Constraints

从使用函数的条件对类型进行函数的输入和输出进行约束

```ts
  function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
```

从上面的示例中可以推导出 a 和 b 不能是 number 类型，可能会是 字符串 和 数组类型

## Specifying Type Arguments

TS 可以直接指定类型参数

```ts
  function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
  }
```

在使用范型对函数进行约束时，使用应该指定函数参数类型，对函数类型进行约束
TS 泛型函数的指南

1. 从下往上推导类型时，使用类型参数本身类型而不是在约束它
2. 始终使用尽可能少的类型参数
3. 如果一个类型参数只出现在一个位置，需要重新考虑是否真的需要这个

可选参数依旧是使用 ? 对可选参数进行操作，可选参数在使用的时候可能会被TS类型系统推断出 undefined
在为回调编写函数类型时，不能编写可选​​参数，除非打算在不传递该参数的情况下调用该函数

在函数重载中，注意参数是否可选，仔细对参数个数进行检查，在使用的TS类型检查系统会按照参数最多(其中可选参数也会算入参数个数中)的以及其他固定参数的函数进行函数参数个数约束
eg:

```ts
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  ok: const d1 = makeDate(12345678);
  ok: const d2 = makeDate(5, 5, 5);
  // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
  error: const d3 = makeDate(1, 3);
```

在进行函数重载的时候需要对返回类型进行约束（返回类型必须一致）
尽可能使用联合类型的参数而不是函数重载
在函数声明中使用 this，this 的指向只会在这个函数内部

* 函数返回类型可能会有 void, unknown, object, never, Function

1. void 不返回任何值的函数将隐式返回未定义的值。void 虽然与 undefined 类似，但是 void 和 undefined 在 TS 中的意义是不一样的，当函数函数值为 void 时，函数不能返回任何值，当其中一个函数的返回值被赋值给另一个变量时，它会保留 void 的类型
返回类型 void 函数的 void 返回类型可能会产生一些不寻常但预期的行为。返回类型为 void 的上下文类型不会强制函数不返回某些内容。另一种说法是具有 void 返回类型（type vf = () => void）的上下文函数类型，当实现时，可以返回任何其他值，但会被忽略。 类型 () => void 的实现是有效的

2. 特殊类型对象指的是任何非原始值（字符串、数字、bigint、布尔值、符号、null 或未定义）。这与空对象类型 { } 不同，也与全局类型 Object 不同。你很可能永远不会使用 Object
在 JavaScript 中，函数值是对象：它们具有属性，在其原型链中有 Object.prototype，是 instanceof Object，可以在它们上调用 Object.keys，等等。因此，函数类型在 TypeScript 中被视为对象
3. unknown: 未知类型代表任何值。这类似于 any 类型，但更安全，因为做任何未知值的事情都是不合法的
4. never: never 类型表示从未观察到的值。在返回类型中，这意味着函数抛出异常或终止程序的执行
5. Function: 这是一个无类型的函数调用，通常最好避免，因为不安全的任何返回类型。 如需要接受任意函数但不打算调用它，则 type () => void 通常更安全

在参数使用的时候可以使用拓展运算符（...）将剩余参数传递进去
可以对参数进行解构

```ts
  function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
  }
  // 另外写法
  type ABC = { a: number; b: number; c: number };
  function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
  }
```
