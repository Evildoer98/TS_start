// 2、属性装饰器
/**
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：
 *      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2、成员对名字
 */

// 类装饰器
function logClass3(params: string) {
    return function (target: any) {
        console.log(target);
        console.log(params);
    }
}

// 属性装饰器
function logProperty(params: any) {
    return function (target: any, attr: any) {
        console.log(target);   // {getData: f, constructor: f}
        console.log(attr); // url
        target[attr] = params
    }
}

@logClass3('xxx')
class HttpClient3 {
    @logProperty('http://www.baidu.com/api')
    public url: any | undefined
    constructor () {

    }
    getData () {
        console.log(this.url);
    }
}

var http3 = new HttpClient3()
http3.getData()  // http://www.baidu.com/api







