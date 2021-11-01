"use strict";
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
var getData1 = function (value) {
    return value;
};
getData1('张三');
function getData2(value) {
    return value;
}
var myGetData = getData;
myGetData('Evildoer');
