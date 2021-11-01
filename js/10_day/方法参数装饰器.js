"use strict";
// 4、方法参数装饰器
/**
 * 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数
 *      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2、参数的名字
 *      3、参数在函数参数列表中的索引
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params); // xxx
        console.log(target); // 原型对象
        console.log(methodName); // getData
        console.log(paramsIndex); // 0
        target.apiUrl = params;
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
    }
    HttpClient6.prototype.getData = function (uid) {
        console.log(123456); // 123456
    };
    __decorate([
        __param(0, logParams('xxx'))
    ], HttpClient6.prototype, "getData", null);
    return HttpClient6;
}());
var http6 = new HttpClient6();
http6.getData(123456);
console.log(http6.apiUrl); // xxx
