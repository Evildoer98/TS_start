# TypeScript JavaScript 的超集
## TypeScript 与 JavaScript 区别
|```|```|
|TypeScript|JavaScript|
|JavaScript的超集用于解决大型项目的代码复杂性|一种脚本语言，用于创建动态网页|
|可以在编译期间发现并纠正错误|作为一种解释性语言，只能在运行时发现错误|
|强类型，支持静态和动态类型|弱类型，没有静态类型支持选项|
|最终被编译成JavaScript代码，浏览器可以理解|可以在浏览器中使用|
|支持模块、泛型和接口|不支持模块、泛型或接口|
## 使用
* 安装
    yard add -g typescript
    npm install -g typescript
* 验证
    $tsc -v
* 编译
    $tsc demo.ts
* 工作流程
    ts -> 编译 -> js -> 打包 -> main.js -> 部署 -> main.js
* demo
    ```typescript
        function demo(person: string) {
            return 'hello' + person
        }
        console.log(demo('Evildoer'))
    ```
    ```javascript
        "use strict"
        function demo(person) {
            return 'hello' + person
        }
        console.log(demo('Evildoer'))
    ```
    person 参数的类型信息在编译后被擦除了。TypeScript只会在编译阶段对类型进行静态检查，如果发现错误，编译时就会报错。而在运行时，编译生成 JS 与普通的 JavaScript 文件一样，并不会进行类型检查。

# TypeScript 基础类型
1. Boolean 类型
    let isDo: boolean = false
    // es5: var isDo = false

2. Number 类型
    let count: number = 10
    // es5: var count = 10

3. String 类型
    let name: string = 'Evildoer'
    // es5: var name = 'Evildoer'

4. Symbol 类型
    const sym = Symbol()
    let obj = {
        [sym]: 'Evildoer'
    }
    console.log(obj[sym]) // Evildoer

5. Array 类型
    let list: number[] = [1, 2, 3]
    // es5: var list = [1, 2, 3]

    let list: Array<number> = [1, 2, 3] // Array<number> 泛型语法
    // es5: var list = [1, 2, 3]

6. Enum 类型
    使用枚举可以定义一些带名字的变量。使用枚举可以清晰地表达意图或创建一组有区别地用例。TypeScript 支持数字和基于字符串的枚举
    1. 数字枚举
    ```typescript
        enum Direction {
            NORTH,
            SOUTH,
            EAST,
            WEST
        }
        let dir: Direction = Direction.NORTH
    ```
        默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。即 Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3
    ```javascript
        "use strict";
        var Direction;
        (function (Direction) {
            Direction[(Direction["NORTH"] = 0)] = "NORTH";
            Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
            Direction[(Direction["EAST"] = 2)] = "EAST";
            Direction[(Direction["WEST"] = 3)] = "WEST";
        })(Direction || (Direction = {}));
        var dir = Direction.NORTH
    ```
    2. 字符串枚举
        在每一个字符串枚举里，每个成员都必须用字符串字面量，或者另外一个字符串枚举成员进行初始化
    ```typescript
        enum Direction {
            NORTH = 'NORTH',
            SOUTH = 'SOUTH',
            EAST = 'EAST',
            WEST = 'WEST'
        }
    ```
    ```javascript
        "use strict";
        var Direction;
        (function (Direction) {
            Direction["NORTH"] = "NORTH";
            Direction["SOUTH"] = "SOUTH";
            Direction["EAST"] = "EAST";
            Direction["WEST"] = "WEST";
        })(Direction || (Direction = {}));
    ```
        数字枚举和字符串枚举的编译结果中可知，数字枚举除了支持 从成员名称到值的普通映射之外，还支持 从成员值到成员名称的 反向映射
    ```typescript
        enum Direction {
            NORTH = 'NORTH',
            SOUTH = 'SOUTH',
            EAST = 'EAST',
            WEST = 'WEST'
        }
        let dirName = Direction[0] // NORTH
        let divVal = Direction["NORTH"] // 0
    ```
        对字符串枚举，不能省略任何初始化程序。而数字枚举如果没有显式设置值时，则会使用默认规则进行初始化
    3. 常量枚举
        使用 const 关键字修饰的枚举，常量枚举会使用内联语法，不会为枚举类型编译生成任何 JavaScript
    ```typescript
        const enum Direction {
            NORTH,
            SOUTH,
            EAST,
            WEST
        }
        let dir:Direction = Direction.NORTH
    ```
    ```javascript
        "use strict";
        var dir = 0 // NORTH
    ```
    4. 异构枚举
        异构枚举的成员值是数字和字符串的混合：
    ```typescript
        enum Enum {
            A,
            B,
            C = "C",
            D = "D",
            E = 8,
            F,
        }
    ```
    ```javascript
        "use strict";
        var Enum;
        (function (Enum) {
            Enum[Enum["A"] = 0] = "A";
            Enum[Enum["B"] = 1] = "B";
            Enum["C"] = "C";
            Enum["D"] = "D";
            Enum[Enum["E"] = 8] = "E";
            Enum[Enum["F"] = 9] = "F";
        })(Enum || (Enum = {}));
    ```
        数字枚举相对字符串枚举多了“反向映射”
    ```javascript
        console.log(Enum.A) // 输出 0
        console.log(Enum[0]) // 输出 A
    ```

7. Any 类型
    在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）
    ```typescript
        let notSure:any = 666;
        notSure = "Evildoer";
        notSure = false;
    ```
    any 类型本质上是类型系统的一个逃逸仓。TypeScript 允许对 any 类型的值执行任何操作，而无需事先执行任何形式对检查
    ```typescript
        let value: any
        value.foo.bar 
        value.trim()
        value()
        new value()
        value[0][1]
    ```
    注意：使用 any 类型就无法使用 typescript 对保护机制。
    故解决 any 带来的问题，引入了 unknown 类型

8. Unknown 类型
    所有类型都可以赋值给 any，所有类型也同样可以赋值给 unknow。
    unknow 顶级类型
    ```typescript
        let value: unknown;
        value = true; // OK
        value = 42; // OK
        value = "Hello World"; // OK
        value = []; // OK
        value = {}; // OK
        value = Math.random; // OK
        value = null; // OK
        value = undefined; // OK
        value = new TypeError(); // OK
        value = Symbol("type"); // OK
    ```
    对 value 变量的所有赋值都被认为是类型正确的
    但是如果将类型为 unknown 的值赋值给其他类型就会报错
    ```typescript
        let value: unknown;
        let value1: unknown = value; // OK
        let value2: any = value; // OK
        let value3: boolean = value; // Error
        let value4: number = value; // Error
        let value5: string = value; // Error
        let value6: object = value; // Error
        let value7: any[] = value; // Error
        let value8: Function = value; // Error
    ```
    unknow 类型只能被赋值给 any 类型和 unknown 类型本身。
    只有能够保存任意变量类型值的容器才能保存 unknown 类型的值
    ```typescript
        let value: unknown;
        value.foo.bar; // Error
        value.trim(); // Error
        value(); // Error
        new value(); // Error
        value[0][1]; // Error
    ```
    将 value 变量类型设置为 unknown 后，这些操作都不再被认为是正确的。通过 any 类型改变为 unknown 类型，禁止任何更改

9. Tuple 类型
    数组一般由同种类型的值组成，当需要在单个变量中存储不同类型的值时，使用元组。
    元组可用于定义具有有限数量的的未命名的类型。每个属性都有一个关联的类型。使用元组时，必须提供每个属性的值
    ```typescript
        let tupleType: [string, boolean];
        tupleType = ["Evildoer", true]
    ```
    定义了一个名为 tupleType 当变量，它的类型时一个类型数组[string, boolean]，然后按照类型依次初始化 tupleType 变量。与数组一样，可以通过下标来访问元组的元素    
    ```typescript
        console.log(tupleType[0]) // Evildoer
        console.log(tupleType[1]) // true
    ```
    在元组初始化的时候，如果出现类型不匹配的话，就会直接报错

10. Void 类型
    表示没有任何类型。当一个函数没有返回值时，返回值的类型时 void
    ```typescript
        // 声明函数返回值为 void
        function warnUser(): void {
            console.log('Evildoer')
        }
    ```
    ```javascript
        "use strict";
        function warnUser() {
            console.log('Evildoer')
        }
    ```
    注意：声明一个 void 类型的变量没有什么作用，因为在严格模式下，它的值只能为 undefined
    ```typescript
        let unusable: void = undefined;
    ```

11. Null 和 Undefined 类型
    TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null
    ```typescript
        let u: undefined = undefined;
        let n: null = null
    ```

12. object, Object 和 {} 类型
    1. object 类型
        object 类型是: TypeScript 引入的新类型，它用于表示非原始类型
        ```typescript
            interface ObjectConstructor {
                create(o: object | null): any
            }
            const proto = {}
            Object.create(proto)   // ok
            Object.create(null)   // ok
            Object.create(undefined)   // error
            Object.create(1048)   // error
            Object.create(true)   // error
            Object.create("Evildoer")   // error
        ```
    2. Object 类型
        Object 类型：它时所有 Object 类的实例的类型，它由以下两个接口来定义:
        *  Object 接口定义了 Object.prototype 原型对象上的属性
            ```typescript
                interface Object {
                    constructor: Function;
                    toString(): string;
                    toLocaleString(): string;
                    valueOf(): Object;
                    hasOwnproperty(v: PropertyKey): boolean;
                    isPrototypeOf(v: Object): boolean;
                    propertyIsEnumerable(v: PropertyKey): boolean;
                }
            ```
        * ObjectConstructor 接口定义了 Object 类的属性
            ```typescript
                interface ObjectConstructor {
                    new(value?: any): Object;
                    (value?: any): any;
                    readonly prototype: Obejct;
                    getPrototypeOf(o: any): any;
                }
                declare var Object: ObjectConstructor;
            ```
        * Object 类的所有实例都继承了 Object 接口中的所有属性
    3. {} 类型
        {} 类型描述了一个没有成员的对象。当试图访问这样的一个对象的任意属性时，typescript 会产生一个编译时错误
        ```typescript
            const obj = {};
            obj.prop = "Evildoer";
        ```
        可以使用在 Object 类型上定义的所有属性和方法，这些属性和方法可以通过 js 的原型链隐式地使用
        ```typescript
            const obj = {};
            obj.toString();
        ```
13. Never 类型
    never 类型表示的时那些永不存在的值的类型。
    eg: never 类型时那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
    ```typescript
        function error (message: string): never {
            throw new Error(message)
        }
        function infiniteLoop(): never {
            while (true) {}
        }
    ```
    在 TypeScript 中，可以利用 never 类型的特性来实现全面性检查
    ```typescript
        type Foo = string | number;
        function controlFlowAnalysisWithNever(foo: Foo) {
            if (type foo === 'string') {
                // 这里 foo 被收窄为 string 类型
            } else if (typeof foo === 'number') {
                // 这里 foo 被收窄为 number 类型
            } else {
                // foo 在这里是 never
                const check: never = foo;
            }
        }
    ```
    在 else 分支里面，把收窄为 never 的 foo 赋值给一个显示声明的 never 变量。如果逻辑正确。那么久能编译通过
    如果修改了 Foo 类型
    ```typescript
        type Foo = string | number | boolean
    ```
    忘记修改 controlFlowAnalysisWithNever 方法中的控制流程，这时候 else 分支的 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，这时就会产生一个编译错误。通过这个方式，我们可以确保controlFlowAnalysisWithNever 方法总是穷尽了 Foo 的所有可能类型。 
    通过这个示例: 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。

# TypeScript断言
    通过类型断言这种方式告诉编译器，“相信我，我知道自己在干什么"。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
1. 断言类型
    1. “尖括号”语法
    ```typescript
        let value: any = "Evildoer"
        let length: number = (<string>value).length
    ```
    2. as 语法
    ```typescript
        let value: any = "Evildoer"
        let length: number = (value as string).length
    ```
2. 非空断言
    在上下文中当类型检查器无法判定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和 非 undefined 类型。
    具体：x! 将从 x 值域中排除 null 和 undefined
    1. 忽略 undefined 和 null 类型
    ```typescript
        function Fun(test: string | undefined | null) {
            // type ‘string | null | undefined' is not assignable to type 'string'
            // type 'undefined' is not assignable to type 'string'
            const demo: string = test // error
            const hello: string = test   // ok
        }
    ```
    2. 调用函数时忽略 undefined 类型
    ```typescript
        type NumGenerator = () => number
        function Fun(numGenerator: NumGenerator | undefined) {
            // Object is possibly 'undefined'
            // cannot invoke an object which is possibly 'undefined'
            const num1 = numGenerator()   // error
            const num2 = numGenerator!()  // ok
        }
    ```
    因为 ! 非空断言操作符会从编译生成的 JavaScript 代码中移除。
    ```typescript
        const a: number | undefined = undefined
        const b: number = a!
        console.log(b)
    ```
    ```javascript
        "use strict"
        const a = undefined;
        const b = a
        console.log(b)
    ```
    在 TS 中，使用了非空断言，使得 const b: number = a!; 语句可以通过 typescript 类型检查器的检查。但是在生成的 es5 代码中，! 非空断言操作符被移除了，所以在浏览器中执行以上代码，在控制台会输出 undefined
3. 确定赋值断言
    在 typescript 中，允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 typescript 该属性会被明确的赋值
    ```typescript
        let x: number
        initialize()
        console.log(2 * x)
        function initialize() {
            x = 10
        }
    ```
    上述代码异常信息：变量 x 在赋值被使用了
    解决方案：使用确定赋值断言
    ```typescript
        let x! : number;
        initialize()
        console.log(2 * x)
        function initalize() {
            x = 10
        }
    ```
    通过 let x!: number 确定赋值断言，typescript 编译器会知道该属性会被明确的赋值

# 类型守卫
    类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
    类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
    类型保护和特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值
1. in 关键字
    ```typescript
        interface Admin {
            name: string;
            privileges: string[]
        }
        interface Employee {
            name: string;
            startDate: Date;
        }
        type UnKnowEmployee = Emplyee | Admin;
        function printEmployeeInformation (emp: UnKnowEmployee) {
            console.log("name: " + emp.name);
            if ("privileges" in emp) {
                console.log("privileges" + emp.privileges)
            }
            if("startDate" in emp) {
                console.log("Start Date:" + emp.startDate)
            }
        }
    ```
2. typeof 关键字
    ```typescript
        function padLeft(value: string, padding: string | number) {
            if (typeof padding === 'number') {
                return Array(padding + 1).join(" ") + value
            }
            if (typeof padding === "string") {
                return padding + value
            }
            throw new Error(`Expected string or number, got '${padding}'`)
        }
    ```
    typeof 类型保护只支持两种形式：typeof v === 'typename' 和 typeof v !== typename，'typename' 必须是 ‘number'，'string'，'boolean‘ 或 'symbol‘。但是 typescript 并不会阻止与其他字符串比较，语言不会把那些表达式识别为类型保护
3. instanceof 关键字
    ```typescript
        interface Padder {
            getPaddingString(): string
        }
        class SpaceRepeatingPadder implements Padder {
            constructor(private numSpaces: number) {}
            getPaddingString () {
                return Array(this.numSpaces + 1).join(" ")
            }
        }
        class StringPadder implements Padder {
            constructor(private value: string) {}
            getPaddingString() {
                return this.value
            }
        }
        let padder: Padder = new SpaceRepeatingPadder(10)
        if (padder instanceof SpaceRepeatingPadder) {
            // padder 的类型收窄为 ‘SpaceRepeatingPadder’
        }
    ```


