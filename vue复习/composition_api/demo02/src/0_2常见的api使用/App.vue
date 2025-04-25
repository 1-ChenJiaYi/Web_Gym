
<template>
  <div class="app">
    <div class="h1">我是App组件</div>
    <ShowInfo :x="x" :y="y" @update:x="foo"></ShowInfo>
    <!-- <button @click="foo"> 更改x </button> -->
 
    <h1>-----------------------------</h1>
    <h1>我是分割线top</h1>

    <ShowInfo ref="siRef"> </ShowInfo>

    <h1>我是分割线bottom</h1>
    <h1>-----------------------------</h1>
  </div>
</template>

<script setup> 
  import {ref, readonly, onMounted } from 'vue' 
  import ShowInfo from "./components/ShowInfo.vue"
  let x = ref(10) 
  let y = readonly(x) 

  function foo(add) {
    console.log("触发了foo")
    x.value += add 
  }

  
  const siRef = ref() 
  onMounted(() => {
    // console.log(siRef.value)
  
    console.log(siRef.value.PrintYes())
  }) 
</script>

<style>


</style>
