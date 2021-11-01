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
// ts 中类的定义
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('张三');
p.run();
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p1 = new Person1('张三');
p1.getName(); // 张三
p1.setName('李四');
p1.getName(); // 李四
// ts 中实现继承  extends super
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    return Person2;
}());
var p2 = new Person2('王五');
p2.run(); // 王五在运动
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    return Web;
}(Person));
var w = new Web('李四');
w.run(); // 李四在运动
// ts 中继承的探讨   父类的方法和子类的方法一致
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    return Person3;
}());
var p3 = new Person3('王五');
p3.run(); // 王五在运动
var Web1 = /** @class */ (function (_super) {
    __extends(Web1, _super);
    function Web1(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    Web1.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    Web1.prototype.work = function () {
        alert(this.name + " \u5728\u5DE5\u4F5C");
    };
    return Web1;
}(Person3));
var w1 = new Web1('李四');
w1.run(); // 李四子类在运动
w1.work(); // 李四在工作
// 类里面的修饰符  typescript 里面定义属性的时候给我们提供了三种修饰符
// public 共有类型   在类里面 子类 类外面都可以访问
// private  私有类型    在类里面可以访问，子类和外面都没法访问
// protected  保护类型   在类里面、子类里面可以访问，在类外部没法访问
// 属性如果不加修饰符，默认就是 共有(public)
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    return Person4;
}());
var p4 = new Person4('王五');
p4.run(); // 王五在运动
var Web2 = /** @class */ (function (_super) {
    __extends(Web2, _super);
    function Web2(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    Web2.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    Web2.prototype.work = function () {
        alert(this.name + " \u5728\u5DE5\u4F5C");
    };
    return Web2;
}(Person4));
var w2 = new Web2('李四');
w2.work(); // 李四在工作
// 类外部访问共有属性
var p4 = new Person4('哈哈哈');
p4.name; // 哈哈哈
// 保护类型 类外部没法访问保护类型
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    Person5.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8";
    };
    return Person5;
}());
var p4 = new Person4('王五');
p4.run(); // 王五在运动
var Web3 = /** @class */ (function (_super) {
    __extends(Web3, _super);
    function Web3(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    Web3.prototype.work = function () {
        alert(this.name + " \u5728\u5DE5\u4F5C");
    };
    return Web3;
}(Person5));
var w3 = new Web3('李四');
w3.work(); // 李四在工作
// 私有类型
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    Person6.prototype.run = function () {
        return this.name + " \u5728\u8FD0\u52A8"; // 可以访问
    };
    return Person6;
}());
var Web4 = /** @class */ (function (_super) {
    __extends(Web4, _super);
    function Web4(name) {
        return _super.call(this, name) || this; // 初始化父类的构造函数
    }
    Web4.prototype.work = function () {
        // alert(`${this.name} 在工作`)  // 没法访问，会报错  Property 'name' is private and only accessible within class 'Person6'.ts(2341)
    };
    return Web4;
}(Person6));
