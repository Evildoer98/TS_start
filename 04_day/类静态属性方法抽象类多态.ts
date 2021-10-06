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

    
class Demo {
    public name: string
    static sex: string = '男'
    constructor(name: string) {
        this.name = name
    }
    run () {
        alert(`${this.name} 在运动`)
    }
    work () {
        alert(`${this.name} 在工作`)
    }
    static print () {
        // 静态方法   里面没法直接调用类里面的属性
        alert('print 方法 ' + Demo.sex)
    }
}

var d = new Demo('张三')
Demo.print()  // print 方法 男
console.log(Demo.sex);  // 男


// 多态: 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承

class Animal {
    name: string 
    constructor (name: string) {
        this.name = name
    }
    // 具体吃什么   不知道     具体吃什么？继承它的子类去实现，每一个子类的表现不一样
    eat () {
        console.log('我能吃');
    }
}

class Dog extends Animal {
    constructor (name: string) {
        super(name)
    }
    eat () { 
        return this.name + '吃骨头'
    }
}

class Cat extends Animal {
    constructor (name: string) {
        super(name)
    }
    eat () {
        return this.name + '吃鱼'
    }
}

// 抽象类 提供其他类继承的基类，不能直接被实例化

// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现且必须在派生类中实现

// abstract 抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准     标准: Animal1  这个类要求它的子类必须包含 eat 方法

abstract class Animal1 {
    public name: string;
    constructor (name: string) {
        this.name = name 
    }
    abstract eat(): any;  // 抽象类的子类必须实现抽象类里面的抽象方法    不包含具体实现

}

// var a = new Animal()  // 错误写法

class Dog1 extends Animal1 {
    // 抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name: string) {
        super(name)
    }
    eat () {
        console.log(this.name + '吃骨头');
    }
}

var d1 = new Dog('小花')
d1.eat() // 小花吃骨头

class Cat1 extends Animal1 {
    constructor(name: string) {
        super(name)
    }
    eat() {
        console.log(this.name + '吃鱼');
    }
    run () {
        console.log('其他方法可以不实现');
    }
}

var c1 = new Cat('小黑')
c1.eat()  // 小黑吃鱼
