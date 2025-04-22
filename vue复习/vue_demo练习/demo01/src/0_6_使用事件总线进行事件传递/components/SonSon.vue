<template>
  <div class="sonson">
    <div class="box">我是Son的Son{{ name }} {{ age }} {{ des }}</div>


    <h1>下面是一个按钮: </h1>
    <button @click="btnclick"> 按钮 </button>
  </div>  

</template>


<script>
import eventBus from "../util/eventbus.js"
export default {
  data() {
    return {
      name: 'cjy', 
      age: 18, 
      des: "了解真相!" 
    }
  },  
  methods: {
    btnclick() {
      console.log("btnclick被触发了")
      eventBus.emit("cjyEvent","cjy", 18, 1.88) 
    }
  }

}

</script>

<style scoped>

</style>