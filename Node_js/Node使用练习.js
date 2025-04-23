// 输入: 算法题使用：
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf-8').trim().split('\n'); // 读取所有输入行

// 或者用：process.argv，来接收输入
let num1 = process.argv[2] 
let num2 = process.argv[3] 


console.log(process.argv) 

console.log(num1, num2)

// 获取当前的文件目录路径 
console.log(__dirname)

// 获取当前目录 + 文件名称：
console.log(__filename) 

// 获取当前进程相关的信息，内部有很多信息
// console.log(process) 

// 定时器 
// setTimeout(()=>{

// }, 1000) 


//  
// setInterval(()=>{

// }, 3000) 

// 这个回调会立即执行 
setImmediate(()=>{

}) 

// 
process.nextTick(() => {
  console.log("nextTick") 
})


// global 类似于window
// globalThis在浏览器和Node中都是全局对象 
var x = 1 

