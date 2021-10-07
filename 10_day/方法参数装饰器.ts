// 4、方法参数装饰器
/**
 * 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数
 *      1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *      2、参数的名字
 *      3、参数在函数参数列表中的索引
 */

function logParams (params: any) {
    return function (target: any, methodName: any, paramsIndex: any) {
        console.log(params);  // xxx
        console.log(target);  // 原型对象
        console.log(methodName);  // getData
        console.log(paramsIndex);  // 0

        target.apiUrl = params
    }
}

class HttpClient6 {
    public url: any | undefined
    constructor () {

    }
    getData (@logParams('xxx') uid: any) {
        console.log(123456);   // 123456
    }
}

var http6:any = new HttpClient6() 
http6.getData(123456)
console.log(http6.apiUrl); // xxx











