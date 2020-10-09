/*
 * @Author: renzhi
 * @Date: 2020-09-30 10:32:21
 * @LastEditTime: 2020-10-09 11:40:38
 * @Description: 数据类型
 */
const num: number = 123; // 数字类型
const str: string = "lrz"; // 字符串类型
const obj: {
  // 对象类型
  name: string;
  age: number;
} = {
  name: "刘任志",
  age: 24,
};
const arr: string[] = ["str1", "str2"]; // 数组类型
const method: () => string = () => "字符串"; // 函数类型
class Person {}
const lrz: Person = new Person(); // 类类型
