// 类型警示
// js 支持 typeof 运算符。ts 期望它返回一组特定的字符串
// string、number、bigint、boolean、symbol、undefined、object、function

/**
 *  在 TS 中，检查 typeof 返回的值是一种类型保护。
 *  TS 编码了 typeof 如何对不同的值进行操作
 *  注意: typeof 不返回字符串 null
 */

function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    // Object is possibly 'null'.ts(2531)
    for(const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === 'string') {
    console.log(strs)
  } else {
    // do nothing
  }
}

// 在 JavaScript 中，typeof null 实际上是“对象”
