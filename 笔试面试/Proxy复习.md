# 1、2025-3-26复习：Reflect、Proxy 

**(1)** 该方法可以监听gc垃圾回收器把绑定对象回收的动作，并且执行对应的回调函数。

```JavaScript
const fr = new finalzationRegistry(
  (value)=> {
    clg(value) 
  }//这是一个回调函数
) 
let obj = {} 
fr.register(obj, 回调函数的参数) 

```



**(2)** 创建弱引用对象

```JavaScript
let res = new WeakRef(info) // 弱引用某个对象

```



**(3)**

```JavaScript
??
```



**(4)**  检查对象本身的属性

```JavaScript
Object.hasOwn(obj, 'key') // 判断obj对象有没有key属性 


```



**(5)** 类的属性：

```JavaScript
class Cla {
  // 私有属性：
  #SY =  1 
  // 约定俗成的私有属性：
  _SY = 1 
  construct() {
    
  }
  // 静态代码块
  static {
  
  }
}
```



**(6)** proxy   构造函数/类                        vue3对象的监听 原理

```JavaScript
 const obj = {
   name: 'why', 
   age: 18, 
   height: 1.88 
 }
 
 // 第一种监听（最原始的） 
 /* 
 Object.defineProperty(obj, 'name', {
   set: function() {
   
   }, 
   get: function() {
   
   }
 })
 */ 
 
 // vue2的响应式原理： 有很多做不到的事情，比如监听对象属性的增加删除
 const keys = Object.keys(obj) 
 for (const key of keys) {
   let va = obj[key] // let使得va在这个循环代码块中形成了自己的作用域 
   Object.defineProperty(obj, key, {
     set: function(nva) {
       va = nva 
     }
     , 
     get: function() {
       return va 
     }
   })
 }
 
 
 //vue3的响应式原理：proxy=> 原对象的代理对象
 const objProxy = new Proxy(obj, {
   // 这里面的内容叫捕获器 
   
   // target: 目标对象 
   // 当前监听到的key 
   get: function(target, key) {
     
   }, 
   
   // value: 新的值 
   set: function(target, key, value) {
     target[key] = value 
   }, 
   
   // 监听删除：
   deleteProperty: function(target, key) {
     delete obj.name // delete运算符，删除对象属性
   }, 
   
   // 监听in判断：key in obj 
   has: function(target, key) {
     return key in target 
   }, 
 })
 
 // Proxy 监听函数：
 function foo() {
 
 }
 
 const fooProxy = new Proxy(foo, {
   //  监听apply操作：
   apply: function(target, thisArg, otherArgs) {
     target.apply(thisArg, otherArgs) 
   }, 
   
   // 监听构造函数new操作：
   construct: function(target, otherArray) {
     
     return new target(...otherArray)  
   }
   
 }) 
 

```





**(7)** Reflect (ES6) 它是一个对象，类似Math。

```JavaScript
delete obj.name // 有可能会报错 
Reflect.deleteProperty(obj, 'name') //返回bool值  


// 经常会配合Proxy使用
const obj = { 
  _age = 10
  get() {
    return this._age; 
  }
  set(newval) {
    console.log("执行2")
    this._age = newval  
  }
}

const proxy = new Proxy(obj, {
  set: function(target,key,value,rev) {
    console.log("执行1")
    const flag = Reflect.set(target, key, value, rev) 
    return flag   
  }, 
  
  get: function(target,key,value,rev) {
    return Reflect.get(target, key, value, rev) 
  }

})

proxy._age = 11 

```





---



2025-4-5 promise 复习