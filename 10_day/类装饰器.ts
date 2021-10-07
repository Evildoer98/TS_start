/**
 * 装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为
 * 
 * 通俗的讲 装饰器是一个方法，可以注入到类、方法、属性参数上来拓展类、属性、方法、参数的功能
 * 
 * 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 
 * 装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
 * 
 * 装饰器 es7的标准特性之一
 */

// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视、修改或替换类定义。传入一个参数

// 1.1 类装饰器：普通装饰器（无法传参）
function logClass (params: any) {
    console.log(params);
    // params 就是当前类
    params.prototype.apiUrl = '动态拓展的属性'
    params.prototype.run = function () {
        console.log('run 方法');
    }
}

@logClass
class HttpClient {
    constructor () {

    }
    getData () {

    }
}

var http:any = new HttpClient()
console.log(http.apiUrl);
http.run


// 1.2 类装饰器：装饰器工厂（可传参）
function logClass1 (params: string) {
    return function (target: any) {
        console.log(target);  // f HttpClient() {}
        console.log(params);  // hello
        target.prototype.apiUrl = params
    }
}

@logClass1('https://www.baidu.com/api')
class HttpClient1 {
    constructor () {

    }
    getData () {

    }
}

var http1:any = new HttpClient1()
console.log(http1.apiurl);

// 类装饰器
/**
 * 重载构造函数的例子
 *  类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数
 *  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
 */

function logClass2(target: any) {
    console.log(target);
    // 重载构造函数
    return class extends target {
        apiUrl:any = '修改后的apiUrl';
        getData () {
            this.apiUrl = this.apiUrl + '----'
            console.log('----' + this.apiUrl);
        }
    }
}

@logClass2
class HttpClient2 {
    public apiUrl: string | undefined
    constructor() {
        this.apiUrl = '构造函数的 apiUrl'
    }
    getData () {
        console.log(this.apiUrl);
    }
}

var http2 = new HttpClient2()
http2.getData()





