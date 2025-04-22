<template>
  <div id="app">
      <h1 ref="title">
        我是App组件
        <div class="box"></div>
      </h1> 
      
      <button ref="btn" @click="btnclick"> 我的名字是：{{ name }}</button>
      <button @click="foo">查看</button>
      <Son ref="son"></Son> 
  </div>
</template>


<script>
  import Son from "./components/Son.vue"
  export default {
    components: {
      Son 
    }, 
    data() {
      return {
        name: 'cjy'
      }
    }, 
    methods: {
      btnclick() {
        console.log("触发 btnclick")
        this.name = Math.random().toString(36).substring(2, 2 + 10);
      }, 
      foo() {
        // 调用子组件的方法。
        console.log("调用son的方法: ", this.$refs.son.bar()) 
        
        // 调用子组件的数据：
        console.log("查看son的数据: ", this.$refs.son.age) 
        
        // 拿到子元素的dom: 
        console.log("dom: ", this.$refs.btn)

        // 获取元素内的元素：
        console.log("获取组件内的子元素: ", this.$refs.son.$el)

      }
    }
  }
</script>


<style scoped>


</style>