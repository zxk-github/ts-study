// 枚举成员
enum ConstNumber {
  // const 
  a, // 没有初始值
  b = ConstNumber.a, // 对枚举的引用
  c = 1 + 2 // 表达式
}

// 枚举成员
enum CaulateNumber {
  // 需要被计算的枚举成员
  c = Math.random()
}

// 常量枚举
const enum Month{
  Jan,
  Feb
}
const month = [Month.Jan, Month.Feb]

// 枚举类型
enum E {a, b};  
enum F {a = 0, b = 1};
enum G {a = 'apple', b = 'banana'};

let e: E = 3;
let f: F = 3;

let e1: E.a = 10;

// let g1: G = 'a' 字符串枚举只能定义枚举成员的值
let g1: G = G.a;

console.log(e1)



