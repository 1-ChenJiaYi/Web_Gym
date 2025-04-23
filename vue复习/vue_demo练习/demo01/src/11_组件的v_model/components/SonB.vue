<template>
  <div class="sonb">
    <h1>我是标题 111{{ modelValue }}</h1>
    
    <button @click="bar"> 按钮 </button>
  </div>
</template>

<script>

export default {
  emits: ['foo']  
  ,
  props: {
    modelValue: {
      type: Number,
      default: 12 
    }
  },
  data() {
    return {

    }
  }, 
  methods: {
    bar() {
      console.log("触发了bar") 
      this.$emit("foo", 'cjy最帅', 'cjy最牛') 
    }
  }
}
</script>

<style scoped>

</style>
