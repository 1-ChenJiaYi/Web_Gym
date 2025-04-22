<template>
  <div class = "OwnDemo" >
    <!-- <h1>这是一个计数器 {{ cnt }}</h1>
    <button @click="btnclick">按钮 </button> --> 
    
    <div :class="$attrs.class">我是一个盒子，下面是需要展示的信息</div>

    <h1>{{name }}</h1> 
    <h1>{{ age }}</h1> 
    <h1>{{ desc }}</h1>
    <h1>我是一个对象: {{ info }}</h1>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String, 
      default: "我是默认的name" 
    },  
    age: {
      type: Number, 
      require: true, 
      default: 0 
    }, 
    desc: {
      type: String, 
      require: true, //如果require = 1就是必须传递的值。
      default: "个人描述的默认值" 
    }
    , 
    info: {
      type:Object,
      default() {
        return {'我是morenzhi': 1} 
      } 
    }

  }, 
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