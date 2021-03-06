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


/**
 * 装饰器执行顺序
 *      属性 >> 方法 >> 方法参数 >> 类
 * 
 *  如果有多个同样的装饰器，会先执行后面的
 * 
 */