<template>
  <div id="App">
    <h1>测试插槽：</h1>


    <SonZuJian>
      <template v-slot:top>
        <p> 我是插入的内容1 </p>
      </template>
      
      <template v-slot:[cen]>
        <h1 class="use"> 我是插入的内容2 </h1>
      </template>

      <!-- 作用域插槽 -->
      <template v-slot:default="props">
        <div class="box">
          {{ props.item }}
        </div>
      </template>
      <!-- <p>我是插入的内容2</p> -->
    </SonZuJian>
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
      }, 
      cen: "center" 
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

  .use {
    color: red;
  }

</style>
