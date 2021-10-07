// 3、方法装饰器
/**
 * 它会被应用到方法的 属性描述符上，可以用来监视、修改或者替换方法定义
 * 
 * 方法装饰会在运行时传入下列3个参数：
 *      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2、成员对名字
 *      3、成员的属性描述符
 */

// 3、方法装饰器

// 3.1 
function logMethod (params: any) {
    return function (target: any, methodName: any, desc: any) {
        console.log(target);   //  原型对象
        console.log(methodName);  // getData 当前方法的名称
        console.log(desc);   // 

        target.apiUrl = 'xxx'
        target.run = function () {
            console.log('run 方法');
        }
    }
}

class HttpClient4 {
    public url: any | undefined
    constructor () {

    }
    @logMethod('https://www.baidu.com/api')
    getData () {
        console.log(this.url);
    }
}

var http4:any = new HttpClient4()
console.log(http4.apiUrl);  // xxx
http4.run() // run 方法


// 3.2  修改方法
function logMethod5 (params: any) {
    return function (target: any, methodName: any, desc: any) {
        console.log(target);   //  原型对象
        console.log(methodName);  // getData 当前方法的名称
        console.log(desc);   // 
        console.log(desc.value);  // getData () {}   当前方法
        // 修改装饰器的方法   把装饰器方法里面传入的所有参数改为 string 类型

        // 1、保存当前的方法
        var oMethod = desc.value

        desc.value = function (...args: any[]) {
            args = args.map((value) => {
                return String(value)
            })
            console.log(args);
            // 对象冒充
            oMethod.apply(this.args)
        }
    }
}

class HttpClient5 {
    public url: any | undefined
    constructor () {

    }
    @logMethod5('https://www.baidu.com/api')
    getData (...args: any[]) {
        console.log(args);
        console.log('getData 方法');
    }
}

var http5:any = new HttpClient5()
http5.getData(123, 'xxx') // [‘123’, 'xxx']    getData 方法


















