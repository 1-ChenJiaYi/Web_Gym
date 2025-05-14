import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
createApp(App).mount('#app')

// get请求 
console.log("------测试")
axios.request({
    url: 'https://api.github.com/users',
    method: 'get',
    params: {
        since: 0,
        per_page: 5
    }
  }).then(res => {    
    console.log(res.data)
  }
  ).catch(err => {
    console.log(err)
  })
console.log("------测试") 

// 创建实例：
const ins = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}                
})

console.log(ins) 


// axios 拦截器
// ins.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   console.log("请求拦截器")
//   return config;
// }
// , function (error) {
//   // 对请求错误做些什么
//   console.log("请求拦截器错误")
//   return Promise.reject(error);
// }
// );

// ins.interceptors.response.use(function (response) {       
//   // 对响应数据做点什么
//   console.log("响应拦截器")
//   return response;
// }
// , function (error) {
//   // 对响应错误做点什么
//   console.log("响应拦截器错误")
//   return Promise.reject(error);
// }
// );
