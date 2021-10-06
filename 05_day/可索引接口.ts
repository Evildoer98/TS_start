// 可索引接口: 数组、对象的约束 （不常用）
// ts 定义数组的方式
var arr: number[] = [123, 234]
var arr6: Array<string> = ['123', '234']

// 可索引接口: 对数组的约束
interface UserArr{
    [index: number]: string
}
var arr7:UserArr = ['123', '234']
console.log(arr[0]); // 123


// 可索引接口: 对对象的约束
interface UserObj {
    [index: string]:string
}

var arr8:UserObj = {name: '张三'}


