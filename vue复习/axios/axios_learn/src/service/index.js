import axios from "axios"
import { get } from "core-js/core/dict"
import { reject, resolve } from "core-js/fn/promise"

class cjyRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(
        res => resolve(res) 
      ).catch(
        err=>reject(err)
       )
    }); 
  }

  get(config) {
    return this.request({
      ...config, 
      method: 'get'
    })   
  }

  post(config) {
    return this.request({
      ...config, 
      method: 'post' 
    })
  }
}