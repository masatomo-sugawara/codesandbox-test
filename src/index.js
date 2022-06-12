/**
 * const, let 等の変数宣言
 */

// var val1 = "varの変数";
// console.log(val1);

// // var変数の上書き
// val1 = "var変数の上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// // let変数を宣言
// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数は再宣言不可能";

// // const変数の宣言
// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数は上書き不可能";

// オブジェクトで定義したconst変数はプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };

// val4.name = "jake";
// val4.address = "tokyo";
// console.log(val4);

// 配列で定義したconst変数はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
