<template>
  <div class="app">
    <h1>我是App</h1>
    <KeepAlive include="Home,Nav"> 
      <component :is="components[use]"> 
      </component>
    </KeepAlive>

    <button @click="foo">切换组件</button>


    <h1>-----------</h1> 


    <h1>测试inject和provide</h1> 

    <Top> </Top>

    <h1>-------------</h1> 

    <h1>测试watch方法</h1> 

    <button @click="watchtest">测试</button>
  </div>
</template>

<script setup> 
  import {provide, ref, watch, reactive, watchEffect} from 'vue' 
  import Home from "./views/Home.vue"
  import Nav from "./views/Nav.vue"
  import Top from "./views/Top.vue"
  const use = ref("Home") 
  
  const components = {
    Home, 
    Nav, 
    Top 
  }
  let idx = 0 
  const arr = ["Home", "Nav", "Top"] 
  function foo() {
    idx += 1 
    if (idx >= arr.length) idx = 0 
    use.value = arr[idx] 
    console.log(use.value)
  }


  const proString = "我是大帅哥"
  provide("prostring", proString) 

  const val = ref(10) 

  watch(val, (nv, ov) => {
    console.log("val的值变化：", nv, ov) 
  })

  const val1 = reactive({
    'name': 'cjy', 
    'age': 18, 
    'friend': {
      "name": 'zdr' 
    }
  })

  // 自动寻找相关的依赖。
  watchEffect(() => {
  
  })
  // watch(val1, (nv, ov) => {
  //   console.log(nv, ov) 
  //   console.log(nv === ov) 

  // }, {
  //   immediate: true 
  // })

  // 可以观察前后两个对象的快照：
  watch(() => ({ ...val1 }), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        immediate: true,
        deep: true
      })

  // 观察对象的某个属性：
  watch(() => val1.age, (nv, ov) => {
    console.log(": ", ov, nv) 
  }, {
    immediate: true 
  })

  function watchtest() {
    val.value = Math.random() 
    // val1['age']  = Math.random() // reactive进行了浅层解包： 
    val1['friend'] = {
      'name': "kobe" 
    }
  }


</script>
<style scoped>

</style>
