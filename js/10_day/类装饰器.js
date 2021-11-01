"use strict";
// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。传入一个参数
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.1 类装饰器：普通装饰器（无法传参）
function logClass(params) {
    console.log(params);
    // params 就是当前类
    params.prototype.apiUrl = '动态拓展的属性';
    params.prototype.run = function () {
        console.log('run 方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
http.run;
// 1.2 类装饰器：装饰器工厂（可传参）
function logClass1(params) {
    return function (target) {
        console.log(target); // f HttpClient() {}
        console.log(params); // hello
        target.prototype.apiUrl = params;
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
    };
    HttpClient1 = __decorate([
        logClass1('https://www.baidu.com/api')
    ], HttpClient1);
    return HttpClient1;
}());
var http1 = new HttpClient1();
console.log(http1.apiurl);
// 类装饰器
/**
 * 重载构造函数的例子
 *  类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
 *  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 */
function logClass2(target) {
    console.log(target);
    // 重载构造函数
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '修改后的apiUrl';
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + '----';
            console.log('----' + this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.apiUrl = '构造函数的 apiUrl';
    }
    HttpClient2.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient2 = __decorate([
        logClass2
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
http2.getData();
