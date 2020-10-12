abstract class Common {
  abstract skill(): void;
}

class Boy extends Common {
  skill() {
    console.log("我以小哥哥的身份实现了抽象类中的skill抽象方法");
  }
}

class Girl extends Common {
  skill() {
    console.log("我以小姐姐的身份实现了抽象类中的skill抽象方法");
  }
}
