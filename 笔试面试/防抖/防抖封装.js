function deb(fn, delay, immediate = false, resultCallback) {
  let timer = null 
  let flag = 0 

  const _deb = function(...args) {
    
    return new Promise((resolve, reject) => {
      try {
        if(timer) clearTimeout(timer) 
        if(!flag && immediate) {
          flag = 1 
          let res = fn.apply(this, args)
          resolve(res) 
          if(resultCallback) resultCallback(res)  
          return 
        }

        timer = setTimeout(()=>{
          let res = fn.apply(this, args)
          reject(res) 
          if(resultCallback) resultCallback(res) 
          timer = null
          flag = 0  
        }, delay)
      }
      catch(err) {
        reject(err) 
      }
    
    })
  }
  _deb.cancel = function() {
    if(timer) clearTimeout(timer) 
    timer = null
    flag = 0 
  } 
  return _deb 
}

export default deb 
 