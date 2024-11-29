// 変数（ブロック外でも有効のため非推奨）
var a = 1;
// 変数（ブロック内のみ有効）
let b = 2;
// 定数（ブロック内のみ有効、再代入不可）
const c = 3;

// 数値演算
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// ブロックスコープ
if (a === 1) {
  var d = 4;
  let e = 5;
  const f = 6;
}

console.log(d);
// eとfはブロック外で呼び出そうとしたためエラーが発生
// console.log(e);
// console.log(f);
