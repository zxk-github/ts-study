interface Item {
  name: string,
  age: number;
  // [x: string]: any
}

interface List {
  data: Item[]
}

function render(arg: List):void {
  console.log(arg)
}

let a1 = {
  data: [
    {name: 'z', age: 2, class: 0}
  ]
}
render(a1);

/*
render({
  data: [
    {name: 'z', age: 2, class: 0}
  ]
} as List);

render(<List>{
  data: [
    {name: 'z', age: 2, class: 0}
  ]
});
*/

interface StrArr {
  [a: number]: string
}

let chars: StrArr = ['a', 'b']


// 数字索引返回值类型必须是字符串索引类型的子类型，因为ts在运行的时候，会把数字转换为字符串
interface names{
  [x: string]: string;
  // [i: number]: number
}

// 函数接口
let add1: (x: number, y: number) => number
interface Add {
  (x: number, y: number): number
}
type Add2 = (x: number, y: number) => number;


// 混合类型


// 函数
// 剩余运算符
function add2(x: number, ...res: number[]) {

}

// 函数重载
/** 
function add4(...res: number[]): number;
function add4(...res: string[]): string;
function add4(...res: any):void {
  let first = res[0];
  if(typeof first === 'string') {
    console.log('字符串')
  } else {
    console.log('数字')
  }
}
add4(1,2,3)
*/




// 类

class Dog {
  constructor(name: string) {
    // this.name = name;
  }
  name: string = '1' // 如果没有this.name = name那么就这在声明这个属性的时候初始化
  run() {

  }
} 


interface Human {
  // new(name: string): string
  name: string;
  eat(): void;
}

class Assian implements Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(){

  }
}

interface Man extends Human {
  cry(): void
}
interface Child {
  milk: number;
}

interface Boy extends Man, Child {
  
}


class Auto {
  state = 1;
}

interface AutoInterface extends Auto {

}

class A implements AutoInterface {
  state = 1;
}