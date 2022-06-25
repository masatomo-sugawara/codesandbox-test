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
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "菅原";
// const age = 39;
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 30));

// 分割代入
// const myPlofile = {
//   name: "まさとも",
//   age: 39
// };

// //const message1 = `名前は${myPlofile.name}です。年齢は${myPlofile.age}歳です。`;
// //console.log(message1);

// const { name, age } = myPlofile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myPlofile = [`まさとも`, 39];
// const message3 = `名前は${myPlofile[0]}です。年齢は${myPlofile[1]}歳です。`;
// //console.log(message3);

// const [name, age] = myPlofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは！${name}さん！`);
// };
// sayHello("マサトモ");

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sumFunc(...arr1);
// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4, ...arr5];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// スプレッド構文を使わなくても直接代入すればコピーはできるが、オブジェクトの中身も引き継がれるので、片方を変更するとコピーしたオブジェクトも書き換わる。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// mapやfilterを使った配列処理
// const nameArr = ["田中", "山田", "まさとも"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
//console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "まさとも") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// newNameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

// ||は左側がfalseの場合は右側を返す
const num = null;
const fee = num || "金額未設定です";
// console.log(fee);

// &&は左がtrueの場合は右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
