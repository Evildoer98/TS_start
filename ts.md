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
