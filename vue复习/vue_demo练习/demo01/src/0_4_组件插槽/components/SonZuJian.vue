<template>
  <div class="Son">
    <slot name="top"> 
      <p>我是默认的插槽1</p>
    </slot>


    <slot name="center">
      <p>我是默认的插槽2</p> 
    </slot>


    <slot name="tail">
      <p>我是默认的插槽3</p> 
    </slot>

    <slot :item="item"> 
      <span>我是default插槽</span>
    </slot>
  </div>

</template>


<script>
  export default {
    emits: ["add"],
    data() {
      return {
        item: 'djw'
      }
    }, 
    methods: {
      foo(cnt) {
        console.log("执行foo", cnt)
        this.$emit("add", 100) 
      }
    }

  }
</script>


<style scoped>


</style>