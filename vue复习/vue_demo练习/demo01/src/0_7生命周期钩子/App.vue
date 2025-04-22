<template>
  <!-- v-if删除不了根组件 -->
  <div id="App" v-if="have">
    <div class="box">这是app组件 {{ message }}</div>
    <!-- <SonZuJian>
    </SonZuJian> -->
    <button @click="foo"> 这是一个按钮1 </button>
    <button @click="bar"> 这是一个按钮2 </button>
  
  </div>
</template>

<script>
import { callWithAsyncErrorHandling } from "vue";
import SonZuJian from "./components/SonZuJian.vue";
// import SonZujian from "./components/SonZujian.vue"
export default {
  components: {
    SonZuJian
  }, 
  data() {
    return {
      message: 16, 
      have: true 
    }
  }, 
  methods: {
    foo() {
      this.message += 10086 
    }, 
    bar() {
      this.have = 1 - this.have
    }
  }, 
  beforeCreate() { // 被创建前 
    console.log("beforeCreate") 
  }, 
  created() { // 创建了以后 
    console.log("created")
  }, 
  beforeMount() { // 挂载前 
    console.log("beforeMount") 
  }, 
  mounted() { // 挂载
    console.log("mounted") 
  }, 
  beforeUpdate() { // 在dom更新之前 
    console.log("beforeUpdate")
  }, 
  updated() {
    console.log("updated")
  }, 
  beforeUnmount() { // dom树卸载之前 
    console.log("beforeUnmount")
  }, 
  unmounted() {
    console.log("unmounted")
  }
}
</script>

<style scoped>
  .active {
    color: blue; 

  }

  .use {
    color: red;
  }

</style>
