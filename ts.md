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

4. 自定义类型保护的类型谓词
    ```typescript
        function isNumber(x: any): x is number {
            return typeof x === 'number'
        }
        function isString(x: any): x is string {
            return typeof x === 'string'
        }
    ```
# 联合类型和类型别名
1. 联合类型
    联合类型通常与 null 或 undefined 一起使用
    ```typescript
    const sayHello = (name: string | undefined) => {

    }
    ```
    eg: 这里 name 的类型是 string | undefined 意味着可以将 string 或 undefined 的值传递给 sayHello 函数
    ```typescript
        sayHello('Evildoer')
        sayHello(undefined)
    ```
    通过这个示例，可以得知类型 A 和 类型 B 联合后的类型是同时接受 A 和 B 值的类型。此外，对于联合类型来说
    ```typescript
        let num: 1 | 1 = 1
        type EventNames = 'click' | 'scroll' | 'mousemove'
    ```
    以上示例中的 1 、2 或 'click' 被称为字面量类型，用来约束取值只能是某几个值中的一个
    
2. 可辨识联合
    typescript 可辨识 (Discriminated Unions) 类型，也称为代数数据类型或标签联合类型
    包含：可辨识、联合类型和类型守卫
    1. 可辨识
        可辨识要求联合类型中的每个元素都含有一个单例类型属性，比如:
        ```typescript
            enum CarTransmission {
                Automotic = 200,
                Manual = 300
            }
            interface Motorcycle {
                vType: 'motorcycle';
                make: number;
            }
            interface Car {
                vType: 'car';
                transmission: CarTransmission
            }
            interface Truck {
                vType: 'truck';
                capacity: number
            }
        ```
        定义了 Motocycle、Car 和 Truck 三个接口，在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而它的属性只跟特性的接口相关
    2. 联合类型
        基于以上定义的三个接口，创建一个 Vehicle 联合类型
        ```typescript
            type Vehicle = Motorcycle | Car | Truck
        ```
        使用 Vehicle 联合类型，对于 Vehicle 类型的变量，可以表示不同类型的车辆
    3. 类型守卫
        定义一个 evaluatePrice 方法，该方法用于根据车辆的类型、容量和评估因子来计算价格
        ```typescript
            const EVALUATION_FACTOR = Math.PI
            function evaluatePrice (vehicle: Vehicle) {
                return vehicle.capacity * EVALUATION_FACTOR
            }
            const myTruck: Truck = {vType: 'truck', capacity: 9.5}
            evaluatePrice(myTruck)
        ```
        报错：
        ```typescript
            Property 'capacity' does not exist on type 'Vehicle'
            Property 'capacity' does not exist on type 'Motorcycle'
        ```
        原因是在 Motorcycle 接口中，并不存在 capacity 属性，而对于 Car 接口来说，它也不存在 capacity 属性。
        使用类型守卫，重构前面定义的 evaluatePrice 方法
        ```typescript
            function evaluatePrice(vehicle: Vehicle) {
                switch(vehicle.vType) {
                    case "car":
                        return vehicle.transmission * EVALUATION_FACTOR
                    case "truck":
                        return vehicle.capacity * EVALUATION_FACTOR
                    case "motorcycle":
                        return vehicle.make * EVALUATION_FACTOR
                }
            }
        ```
        以上代码中，使用 switch 和 case 运算符来实现类型守卫，从而确保 evaluatePrice 方法中，可以安全的访问 vehicle 对象中所包含的属性，来正确的计算车辆的价格
3. 类型别名
    类型别名用来给一个类型起一个新名字
    ```typescript
        type Message = string | string[]
        let greet = (message: Message) => {
            // ...
        }
    ```

#  交叉类型
    在 typescript 中交叉类型是多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一个类型，它包含了所需的所有类型的特性
```typescript
    type PartialPointX = {x: number}
    type Point = PartialPointX & {y: number}
    let point: Point = {
        x: 1,
        y: 1
    }
```
    在上面代码中定义了 PartialPointX 类型，接着使用 & 运算符创建一个新的 Point 类型，表示一个含有 x 和 y 坐标的点，然后定义了一个 Point 类型的变量并初始化
1. 同名基础类型属性的合并
    eg：在合并多个类型的过程中，刚好出现某些类型存在相同的成员，当对应的类型又不一致
    ```typescript
        interface X {
            c: string;
            d: string;
        }
        interface y {
            c: number;
            e: string;
        }
        type XY = X & Y
        type YX = Y & X
        let p: XY
        let q: YX
    ```
    在以上代码中，接口 X 和接口 Y 都含有一个相同的成员 c，但它们都类型不一致，
    此时 XY 类型 或者 YX 类型中 成员 c 都类型是不是可以是 string 或 number 类型呢？
    ```typescript
        p = {c: 6, d: 'd', e: 'e'}
        // Type 'number' is not assignable to type 'never'
        // The expected type comes from property 'c' which
        p = {c: 'c', d: 'd', e: 'e'}
    ```
    接口 X 和 接口 Y 混入后，成员 c 的类型会变成 never ，因为混入后成员 c 的类型为 string & number，即成员 c 的类型既可以是 string 类型又可以是 number 类型。这种类型是不存在的。所以混入后成员 c 的类型为 never
2. 同名非基础类型属性的合并

# TypeScript 函数
1. TypeScript 函数 和 JavaScript 函数的区别
｜```|```|
|TypeScript|JavaScript|
|含有类型|无类型|
|箭头函数|箭头函数（ES2015）|
|函数类型|无函数类型|
|必填和可选参数|所有参数都是可选的|
|默认参数|默认参数|
|剩余参数|剩余参数|
|函数重载|无函数重载|

2. 箭头函数
    1. 常用
    ```typescript
        myBooks.forEach(() => console.log('reading'))
        myBooks.forEach(title => console.log('reading'))
        myBooks.forEach((title, index, arr) => console.log(index + '-' + title))
    ```
    2. eg
    ```typescript
        // 未使用箭头函数
        function Book () {
            let self = this
            self.publishDate = 2021
            setInterval(function () {
                console.log(self.publishDate)
            }, 1000)
        }

        // 使用箭头函数
        function Book () {
            this.publishDate = 2021
            setInterval(() => {
                console.log(this.publishDate)
            }, 1000)
        }
    ```
    3. 参数类型和返回类型
    ```typescript
        function createUserId (name: string, id: number): string {
            return number + id
        }
    ```
    4. 函数类型
    ```typescript
        let IdGenerator: (char: string, nums: number) => string;
        function createUserId(name: string, id: number): string {
            return num + id
        }
        IdGenerator = createUserId
    ```
    5. 可选参数及默认参数
    ```typescript
        // 可选参数
        function createUserId (name: string, id: number, age?: number): string {
            return name + id
        }
        // 默认参数
        function createUserId (
            name: string = 'Evildoer',
            id: number,
            age?: number
        ): string {
            return name + id
        }
    ```
    在声明函数时，可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。在实际使用时，需要注意到时可选参数要放在普通参数的后面，不然会导致编译错误
    6. 剩余参数
    ```typescript
        function push(array, ...items) {
            items.forEach(function(item) {
                array.push(item)
            })
        }
        let a = []
        push (a, 1, 2, 3)
    ```
    7. 函数重载
    函数重载或方法重载是使用相同名称和不同参数或类型创建多个方法的一种能力
    ```typescript
        function add(a: number, b: number): number;
        function add(a: string, b: string): string;
        function add(a: string, b: number): string;
        function add(a: number, b: string): string;
        function add(a: Combinable, b: Combinable) {
            if (typeof a === 'string' || typeof b === 'string') {
                return a.toString() + b.toString()
            }
            return a + b
        }
    ```
    在以上代码中，为 add 函数提供了多个函数类型定义，从而实现函数的重载。在 TypeScript 中除了可以重载普通函数之外，还可以重载类中的成员方法

    方法重载是指一个类中方法同名，参数不同（参数类型不同、参数个数不同或参数个数相同时参数的先后顺序不同），调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术。所以类中成员方法满足重载的条件时：在同一个类中，方法名相同且参数列表不同。
    ```typescript
        class Calculator {
            function add(a: number, b: number): number;
            function add(a: string, b: string): string;
            function add(a: string, b: number): string;
            function add(a: number, b: string): string;
            function add(a: Combinable, b: Combinable) {
                if (typeof a === 'string' || typeof b === 'string') {
                    return a.toString() + b.toString()
                }
                return a + b
            }
        }
        const calculator = new Calculator()
        const result = calculator.add('Evildoer', 'Evildoer09')
    ```
    在 TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。如果匹配的话就使用这个。因此，在定义重载的时候，一定要把最精确的定义放在最前面。
    在 Calculator 类中，add(a: Combinable, b: Combinable) {} 并不是重载列表的一部分，因此对于 add 成员方法来说，只定义了四个重载方法。

# TypeScript 数组
1. 数组解构
```typescript
    let x: number;
    let y: number;
    let z: number;
    let array = [1, 2, 3, 4, 5]
    [x, y, z] = array
```
2. 数组展开运算符
```typescript
    let array = [1, 2]
    let array1 = [...array, 3, 4, 5]
```
3. 数组遍历
```typescript
    let colors: string[] = ['red', 'green', 'blue']
    for (lei i of colors) {
        console.log(i)
    }
```

# TypeScript 对象
1. 对象解构
```typescript
    let person = {
        name: 'Evildoer',
        sex: '男',
        age: 20
    }
    let {name, sex, age} = person
```
2. 对象展开运算符
```typescript
    let person = {
        name: 'Evildoer',
        sex: '男',
        age: 20
    }
    // 组装对象
    let personWithAddress = {...person, adderss: 'China'}
    // 获取除了某些项外的其他项
    let {name, ...rest} = person
```





