<template>
  <div class="sonson">
    <div class="box">我是Son的Son{{ name }} {{ age }} {{ des }}</div>
  </div>  

</template>


<script>
export default {
  inject: ['name', 'age', 'des']
  ,
  data() {
    return {

    }
  },  
}

</script>

<style scoped>

</style>