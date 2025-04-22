<template>
  <div class="Son">
    <button @click="foo(100)"> 按钮 </button>


  </div>

</template>


<script>
  export default {
    emits: ["add"],
    data() {
      return {

      }
    }, 
    methods: {
      foo(cnt) {
        console.log("执行foo", cnt)
        this.$emit("add", 100) 
      }
    }

  }
</script>


<style scoped>


</style>