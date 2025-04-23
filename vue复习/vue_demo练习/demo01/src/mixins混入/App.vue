<template>
  <div class="app">
    <h1>我是App</h1> 
    <h1>我是mxins接手过来的参数： {{ cjy }}</h1>
  </div>  
</template>

<script>

import use from "./use.js" 
export default {
  data() {
    return {

    }
  }, 
  mixins: [use] 
}
</script>

<style scoped>

</style>
