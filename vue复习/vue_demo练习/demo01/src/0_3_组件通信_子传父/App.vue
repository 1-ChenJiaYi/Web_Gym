<template>
  <div id="App">
    <div class="box">
      测试儿子传递数据给父亲组件： 
    </div>

    <h1>当前计数： {{ age }}</h1>
    <SonZuJian @add="bar"></SonZuJian>

  </div>
</template>

<script>
import SonZuJian from "./components/SonZuJian.vue";
// import SonZujian from "./components/SonZujian.vue"
export default {
  data() {
    return {
      name: "cjy", 
      age: 20, 
      desc: "刨根问底，将问题彻底解决", 
      info: {
        '我是一个对象': 1
      }
    } 
  },  
  components: {
    SonZuJian
  }, 
  methods: {
    bar(cnt) {
      console.log("执行bar函数，cnt = ", cnt) 
      this.age += cnt 
    
    }
  }, 
  computed: {

  }
}
</script>

<style scoped>
  .active {
    color: blue; 

  }

</style>
