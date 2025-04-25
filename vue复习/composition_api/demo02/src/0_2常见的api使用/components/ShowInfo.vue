<template>
  <div class="ShowInfo">
    <h1>ShowInfo</h1>
    <h1>x = {{ x }}</h1>
    <h1>y = {{ y }}</h1>
    <button @click="bar"> ShowInfo的按钮 </button>


    <h1>测试计算属性：{{ res }}</h1>

    <button @click="ChangeRes"> 修改res </button>


    <h1>测试计算属性：{{ score }} {{ Lev }}</h1>
    <button @click="ChangeScore"> 按钮 </button>

    <h1 ref="title">测试元素的Ref</h1> 

  </div> 
</template>

<script setup>

const emit = defineEmits(['update:x']) 
import {computed, ref, toRefs} from 'vue' 

// definePorps接收的数据是只读的 
const p = defineProps({
  x: {
    type: Number, 
    default: -1e18    
  }, 
  y: {
    type: Number, 
    default: -1e18
  }
})


let {x, y} = toRefs(p) 
let c = ref(1) 

function bar() {
  console.log("触发bar")
  emit("update:x", 10)
}

function PrintYes() {
  console.log("yes yes yes") 
}

function ChangeRes() {
  res.value = "djw dasab" 
}

function ChangeScore() {
  score.value = Math.random() * 100 + 1 
}
const name = ref(["cjy", "111"])  

const res = computed({
  set: function(newva) {
    let tmp = newva.split(' ')
    name.value[0] = tmp[0] 
    name.value[1] = tmp[1] 
    // console.log(tmp)   
  }, 
  get: function() {
    return name.value[0] + ' ' + name.value[1] 
  }
})

const score = ref(50) 
const Lev = computed(() => {
  return score.value >= 90 ? "及格" : "不及格"   
})

const title = ref() 

// console.log(title) 

defineExpose({
  PrintYes
})
</script>

<style scoped>

</style>
