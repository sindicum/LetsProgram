// 変数（ブロック外でも有効）
var a = 1
// 変数（ブロック内のみ有効）
let b = 2
// 定数（ブロック内のみ有効、再代入不可）
const c = 3

// 数値演算
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

const aaa = ['sss', 'dddd', 'cccc']
aaa.splice(2,1)
console.log(aaa)