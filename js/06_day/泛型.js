"use strict";
/**
 * 泛型：软件工程中，不仅要创建一致的定义良好的 API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也支持未来的数据类型，这在创建大型系统时提供了十分灵活的功能
 *
 * 在像 C# 和 Java 中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
 * 这样用户就可以以自己的数据类型来定义组件
 *
 * 通俗理解：泛型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持
 */
// 只能返回 string 类型的数据
// function getData(value: string): string {
//     return value
// }
// 同时返回 string 类型 和 number 类型
// 写两种方法 （代码冗余）
/**
 * function getData1(value: string): string {
 *      return value
 * }
 * function getData2(value: number): number {
 *      return value
 * }
 */
// any 可以解决这个问题   any 放弃了类型检查，传入什么，返回什么：eg：传入 number 类型，必须返回 number 类型
/**
 * function getData(value: any): any {
 *      return 'Eviloder'
 * }
 */
// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一致
function getData(value) {
    return value;
}
getData(123);
getData('Evildoer');
// 泛型类
// eg: 有个最小堆算法，需要同时支持返回数字和字符串两种类型。   通过类的泛型来实现
/*
    class MineClass {
        public list: number[] = []
        add (num: number) {
            this.list.push(num)
        }
        min ():number {
            var minNum = this.list[0]
            for (let i = 0; i < this.list.length; i++) {
                if (minNum > this.list[i]) {
                    minNum = this.list[i]
                }
            }
            return minNum
        }
    }

    var m = new MineClass()
    m.add(2);
    m.add(3);
    m.add(1);
    m.add(4);
    m.add(5);

    console.log(m.min());  // 1
 */
var MineClass = /** @class */ (function () {
    function MineClass() {
        this.list = [];
    }
    MineClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MineClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MineClass;
}());
var m = new MineClass(); // 实例化类，并且指定了类的 T 代表的类型是 number
m.add(2);
m.add(3);
m.add(1);
m.add(4);
m.add(5);
console.log(m.min()); // 1
var m1 = new MineClass(); // 实例化类，并且指定了类的 T 代表的类型是 string
m1.add('a');
m1.add('c');
m1.add('d');
m1.add('e');
m1.add('f');
console.log(m1.min()); // a
