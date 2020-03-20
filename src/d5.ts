interface Dog1 {
  name: string
}
interface Cat {
  age: string
}
let pet: Dog1 & Cat = {
  name: 'a',
  age : '1'
}

let bb: 'a' | 1 = 1


interface Sq{
  kind: 'squa',
  size: number
}
interface Ret{
  kind: 'rec',
  width: number
}
type Shape = Sq | Ret;
function area(s: Shape) {
  switch(s.kind) {
    case "squa": 
      return s.size;
    case 'rec': 
      return s.width
  }
}


interface Obj1{
  a: number,
  b: string
}
let key: keyof Obj1 = 'a'


function getVal1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}



// 映射类型
interface Dog4 {
  name: string,
  age: number
}
type ReadDog = Readonly<Dog4>;
type PartialDog = Partial<Dog4>;
type PickDog = Pick<Dog4, "name">;
type RecordDog = Record<'x' | 'y', any>
type RecordDog2 = Record<string, any>

type TypeName<T> = 
  T extends string ? 'string': 
  T extends number ? 'number':
  T extends Function ? 'function' : 'object';

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;

//分布式条件类型
// 变成多个类型的条件类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y ) | (B extends U ? X : Y)



