function log<T>(val: T): T {
  return val
}

log<string[]>(['a', 'b'])

type Log = <T>(value: T) => T
let myLog: Log = log;


class Log2<T> {
  run(value: T) {
    return value;
  }
}

interface Length {
  length: string
}
function log3<T extends Length>(value: T) {
  return value.length
}




interface Foo {
  bar: number
}

let foo = {} as Foo;
foo.bar = 1;