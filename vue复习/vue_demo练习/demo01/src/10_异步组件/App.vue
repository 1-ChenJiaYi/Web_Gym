<template>
  <div id="app">
    <h1>我是盒子</h1>

    <!-- 如果需要传递数据，直接像子组件一样传递即可 -->
    <keep-alive include="SonA, SonB">  
      <component :is="CurCom"> 
      </component>
    </keep-alive>
    <button @click="foo"> 切换 </button>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'
  // import SonA from "./components/SonA.vue"
  
  const Async1 = defineAsyncComponent(() => import("./components/SonA.vue")) 
  import SonB from "./components/SonB.vue"

  import SonC from "./components/SonC.vue"
  

  export default {
    components: {
      SonA:Async1, SonB, SonC
    }, 
    data() {
      return {
        use:['SonA', 'SonB', 'SonC'],
        CurCom:'SonA', 
        idx: 0 
      }
    }, 
    methods: {
      foo() {
        console.log("触发btn")
        this.idx += 1 
        if (this.idx == 3) this.idx = 0
        this.CurCom = this.use[this.idx] 
      }
    }
  }
</script>


<style scoped>

</style>