<template>
  <div id="App">
    <div class="box">这是app组件</div>
    <SonZuJian>

    </SonZuJian>

  </div>
</template>

<script>
import SonZuJian from "./components/SonZuJian.vue";
// import SonZujian from "./components/SonZujian.vue"
export default {
  components: {
    SonZuJian
  }, 
  provide: {
    'name': "cjy",  
    'age': 15, 
    "des": '了解真相~' 
  }, 
  data() {

  }, 
  methods: {

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
