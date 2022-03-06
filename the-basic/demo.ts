// 1.typos 错别字
const word = 'Hello World'

const res = word.toLocaleLowerCase()
const err = word.toLocalLowerCase()
// Property 'toLocalLowerCase' does not exist on type '"Hello World"'. Did you mean 'toLocaleLowerCase'?ts(2551)


// 2. uncalled function 未调用函数
// Error
function flipCoinError() {
  return Math.random < 0.5
  // Operator '<' cannot be applied to types '() => number' and 'number'.ts(2365)
}

// OK:
function flipCoinOk() {
  return Math.random() < 0.5
}

// 3. or basic logic errors 基本逻辑错误
const value = Math.random() < 0.5 ? 'a' : 'b'
// Error
if (value !== 'a') {
  //...
} else if (value === 'b') {
  // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.ts(2367)
  // Oops, unreachable
}

// OK:
if (value === 'a') {
  //...
} else if (value === 'b') {
  //...
} else {
  //...
}

// Error
// Parameter 'person' implicitly has an 'any' type.ts(7006)
// Parameter 'data' implicitly has an 'any' type.ts(7006)
function greetError(person, data){
  console.log(`Hello ${person}, today is ${data}`)
}
// Expected 2 arguments, but got 1.ts(2554)
greetError('Evildoer98')


function greetOk(person: string, data: string) {
  console.log(`Hello ${person}, today is ${data}`)
}

greetOk('Evildoer', '2021-3-6')