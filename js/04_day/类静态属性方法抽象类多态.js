"use strict";
// 静态属性  静态方法
/**
es5 中的
function Person () {
    this.run1 = function () {}  // 实例化方法
}
Person.name = 'Evildoer'
Person.run2 = function () {}  // 静态方法
var p = new Person()
Person.run2() // 静态方法的调用
*/
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
var Demo = /** @class */ (function () {
    function Demo(name) {
        this.name = name;
    }
    Demo.prototype.run = function () {
        alert(this.name + " \u5728\u8FD0\u52A8");
    };
    Demo.prototype.work = function () {
        alert(this.name + " \u5728\u5DE5\u4F5C");
    };
    Demo.print = function () {
        // 静态方法   里面没法直接调用类里面的属性
        alert('print 方法 ' + Demo.sex);
    };
    Demo.sex = '男';
    return Demo;
}());
var d = new Demo('张三');
Demo.print(); // print 方法 男
console.log(Demo.sex); // 男
// 多态: 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // 具体吃什么   不知道     具体吃什么？继承它的子类去实现，每一个子类的表现不一样
    Animal.prototype.eat = function () {
        console.log('我能吃');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃骨头';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃鱼';
    };
    return Cat;
}(Animal));
// 抽象类 提供其他类继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现且必须在派生类中实现
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准     标准: Animal1  这个类要求它的子类必须包含 eat 方法
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
// var a = new Animal()  // 错误写法
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Dog1(name) {
        return _super.call(this, name) || this;
    }
    Dog1.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    return Dog1;
}(Animal1));
var d1 = new Dog('小花');
d1.eat(); // 小花吃骨头
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1(name) {
        return _super.call(this, name) || this;
    }
    Cat1.prototype.eat = function () {
        console.log(this.name + '吃鱼');
    };
    Cat1.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Cat1;
}(Animal1));
var c1 = new Cat('小黑');
c1.eat(); // 小黑吃鱼
