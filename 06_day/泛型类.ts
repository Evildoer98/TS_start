// 泛类：泛类可以帮助我们避免重复的代码以及不特定数据类型的支持（类型校验）
// 1、定义个类
// 2、把类作为参数来约束数据传入的类型

/**
 * 定义一个 User 的类这个类的作用就是映射数据库字段
 * 然后定义一个 MysqlDb 的类这个类用于操作数据库
 * 然后把 User 类作为参数传入 MysqlDb 中
 * 
 * var user = new User({
 *      username: '张三‘，
 *      password: '123456'
 * })
 * var Db = new MysqlDb()
 * Db.add(user)
 */

// class User {
//     username: string | undefined;
//     password: string | undefined;
// }

// class MysqlDb {
//     add(user: User):boolean {
//         console.log(user);
//         return true
//     }
// }

// var u = new User()
// u.username = '张三'
// u.password = '123456'

// var Db = new MysqlDb()
// Db.add(u)


// 操作数据库的泛型类
class MysqlDb1<T> {
    add(info: T): boolean {
        console.log(info);
        return true
    }
    updated(info: T, id: number): boolean {
        console.log(info);
        console.log(id);
        return true
    }
}

// 想给 user 表增加数据

// 1、定义一个 User 类 和数据库进行映射
class User1 {
    username: string | undefined;
    password: string | undefined;
}

var u = new User1()
u.username = '张三'
u.password = '123456'

var Db = new MysqlDb1<User1>()
Db.add(u)

// 2、定义一个 ArticleCate 类 和数据库进行映射
class ArticleCate {
    title: string | undefined;
    desc: string | undefined;
    status: string | undefined;
    constructor(params: {
        title: string | undefined,
        desc: string | undefined,
        status?: string | undefined
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status
    }
}

var article = new ArticleCate({
    title: '分类',
    desc: '123456',
    status: 'Evildoer'
})

var Db1 = new MysqlDb1<ArticleCate>()
Db1.add(article)
