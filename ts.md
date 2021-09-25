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
    person 参数的类型信息在编译后被擦除了
