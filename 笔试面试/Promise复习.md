# Promise全面复习 

第二次全面学习Promise，这次想刨根问底的学习一下这个技术。

首先他是用于异步代码处理的。


1、最初遇到的问题：
```js 
function execCode() {
  setTimeout(() => {
    
  }, 3000) 
}

// 需要告诉调用者，在恰好执行完函数时做其它操作。
execCode()
```

2、早期异步代码的书写：

```js 

function foo(cnt, successCallback, failureCallback) {
  setTimeout(()=>{
    if(cnt < 0) {
      //调用失败对应的回调函数：
      failtureCallback() 
    }
    else { 
      // 调用成功的回调：
      successCallback()  
    }
  })
}

foo(100, ()=>{

}, ()=>{
    
}) 
```

3、ES6新增Pormise解决相关的问题。
相当于一个传呼机。

基本代码结构：
```js 
function foo() { 
  const promise = new Promise((resolve, reject) => {
    // 全部逻辑
    if (flag) {
      resolve() 
    }
    
    reject() 
  })

}

// 在外面通过监听调用两个回调函数：
const promise = foo() 
promise.then(()=>{}).catch(()=>{})
```



4、Promise的细节用法：

(1) Promise的创建：
```js 
const promise = new Promise((resolve, reject)=>{
})

.then(回调函数) // 传入resolve的内容 
.catch(回调函数) // 传入reject的内容 

```

(2) Pormise的状态：
等待状态(pending): 

兑现状态(调用resolve)： 


拒绝状态(reject): 

(3) Promise resolve的返回值/值：
```js 
{
  ... 
  // 1、 传入普通值(对象、值类型等等)：
  resolve({'name':'cjy'}) //可以在外界的then接收到
  // 2、传入promise,promise的嵌套:
  resolve(new Promise(...)某个promise对象) 
  // 3、传入thenable对象：
  resolve({
    name: 'kobe', 
    then: function(resolve) {
      resolve() 
    }
  })
}

.then(res => {
  res是接收到的resolve的参数
})
```

### 对于resolve函数中如果传入的参数是Promise对象，那么原Promise对象的状态由当前传入的Promise决定。


5、Promise的then和catch
```js 
// then可以传入两个回调函数：
then((res)=>{}, (err)=>{})

// why老师推荐的写法：.then().catch() 
```



6、Promise的then返回值：
```js 
const promise = new Promise((resolve, reject)=> {
  

}) 
```
(1) .then()返回值是一个promise，所以可以嵌套使用（链式调用）.then: 
```js 
promise.then().then().then()....
```
(2) then的返回值：
对于一个then返回值，相当于自动返回了一个Pormise对象，可以被下一个then监听。
```js 
const promise = new Promise((f1, f2) => {
  
})
promise.then({
  // then1:
  
  return va1  
  // 相当于：new Promise(resolve(va1))  
}).then({
  return va2 
}).then({
  return va3 
})
```

我的理解：
如果上一个then方法返回的是一个新的Promise对象，则会直接监听这个Pormise对象，其实本质.then方法就是一种对Pormise对象的监听，当内部执行到恰好是非等待状态时的拒绝或者是接受状态，则可以直接回调当前then内部的函数。

这段理解还问了ai，监听可能不如订阅更规范和合理，想想确实也是。 

7、catch方法的返回值：
和then相似，可以说是另一个推广。
(1) 当产生reject的时候，处于链式调用时，会寻找最近的catch方法，

(2) 如何产生一个reject(拒绝状态):
a、抛出异常: throw new Error("") 
b、yield 暂时中断

(3) 中途产生的疑问，then好像可以传两个回调函数，会不会对链式调用有影响，如果只传一个函数，reject会找catch，resolve会找then。

这里通过自己实验，探究到了一个很神奇的特性，then方法是可以传入reject函数的，catch方法只能传入reject方法，也就是第一个参数。

实验的代码：
```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
      const promise = new Promise((resolve, reject) => {
        console.log("promise1")  
        resolve("aaaaaa")  
      })
      promise.then(res => {
        console.log("p1", res) 
        return "aaaaaaa" 
      }).catch(err=>{
        console.log("p2: ", err)
      }, res=>{
        console.log("p2, 这是resolve: ", res) 
      })

      // promise.then(res => {
      //   console.log("promise2: ", res) 
      //   throw new Error("我爱promise") 
      // }).then(res=>{
      //   console.log("promise3这是resolve方法: ", res)  
      // }, err=>{
      //   console.log("promise3这是reject方法，", err) 
      // }).catch(err => {
      //   console.log("catch被调用", err)  
      // })
  </script>
</body>
</html>
```

---

8、finally方法 (ES9特性)。

表示无论Promise对象最后是什么状态都会被执行，**不接受参数**.

```js 
.then().catch().finally(()=>{
  最终一定调用 
})
```

9、Promise的类方法(静态方法)：
(1) Promise.resolve(参数) 
返回一个Promise，可以用then接收，相当于new了一个Promise立即使用resovle。
```js 
const promise = Promise.resolve([1, 2, 3]) 

promise.then(res => {
  
})
```
(2)Promise.reject(参数) // 直接返回错误信息 
直接拒绝 

(3) 开发中的规范，如果遇到不得不写但是没用的函数参数，直接写成下划线：_ 



(4) Promise.all方法：
它可以将多个Promise包裹在一起形成一个新的Promise，新的Promise状态由所有的Pormise共同决定：

a、所有都resolve了，状态为resolve，会将所有的promise组成一个数组然后直接返回。
b、如果出现了reject，状态为reject，会将第一个reject的Promise直接返回。 
```js 
const p1 = new Promise(...) 
const p2 = new Promise(...) 
const p3 = new Promise(...) 

Promise.all([p1, p2, p3]).then(res =>{

}).catch(err => { 
  
})
```

(5) Promise.allSettled，只会reject，也就是说只能用then去接收。

用法类似上面的all方法，但是他会返回所有Promise的状态，无论是reject还是resolve。

(6) race方法：
返回最快有结果的Promise，只要有结果马上返回，然后用then或者是catch接收。
```js
p1, p2, p3是Promise
Promise.race([p1, p2, p3]) 
```

(7) any方法：
等待第一个resolve的结果，只能用then接收，如果全部都是reject，则调用catch。
