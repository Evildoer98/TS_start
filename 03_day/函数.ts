// 函数的定义
// es5 定义函数的方法
    // 函数声明
    function demo() {
        return 'run'
    }   
    // 匿名函数
    var demo1 = function () {
        return 'run1'
    }

// ts 中定义函数的方法
    // 函数声明
    function demo2(): string {
        return 'demo'
    }
    // 错误写法
    // function demo3(): string {
    //     return 123
    // }

    // 匿名函数 
    var demo3 = function(): number {
        return 123
    }
    alert(demo3()) // 调用

    // ts 中定义方法传参
        function getInfo(name: string, age: number): string {
            return `${name} --- ${age}`
        }

        var getInfo1 = function(name: string, age: number): string {
            return `${name} --- ${age}`
        }

        // 没有返回值的方法
        function getInfo2():void {
            console.log('123');
        }

        // 方法可选参数 ? 关键字
            // es5 里面的方法的实参和行参可以不一样，但是 ts 中必须一致，如果不一样就需要配置可选参数
            function getInfo3(name: string, age?: number): string {
                if (age) {
                    return `${name} --- ${age}`
                } else {
                    return `${name} --- 年龄保密`
                }
            }
            // 注意：可选参数必须配置到参数的最后面
            // name?: string, age: number  错误写法

        // 默认参数 = 关键字
            // es5 中没法设置默认参数，es6 和 ts 中都可以设置默认参数
            function getInfo4(name: string, age: number=20): string {
                if (age) {
                    return `${name} --- ${age}`
                } else {
                    return `${name} --- 年龄保密`
                }
            }
        
        // 剩余参数
            function sum(a: number, b: number, c:number, d: number ): number {
                return a + b + c + d
            }

            // 三点运算符,接受新参传过来的值
            function sum1(...result: number[]): number {
                var sum = 0 
                for (let i = 0; i < result.length; i++) {
                    sum += result[i]
                }
                return sum
            }
            function sum2(a: number, ...result:number[]) {
                var sum = a
                for (let i = 0; i < result.length; i++) {
                    sum += result[i]
                }
                return sum
            }

// 函数重载
    // java 中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时就会出现函数重载的情况
    // typescript 中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的
    // ts 为了兼容 es5 以及 es6 重载的写法和 java 中有区别

    // es5 中出现同名方法，下面的会替换上面的方法
        // function css (config: any): any {
            
        // }
        // function css(config: any, value: any) {

        // }
    
    // ts 中的重载
        function getInfo5(name: string): string;

        function getInfo5(age: number): number;

        function getInfo5(str: any): any {
            if (typeof str === 'string') {
                return '我叫' + str
            } else {
                return '我的年龄是' + str
            }
        }

        

