1、封装Storage-Cache 

```js
class Cache {
    constructor(isLocal = true) {
        this.storage = isLocal ? localStorage : sessionStorage
    }
    
    setCache(key, value) {
        if(!value) {
            throw new Error("value error") 
        }
        
        this.storage.setItem(key, JSON.stringify(value)) 
    }
    
    getCache(key) {
        const result = this.storage.getItem(key)
        if(result) return JSON.parse(result) 
    }
    
    removeCache(key) {
        this.storage.removeItem(key) 
    }
    
    clear() {
        this.storage.clear() 
    }
}

const localCache = new Cache() 
const sessionCache = new Cache(false) 

export {
	localCache, 
    seesionCache 
}
```



```js
// 导入：
//<script src='./js/cache.js'> </script>
// 或者：
import {localCache, seesionCache} from './js/...'

// 可以使用 localCache 和 sesionCache


```





