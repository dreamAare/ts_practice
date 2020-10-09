/*
 * @Author: renzhi
 * @Date: 2020-10-09 15:23:44
 * @LastEditTime: 2020-10-09 16:11:55
 * @Description: Do not edit
 */
interface Girl {
  name: string;
  age: number;
  bust: number; // 胸围
  width?: number; // 非必传
  [propname: string]: any; // 键名为字符串类型，键值为任意类型
  say(): string; // 方法
}
interface Teacher extends Girl {
  teach(): void;
}

const women = {
  name: "冉猛平",
  age: 18,
  bust: 98,
  test: "love",
  say: () => {
    return "方法的实现";
  },
  teach() {
    console.log("我是老师的教学方法");
  },
};
const filterResume = (girl: Girl) => {
  if (girl.age <= 18 && girl.bust >= 90)
    console.log(`${girl.name} 恭喜你获得面试机会`);
  if (girl.age > 18 && girl.bust < 90) console.log(`${girl.name} 你被淘汰了`);
};
const getResume = (girl: Teacher) => {
  console.log(`${girl.name}年龄是${girl.age}`);
  console.log(`${girl.name}胸围是${girl.bust}`);
  console.log(`${girl.name}方法是${girl.teach()}`);
};
getResume(women);
// filterResume(women);
