// 布尔类型
var falg: boolean = true

// 数字类型(对浮点型和整型没有明确的区分)
var a: number = 123
a = 12.3

// 字符串类型
var b: string = 'Evildoer'

// 数组类型 ts 中定义数组有两种方式
    // 1
    let arr1: number[] = [1, 2, 3, 4]
    let arr2: string[] = ['js', 'ts', 'node']
    // 2 使用泛型
    let arr3: Array<number> = [1, 2, 3, 4]
    let arr4: Array<string> = ['js', 'ts', 'node']

// 元组类型(tuple)  属于数组的一种
let arr5:[string, number, boolean] = ['ts', 2.1, true]

// 枚举类型 (主要用于标识，一些固定值)
enum Flag {success = 1, error = -1}
var f: Flag.success   // 1

enum Color {red, blue, orange}
var c: Color = Color.red   // 1   没有赋值，默认打印索引值

enum Color1 {red, blue = 5, orange}
var c: Color = Color.blue   // 6   没有赋值，默认打印索引值(会以上一个的值为基准)

// 任意类型（any）
var num: any = 123
num = 'string'

// null 和 undefined  其他（never 类型）数据类型的子类型


// var a1: number;
// console.log(a1)  // 输出 undefined 报错

var a2: undefined
console.log(a2)  // 输出 undefined 正确

    // 定义没有赋值就是 undefined 
    var a3: number | undefined

    // var a4: null;
    // a4 = 123 // 报错

    // 一个元素可能是 number 类型，可能是 null 可能是 undefined 
    var a5: number | null | undefined

// void 没有任何类型，一般用于定义方法的时候没有返回值
    // es5
    function run () {
        console.log('run');
    }
    run()

    // 表示方法没有返回任何类型
    function run1(): void {
        console.log('run1');
    }
    run1()

    // 如果返回值是number类型
    function run2(): number {
        return 1
    }

// never 类型: 是其他类型（包括 null 和 undefined）的子类型，表示从不会出现的值
// 这意味着声明 never 的变量只能被 never 类型所赋值
    var b1: undefined
    b1 = undefined
    var b2: null
    b2 = null

    var b3: never
    // b3 = 123 // 报错

    b3 = (() => {
        throw new Error("错误");
    })()