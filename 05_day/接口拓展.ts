// 接口拓展: 接口可以继承接口
interface Animal3 {
    eat(): void;
}

interface Person7 extends Animal3 {
    work(): void;
}

class Web5 implements Person7 {
    public name: string
    constructor (name: string) {
        this.name = name
    }
    eat () {
        console.log(this.name + '吃');
    }
    work () {
        console.log(this.name + '工作');
    }
}

var w5 = new Web5('小李')



interface Animal4 {
    eat(): void;
}

interface Person8 extends Animal4 {
    work(): void;
}

class Programmer {
    public name: string
    constructor (name: string) {
        this.name = name
    }
    coding (code: string) {
        console.log(this.name + code);
    }
}

class Web6 extends Programmer implements Person8 {
    constructor (name: string) {
        super(name)
    }
    eat () {
        console.log(this.name + '吃');
    }
    work () {
        console.log(this.name + '工作');
    }
}

var w6 = new Web6('Evildoer 写 ts 代码')
