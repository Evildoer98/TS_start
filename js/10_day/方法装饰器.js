"use strict";
// 3、方法装饰器
/**
 * 它会被应用到方法的 属性描述符上，可以用来监视、修改或者替换方法定义
 *
 * 方法装饰会在运行时传入下列3个参数：
 *      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2、成员对名字
 *      3、成员的属性描述符
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 3、方法装饰器
// 3.1 
function logMethod(params) {
    return function (target, methodName, desc) {
        console.log(target); //  原型对象
        console.log(methodName); // getData 当前方法的名称
        console.log(desc); // 
        target.apiUrl = 'xxx';
        target.run = function () {
            console.log('run 方法');
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logMethod('https://www.baidu.com/api')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
console.log(http4.apiUrl); // xxx
http4.run(); // run 方法
// 3.2  修改方法
function logMethod5(params) {
    return function (target, methodName, desc) {
        console.log(target); //  原型对象
        console.log(methodName); // getData 当前方法的名称
        console.log(desc); // 
        console.log(desc.value); // getData () {}   当前方法
        // 修改装饰器的方法   把装饰器方法里面传入的所有参数改为 string 类型
        // 1、保存当前的方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            // 对象冒充
            oMethod.apply(this.args);
        };
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('getData 方法');
    };
    __decorate([
        logMethod5('https://www.baidu.com/api')
    ], HttpClient5.prototype, "getData", null);
    return HttpClient5;
}());
var http5 = new HttpClient5();
http5.getData(123, 'xxx'); // [‘123’, 'xxx']    getData 方法
