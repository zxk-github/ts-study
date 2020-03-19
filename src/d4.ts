interface X {
  a: number
}
interface Y {
  a: number,
  b: number
}
let x: X = {a: 1}
let y: Y = {a: 1, b: 1}
x = y;
// y = x;


// 函数兼容性
// 函数参数
type Handler = (a: number, b: number) => void;
function hot(handle: Handler) {
  return handle;
}
hot(function(a: number) {})
hot(function(a: number, b: number){})
// hot(function(a: number, b: number, c: number){})

// 可选参数和剩余参数
let a = (a: number, b: number) => {}
let b = (a: number, b?: number) => {}
let c = (...args: number[]) => {}

a = b;
a = c;
// b = a;
// b = c;
c = a;
c = b


// strictFunctionTypes：true

interface W {
  a: number
}
interface Z {
  a: number,
  b: number
}

let p1 = (w: W) => {}
let p2 = (z: Z) => {}

p2 = p1;
// p1 = p2

enum Fruit {Apple, Banana};
enum Color {Red, Yellow};

let fruit: Fruit.Apple = 3;
let no: number = Fruit.Banana;
// let fruit2: Fruit.Apple = Color.Yellow;


class P{
  static a = 1
  constructor(public name: string) {
    
  }
  say (){}
  private a = 1
}
class P2{
  static b = 1
  constructor(public name: string) {
    
  }
  say() {}
}
let p12 = new P('a');
let p22 = new P2("1");
// p12 = p22;

interface Em<T>{

}
interface Em2<T>{

}

let obj1: Em<number> = {}
let obj2: Em<string> = {}

obj1 = obj2;

let FF1 = <T>(x: T) => {
  return x;
}

let FF2 = <T>(x: T) => {
  return x;
}

FF1 = FF2;