// 数値
const num = 10;
// 文字列（シングルクオート'、ダブルクオート"で囲む）
const str = "10";
// 論理
const bool = true;
// 配列
const arr = [1, 2, 3];
// オブジェクト（キーは文字列orシンボル）
const obj = { first: "one", second: "two", third: "three" };

/* 型の判別 */
console.log(typeof num);
// 実行結果: number
console.log(typeof str);
// 実行結果: string
console.log(typeof bool);
// 実行結果: boolean
console.log(typeof arr, Array.isArray(arr));
// 実行結果: object true //配列はobjectの一種
console.log(typeof obj);
// 実行結果: object

/* 配列およびオブジェクトへのアクセス */
console.log(arr[2]);
// 実行結果: 3
console.log(obj.first);
// 実行結果: one
console.log(obj["second"]);
// 実行結果: two

/*
シンボルとは；一意性を保証する識別子
```
const sym1 = Symbol("desc");
const sym2 = Symbol("desc");
console.log(sym1 === sym2); //　実行結果: false
```
```
const sym = Symbol("key");
const obj = { [sym]: "value" };
console.log(obj[sym]); // "value"
```
*/
