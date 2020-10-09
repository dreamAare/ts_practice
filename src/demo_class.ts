// 1.类的基础使用，继承，子类重写父类的方法
// class Person1 {
//   name = "hello world";
//   say() {
//     return this.name;
//   }
// }
// class Policeman extends Person1 {
//   // 重写父类里面的方法
//   say() {
//     // 调用父类中的方法
//     return super.say() + "你好";
//   }
// }
// let lrz1 = new Person1(); // 父类实例
// let policeman = new Policeman(); // 子类实例

// 2. 类的访问类型
// class Person1 {
//   // 1. public 类的内部和外部都可以读写，2 private 只有类的内部可以读写，3 protected 允许子类读写
//   protected name: string;
//   public say() {
//     console.log(this.name + "你好");
//   }
// }
// class Teacher extends Person1 {
//   public sayHello() {
//     this.name = "冉孟平";
//     return this.name;
//   }
// }

// // const person = new Person1();
// // person.name = "刘任志";
// // person.say();

// const teacher = new Teacher();
// console.log(teacher.sayHello());

// 3.类中的构造函数 constructor  继承时  必须调用一次super 方法
// class Person1 {
//   constructor(public name: string) {}
// }
// class Teacher extends Person1 {
//   constructor(public age: number) {
//     super("lrz");
//   }
// }

// // const rmp = new Person1("冉孟萍1");

// const teacher = new Teacher(18);
// console.log(teacher.age);
// console.log(teacher.name);

// 4. 类的getter, setter, static 静态变量和静态方法
class Xiaojiejie {
  constructor(private age: number) {
    this.age = age;
  }
  static str: string = "i love you";
  get _age() {
    return this.age;
  }
  set _age(age: number) {
    this.age = age;
  }
}

const rmp = new Xiaojiejie(28);
rmp._age = 12;
console.log(rmp._age);
console.log(Xiaojiejie.str);
