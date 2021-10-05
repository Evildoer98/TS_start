"use strict";
// 布尔类型
var falg = true;
// 数字类型(对浮点型和整型没有明确的区分)
var a = 123;
a = 12.3;
// 字符串类型
var b = 'Evildoer';
// 数组类型 ts 中定义数组有两种方式
// 1
var arr1 = [1, 2, 3, 4];
var arr2 = ['js', 'ts', 'node'];
// 2 使用泛型
var arr3 = [1, 2, 3, 4];
var arr4 = ['js', 'ts', 'node'];
// 元组类型(tuple)  属于数组的一种
var arr5 = ['ts', 2.1, true];
// 枚举类型 (主要用于标识，一些固定值)
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f; // 1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red; // 1   没有赋值，默认打印索引值
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["blue"] = 5] = "blue";
    Color1[Color1["orange"] = 6] = "orange";
})(Color1 || (Color1 = {}));
var c = Color.blue; // 6   没有赋值，默认打印索引值(会以上一个的值为基准)
// 任意类型（any）
var num = 123;
num = 'string';
// null 和 undefined  其他（never 类型）数据类型的子类型
// var a1: number;
// console.log(a1)  // 输出 undefined 报错
var a2;
console.log(a2); // 输出 undefined 正确
// 定义没有赋值就是 undefined 
var a3;
// var a4: null;
// a4 = 123 // 报错
// 一个元素可能是 number 类型，可能是 null 可能是 undefined 
var a5;
// void 没有任何类型，一般用于定义方法的时候没有返回值
// es5
function run() {
    console.log('run');
}
run();
// 表示方法没有返回任何类型
function run1() {
    console.log('run1');
}
run1();
// 如果返回值是number类型
function run2() {
    return 1;
}
// never 类型: 是其他类型（包括 null 和 undefined）的子类型，表示从不会出现的值
// 这意味着声明 never 的变量只能被 never 类型所赋值
var b1;
b1 = undefined;
var b2;
b2 = null;
var b3;
// b3 = 123 // 报错
b3 = (function () {
    throw new Error("错误");
})();
