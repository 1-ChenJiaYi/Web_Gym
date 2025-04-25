<template>
  <div class="ShowInfo">
    <h1>-------------------------------</h1>
    <h1> ShowInfo </h1>
    <input @input="fc($event)" type="text" v-model="use"> 
    <h1>-------------------------------</h1>
  </div> 
</template>

<script setup>
import {ref} from 'vue' 

let use = ref("");

function fc(x) {
  console.log("触发了fc函数", x) 
  console.log(use.value) 
}

</script>

<style scoped>

</style>
