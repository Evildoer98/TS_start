// ts 中类的定义
class Person {
    name: string // 属性，前面省略了 public 关键字
    constructor (n: string) { // 构造函数   实例化类的时候触发的方法
        this.name = n
    }
    run (): void {
        console.log(this.name);
    }
}

var  p = new Person('张三')
p.run()

class Person1 {
    name: string // 属性，前面省略了 public 关键字
    constructor (name: string) { // 构造函数   实例化类的时候触发的方法
        this.name = name
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
}

var  p1 = new Person1('张三')
p1.getName()   // 张三
p1.setName('李四')
p1.getName()   // 李四


// ts 中实现继承  extends super
class Person2 {
    name: string
    constructor (name: string) {
        this.name = name
    }
    run (): string {
        return `${this.name} 在运动`
    }
}
var p2 = new Person2('王五')
p2.run()   // 王五在运动

class Web extends Person {
    constructor(name: string) {
        super(name)   // 初始化父类的构造函数
    }
}
var w = new Web('李四')
w.run()   // 李四在运动

// ts 中继承的探讨   父类的方法和子类的方法一致

class Person3 {
    name: string
    constructor (name: string) {
        this.name = name
    }
    run (): string {
        return `${this.name} 在运动`
    }
}
var p3 = new Person3('王五')
p3.run()   // 王五在运动

class Web1 extends Person3 {
    constructor(name: string) {
        super(name)   // 初始化父类的构造函数
    }
    run (): string {
        return `${this.name} 在运动`
    }
    work() {
        alert(`${this.name} 在工作`)
    }
}
var w1 = new Web1('李四')
w1.run()   // 李四子类在运动
w1.work()  // 李四在工作

// 类里面的修饰符  typescript 里面定义属性的时候给我们提供了三种修饰符
// public 共有类型   在类里面 子类 类外面都可以访问
// private  私有类型    在类里面可以访问，子类和外面都没法访问
// protected  保护类型   在类里面、子类里面可以访问，在类外部没法访问
// 属性如果不加修饰符，默认就是 共有(public)
class Person4 {
    public name: string    // 共有属性
    constructor (name: string) {
        this.name = name
    }
    run (): string {
        return `${this.name} 在运动`
    }
}
var p4 = new Person4('王五')
p4.run()   // 王五在运动

class Web2 extends Person4 {
    constructor(name: string) {
        super(name)   // 初始化父类的构造函数
    }
    run (): string {
        return `${this.name} 在运动`
    }
    work() {
        alert(`${this.name} 在工作`)
    }
}

var w2 = new Web2('李四')
w2.work()  // 李四在工作
    // 类外部访问共有属性
    var p4 = new Person4('哈哈哈')
    p4.name // 哈哈哈

    // 保护类型 类外部没法访问保护类型
    class Person5 {
        protected name: string    // 共有属性
        constructor (name: string) {
            this.name = name
        }
        run (): string {
            return `${this.name} 在运动`
        }
    }
    var p4 = new Person4('王五')
    p4.run()   // 王五在运动
    
    class Web3 extends Person5 {
        constructor(name: string) {
            super(name)   // 初始化父类的构造函数
        }
        work() {
            alert(`${this.name} 在工作`)
        }
    }
    
    var w3 = new Web3('李四')
    w3.work()  // 李四在工作
    
    // 私有类型
    class Person6 {
        private name: string    // 共有属性
        constructor (name: string) {
            this.name = name
        }
        run (): string {
            return `${this.name} 在运动`   // 可以访问
        }
    }
    class Web4 extends Person6 {
        constructor(name: string) {
            super(name)   // 初始化父类的构造函数
        }
        work() {
            alert(`${this.name} 在工作`)  // 没法访问，会报错  Property 'name' is private and only accessible within class 'Person6'.ts(2341)
        }
    }
    
