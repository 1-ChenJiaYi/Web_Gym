<template>
  <div class="FakeTs">
    <h1>我是Fake11</h1> 
    <h1>{{ a }} {{ b }} {{ c }}</h1>
  </div>  
</template>

<script setup>
  // import { toRefs } from 'vue';
  defineProps({
    a: {
      type: String, 
    }, 
    b: { 
      type: String, 
    },
    c: {
      type: String 
    }
  }) 

  
</script>

<style scoped>

</style>
