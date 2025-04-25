<template>
  <div class="Top">
    <h1>Top</h1>
    <h1> 通过inject引入：{{ name }} </h1>
  </div>
</template>

<script setup>
  import {ref, inject} from 'vue' 
  const name = inject("prostring") 
  
</script>

<style scoped>

</style>
