<template>
  <div id="App">
    <div class="box">
      测试父亲传递数据给儿子组件： 
    </div>
    
    <!-- 如果是一个非props的元素，会默认添加到子组件的根元素上 -->
     <!-- class 和 style会进行智能合并，总结合并到所有的根元素上 -->
    <own-demo class="active" :test="111" :name="name" :age="age" :desc="desc" :info="info">
      

    </own-demo>
  </div>
</template>

<script>

import OwnDemo from "./components/OwnDemo.vue"  
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
    OwnDemo,
    // SonZujian
  }, 
  methods: {

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
