"use strict";
// 函数的定义
// es5 定义函数的方法
// 函数声明
function demo() {
    return 'run';
}
// 匿名函数
var demo1 = function () {
    return 'run1';
};
// ts 中定义函数的方法
// 函数声明
function demo2() {
    return 'demo';
}
// 错误写法
// function demo3(): string {
//     return 123
// }
// 匿名函数 
var demo3 = function () {
    return 123;
};
alert(demo3()); // 调用
// ts 中定义方法传参
function getInfo(name, age) {
    return name + " --- " + age;
}
var getInfo1 = function (name, age) {
    return name + " --- " + age;
};
// 没有返回值的方法
function getInfo2() {
    console.log('123');
}
// 方法可选参数 ? 关键字
// es5 里面的方法的实参和行参可以不一样，但是 ts 中必须一致，如果不一样就需要配置可选参数
function getInfo3(name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 注意：可选参数必须配置到参数的最后面
// name?: string, age: number  错误写法
// 默认参数 = 关键字
// es5 中没法设置默认参数，es6 和 ts 中都可以设置默认参数
function getInfo4(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " --- " + age;
    }
    else {
        return name + " --- \u5E74\u9F84\u4FDD\u5BC6";
    }
}
// 剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
// 三点运算符,接受新参传过来的值
function sum1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function sum2(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function getInfo5(str) {
    if (typeof str === 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
function getInfo6(name, age) {
    if (age) {
        return '我叫' + name + '我的年龄是' + age;
    }
    else {
        return '我叫' + name;
    }
}
// 箭头函数 es6 
// this 的指向问题  箭头函数里面的 this 指向上下文
setTimeout(function () {
    console.log('123');
}, 1000);
