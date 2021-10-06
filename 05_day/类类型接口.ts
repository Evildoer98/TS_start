// 类类型接口: 对类的约束  和 抽象类有点相似

interface Animal2 {
    name: string;
    eat(str: string): void
}

class Dog2 implements Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    eat () {
        console.log(this.name + '吃骨头');
    }
}

var d2 = new Dog2('小花')
d2.eat()

class Cat2 implements Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    eat (food: string) {
        console.log(this.name + '吃' + food);
    }
}

var c2 = new Cat2('小黑')
c2.eat('鱼')