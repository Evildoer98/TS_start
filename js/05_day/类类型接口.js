"use strict";
// 类类型接口: 对类的约束  和 抽象类有点相似
var Dog2 = /** @class */ (function () {
    function Dog2(name) {
        this.name = name;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog2;
}());
var d2 = new Dog2('小花');
d2.eat();
var Cat2 = /** @class */ (function () {
    function Cat2(name) {
        this.name = name;
    }
    Cat2.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat2;
}());
var c2 = new Cat2('小黑');
c2.eat('鱼');
