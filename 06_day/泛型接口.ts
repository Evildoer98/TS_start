// 函数类型接口
/**
 * interface ConfigFn {
 *      (value1: string, value2: string): string;
 * }
 * 
 * var setData:ConfigFn = function(value1: string, value2: string):string {
 *      return value1 + value2
 * }
 * 
 * setData('name','张三')
 */

// 


// 泛型接口
interface ConfigFn1 {
    <T>(value: T): T
}

var getData1:ConfigFn1 = function <T>(value: T): T {
    return value
}

getData1<string>('张三');

interface ConfigFn2<T> {
    (value: T): T
}
function getData2<T>(value: T): T {
    return value
}
var myGetData: ConfigFn2<string> = getData;
myGetData('Evildoer')
