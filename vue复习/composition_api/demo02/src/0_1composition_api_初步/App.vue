
<template>
  <div class="app">
    <div class="h1">我是App组件</div>
    <ShowInfo> </ShowInfo>

    <button @click="foo"> 改变message </button>
    <button @click="bar"> 改变arr</button>
    <h1>{{ message }}</h1>
    <h1>{{ arr }}</h1>

    <h1>{{ info  }}</h1>

    <FakeTs :a="a" :b="b" :c="c"> </FakeTs>
  </div>
</template>

<script setup> 
  import {onMounted, ref, reactive } from 'vue' 
  import ShowInfo from "./components/ShowInfo.vue"
  import FakeTs from "./components/FakeTs.vue"
  let a = ref("why")  
  let b = ref("whe") 
  let c = ref("what") 

  let message = ref(3) 

  let name = ref('cjy')
  const arr = reactive({'cjy': '最帅'});
  
  function foo() {
    message.value += 1 
    name = 'djw' 
  }

  function bar() {
    arr['djw'] = "sb" 
  }

  const info = ({
    message, 
    arr, 
    name 
  })

  onMounted(() => {
    console.log("sb-----1231231")
  })

</script>

<style>


</style>
