<template>
  <div class="Son">
    <div>我是Son</div>
    <SonSon/>
  </div>

</template>


<script>
  import eventBus from "../util/eventbus.js" 
  import SonSon from "./SonSon.vue"
  export default {
    components: {
      SonSon
    }, 
    data() {
      return {

      }
    }, 
    methods: {
      foo() {
        console.log("foo被触发") 
      }
    }, 
    created() {
      eventBus.on("cjyEvent", (name, age, des) => {
        console.log("cjyEvent被检测", name, age, des) 
        this.foo() 
      })
    }, 
    unmounted() {
      // eventBus.off("cjy")
    }
  }
</script>


<style scoped>


</style>