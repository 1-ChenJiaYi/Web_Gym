<template>
  <div id = "OwnDemo">
    <h1>这是一个计数器 {{ cnt }}</h1>
    <button @click="btnclick">按钮 </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cnt: 0
    }
  }, 
  methods: {
    btnclick() {
      this.cnt += 1 
    }
  }, 
  computed: {
  }
}
</script>


<style scoped>

</style>