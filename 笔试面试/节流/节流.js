function thr(fn, wait, immediate = true, end = false) {
  let lastTime = 0   
  let timer = null 
  const _thr = function(...args) {
    return new Promise((resolve, reject) => {
      try {
        const nowTime = new Date().getTime()
        if(!immediate && !lastTime) {
          lastTime = nowTime  
        }

        const Time = nowTime - lastTime     
        
        if(timer) {
          clearTimeout(timer)
          timer = null  
        }
        if(Time < wait) {
          if(end) {
            timer = setTimeout(()=>{

              const res = fn.apply(this, args) 
              resolve(res) 
              timer = null 

              lastTime = new Date().getTime() 
            }, wait-Time)  
          }
          return 
        }
        const res = fn.apply(this, args) 
        resolve(res) 
        lastTime = nowTime
        timer = null 
      }
      catch(err) {
        reject(err) 
      }
    })
  }

  _thr.cancel = function() {
    if(timer) clearTimeout(timer) 
    timer = null 
    lastTime = 0 
  }

  return _thr 
}

export default thr 