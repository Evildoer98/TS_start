"use strict";
// 函数类型接口: 对方法传入的参数 以及返回值进行约束    批量约束
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5('name', '张三'));
