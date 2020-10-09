/*
 * @Author: renzhi
 * @Date: 2020-10-09 11:41:31
 * @LastEditTime: 2020-10-09 15:17:21
 * @Description: Do not edit
 */
const one = 1;
const two = 2;
const three = one + two; // 类型推断，ts自动帮你注解
const obj1: object = {
  name: "lrz",
  age: 18,
};

// 需要类型注解，因为函数内部的逻辑依赖于参数的数据类型
function getTotal(one: number, two: number): number {
  return one + two;
}
const total = getTotal(1, 2);

// 函数的返回类型为空时
function sayHello(): void {
  console.log("hello world");
}

// 函数参数为对象时，确定对象内部的数据类型
function add({ one, two }: { one: number; two: number }): number {
  return one + two;
}
const total1 = add({ one: 1, two: 2 });

// 数组类型 注解
let arr1: string[] = ["1", "2"];
// 数组内部的item为对象
type Lady1 = { name: string; age: number }; // 类型别名
class Lady2 {
  // 类型别名
  name: string;
  age: number;
}
const arr2: Lady1[] = [
  { name: "123", age: 12 },
  { name: "321", age: 21 },
];
const arr3: Lady2[] = [
  { name: "123", age: 12 },
  { name: "321", age: 21 },
];
