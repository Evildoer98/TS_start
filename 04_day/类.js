// es5 中的类
    // 1、最简单的类
        function Person() {
            this.name = '张三'
            this.age = 20
        }

        var person = new Person()
        console.log(person.name);
    
    // 2 构造函数和原型链里面增加方法
        function Person () {
            this.name = '张三'
            this.age = 20
            this.run = function () {
                console.log('hello' + this.name);
            }
        }
        // 原型链上面的属性会被多个实例共享，构造函数不会
        Person.prototype.sex = '男'
        Person.prototype.work = function () {
            console.log(this.name + '在工作');
        }
        var person = new Person() 
        console.log(person.run);
        console.log(person.work);

    // 3 类里面的静态方法
        function Person() {
            this.name = '张三'
            this.age = 20
            this.run = function () {
                alert(this.name + '在运动')
            }
        }
        Person.getInfo = function () {
            console.log('我是静态方法');
        }
        Person.prototype.sex = '男'
        Person.prototype.work = function () {
            alert(this.name + '在工作')
        }
        var p = new Person()
        p.work()
        // 调用静态方法
        Person.getInfo() 

// es5 中的继承   对象冒充实现
    function Person() {
        this.name = '张三'
        this.age = 20
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }

    // web 类 继承 Person 类    原型链 + 对象冒充的组合继承模式
    function Web() {
        Person.call(this) // 对象冒充实现基层
    }

    var w = new Web()
    w.run() // 张三在运动   对象冒充可以继承构造函数里面的属性和方法

    w.work() // 报错  但是没法继承原型链上面的属性和方法

// es5 中的继承   原型链实现继承
    function Person() {
        this.name = '张三'
        this.age = 20
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }

    // web 类 继承 Person 类    原型链 + 对象冒充的组合继承模式
    function Web() {
        
    }

    Web.prototype = new Person()  // 原型链实现继承  既可以继承构造函数里面的方法和属性，也可以继承原型链上的属性和方法

    var w = new Web()
    w.run() // 张三在运动   
    w.work() // 张三在工作

// 原型链实现继承的问题
    function Person(name, age) {
        this.name = name
        this.age = age
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }
    var p = new Person('李四', 30)
    p.run() // 李四在运动

    function Person(name, age) {
        this.name = name
        this.age = age
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }
    var p = new Person('李四', 30)
    p.run() // 李四在运动

    function Web(name, age) {
        
    }

    Web.prototype = new Person()  // 原型链实现继承  既可以继承构造函数里面的方法和属性，也可以继承原型链上的属性和方法

    var w = new Web('赵四', 40)  // 示例化子类的时候没法给父类传参
    // var w1 = new Web('王五', 50)
    w.run() //  undefined在运行
    w.work() // 张三在工作

// 原型链 + 构造函数组合继承

    function Person(name, age) {
        this.name = name
        this.age = age
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }
    var p = new Person('李四', 30)
    p.run() // 李四在运动

    function Web(name, age) {
        Person.call(this.name, this.age)   // 对象冒充继承，示例化之类可以给父类传参
    }

    Web.prototype = new Person()  // 原型链实现继承  既可以继承构造函数里面的方法和属性，也可以继承原型链上的属性和方法

    var w = new Web('赵四', 40)  // 示例化子类的时候没法给父类传参
    // var w1 = new Web('王五', 50)
    w.run() //  赵四在运行
    w.work() // 赵四在工作



    function Person(name, age) {
        this.name = name
        this.age = age
        this.run = function () {
            alert(this.name + '在运动')
        }
    }
    Person.prototype.sex = '男'
    Person.prototype.work = function () {
        alert(this.name + '在工作')
    }
    var p = new Person('李四', 30)
    p.run() // 李四在运动

    function Web(name, age) {
        Person.call(this.name, this.age)   // 对象冒充继承，可以继承构造函数里面的属性和方法，实例化子类
    }

    Web.prototype = Person.prototype

    var w = new Web('赵四', 40)  // 示例化子类的时候没法给父类传参
    // var w1 = new Web('王五', 50)
    w.run() //  赵四在运行
    w.work() // 赵四在工作