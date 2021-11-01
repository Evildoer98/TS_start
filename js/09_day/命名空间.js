"use strict";
/**
 * 命名空间：
 *      在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类、接口等放置到命名空间内
 *      同 java 的包、.Net 的命名空间一样，TypeScript 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
 *      命名空间内搭对象通过 export 暴露
 *
 * 命名空间和模块的区别：
 *      命名空间：内部模块，主要用于组织代码，避免命名冲突
 *      模   块：ts 的外部模块的简称，侧重代码的复用，一个模块里可能有多个命名空间
 */
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function (food) {
            console.log(this.name + '吃' + food);
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
var d3 = new A.Dog('小花');
d3.eat();
var c3 = new A.Cat('小黑');
c3.eat('鱼');
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function (food) {
            console.log(this.name + '吃' + food);
        };
        return Cat;
    }());
})(B || (B = {}));
var c_1 = require("./modules/c");
var d4 = new c_1.C.Dog('小花');
d3.eat();
var c4 = new c_1.C.Cat('小黑');
c3.eat('鱼');
