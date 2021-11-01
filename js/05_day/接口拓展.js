"use strict";
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
var Web5 = /** @class */ (function () {
    function Web5(name) {
        this.name = name;
    }
    Web5.prototype.eat = function () {
        console.log(this.name + '吃');
    };
    Web5.prototype.work = function () {
        console.log(this.name + '工作');
    };
    return Web5;
}());
var w5 = new Web5('小李');
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web6 = /** @class */ (function (_super) {
    __extends(Web6, _super);
    function Web6(name) {
        return _super.call(this, name) || this;
    }
    Web6.prototype.eat = function () {
        console.log(this.name + '吃');
    };
    Web6.prototype.work = function () {
        console.log(this.name + '工作');
    };
    return Web6;
}(Programmer));
var w6 = new Web6('Evildoer 写 ts 代码');
