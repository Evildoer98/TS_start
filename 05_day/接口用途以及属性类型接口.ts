/**
 *  接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用。
 *  接口定义了某一批类需要的遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类必须提供某些方法，提供这些方法的类就可以满足实际需要
 *  typescript 中的接口类似于 java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等 
 * 
 *  定义标准
 */

// 1. 属性接口

// ts 中定义方法
function printLabel (): void {
    console.log('printLabel');
}
printLabel()


// ts 中定义方法传入参数
function printLabel1 (label: string): void {
    console.log('printLabel');
}
printLabel1('Evildoer')


// ts 中自定义方法传入参数对 json 进行约束
function printLabel2(labelInfo: {label: string}):void {
    console.log('printLabel');
}
printLabel2({label: '张三'})


// 对批量方法传入参数进行约束
interface FullName1 {
    firstName: string;   // 注意 ; 结束
    lastName: string;
}
function printInfo (info: FullName1) {
    // 必须传入对象 firstName  lastName 
    console.log(info.firstName + '---' + info.lastName);
}
printInfo({firstName: '张', lastName: '三'})
var info = {
    // 传入的参数必须包含 firstName lastName
    age: 20,
    firstName: '李',
    lastName: '四'
}
printInfo(info)


// 接口: 行为和动作的规范，对批量方法进行约束
interface FullName2 {
    firstName: string;   // 注意 ; 结束
    lastName: string;
}
function printName (name: FullName2) {
    // 必须传入对象 firstName  lastName 
    console.log(name.firstName + '---' + name.lastName);
}

printName({firstName: '张', lastName: '三'})
var obj = {
    // 传入的参数必须包含 firstName lastName
    age: 20,
    firstName: '张',
    lastName: '三'
}
printName(obj)


// 接口: 可选属性
interface FullName3 {
    firstName: string;
    lastName?: string
}
function getName(name: FullName3) {
    console.log(name);
}
// 参数对顺序可以不一样
getName({firstName: '王'})
getName({firstName: '王', lastName: '五'})

