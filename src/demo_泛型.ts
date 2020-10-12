function add<T, P>(a: T, b: P, arr: T[]) {
  // 泛型在声明的时候，不做任何处理
  return `${a}${b}${arr}`;
}
// 调用的时候，传入具体的类型。
// console.log(
//   add<number, string>(1, "2", [1])
// );

interface Girl {
  name: string;
}
class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  say(index: number): string {
    return this.girls[index].name;
  }
}
const girlArr = [{ name: "张三" }, { name: "李四" }];
const selectGirl = new SelectGirl(girlArr);
console.log(selectGirl.say(1));
