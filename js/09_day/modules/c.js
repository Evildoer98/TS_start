"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
var C;
(function (C) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    C.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function (food) {
            console.log(this.name + '吃' + food);
        };
        return Cat;
    }());
    C.Cat = Cat;
})(C = exports.C || (exports.C = {}));
