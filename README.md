# ts-study

**D1**
## 基础数据类型
1. 元组可以调用数组的push方法，增加元祖的元素，但是当通过下标访问增加的元素的时候，ts是不允许的。
2. 直接通过类型定义一个object对象，这时候修改对象的key值是不被允许的，因为仅仅定义了类型，并没有声明属性  
例如let obj:object = {x: 1}; obj.x=2; //error
3. 没有返回值的函数就是void类型
4. never表示永远不会有返回值错误抛出函数，死循环函数

## 枚举类型
枚举：一组具有名字的常量集合
#### 枚举类型
1. 数字枚举：可以进行反向映射，可以访问值和key值
2. 字符串枚举：不能进行反向映射，只能访问值
3. 枚举成员的值定义之后不能修改
#### 枚举成员
1. const number 会在变异阶段就计算出结果，以常量的形式出现在运行环境
2. 需要被计算的枚举，不会在编译阶段被计算，而是会保留在运行时
#### 常量枚举  
1. const声明的枚举  
2. 在编译阶段会被移除
3. 当不需要对象，而是需要对象的值的时候，就可以使用常量枚举，减少在编译环境的代码
#### 枚举类型
1. 在一些情况下，枚举和枚举成员都可以当作一种单独的类型存在，要求所有成员都是字符串或者数字
2. 两种不同了类型的枚举不可以进行比较
