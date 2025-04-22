<template>
  <div class="Son">
    <div class="box">Son盒子： {{ age }}</div>
  </div>

</template>


<script>
  export default {
    data() {
      return {
        age: 18 
      }
    }, 
    methods: {
      bar() {
        console.log("触发了bar")
        return "bar" 
      }
    }

  }
</script>

<style scoped>

</style>