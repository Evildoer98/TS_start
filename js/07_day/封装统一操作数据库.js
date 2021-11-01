"use strict";
/**
 * 功能：定义一个操作数据库的库   支持 Mysql Mssql MongoDb
 *
 * 要求：Mysql Mssql MongoDb 功能   都有 add、delete、get 方法
 *
 * 注意：约束统一的规范、以及代码重用
 *
 * 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
 *
 *      1、接口：在面向对象的变成中，接口是一种规范，它定义了行为和动作的规范
 *
 *      2、泛型：通俗理解：泛型就是解决  类  接口  方法的复用性
 */
// 定义一个操作 mysql 数据库的类   注意：要实现泛型接口，这个类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
// 定义一个操作 mssql 数据库的类
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
        console.log('数据库建立连接');
    }
    MssqlDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxxxx'
            },
            {
                title: 'xxx',
                desc: 'xxxxxx'
            }
        ];
        return list;
    };
    return MssqlDb;
}());
// 操作用户表    定一个 User类 和 数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
var oMysql = new MysqlDb(); // 类作为参数来约束数据传入的类型
oMysql.add(u);
var sMssql = new MssqlDb();
sMssql.add(u);
sMssql.get(1);
