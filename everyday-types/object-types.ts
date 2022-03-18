/**
 *
 * 对象类型
 *
 */

function printInfo(info: {name: string, age: number}) {
  console.log('the name is ' + info.name)
  console.log('the age is ' + info.age)
}

printInfo({name: 'Evildoer98', age: 18})

// ps: 每个属性的类型部分是可选的，若不指定，将会被假定为 any 类型