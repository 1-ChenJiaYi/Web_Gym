<template>
  <div class="app">
    <!-- <h1>我是App</h1>
    <SonB v-model="sbva">

    </SonB> -->

    <h1>下面是对照的SonB</h1> 

    <!-- $event是foo事件传递过来的参数，并且只会接收第一个值 -->
    <SonB :modelValue="sbva" @foo="fn($event)"> </SonB>
  </div>
</template>

<script>
  
  import SonA from './components/SonA.vue' 
  import SonB from './components/SonB.vue' 

  export default {
    components: {
      SonA, SonB 
    }, 
    data() {
      return {
        sbva: 100 
      }
    }, 
    methods: {
      fn(x) {
        console.log("fn被触发：") 
        console.log("参数为: ", x) 
        this.sbva = x 
      }
    }
  }
</script>

<style scoped>

</style>
