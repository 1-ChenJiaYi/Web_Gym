<template>
  <div class="app">
    <h1>我是App组件</h1>
    <KeepAlive include="HomeUs,TabUs,BotUs">
      <component :is="CurCom"></component>
    </KeepAlive>

    <button @click="foo">切换组件</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeUs from "./components/HomeUs.vue"
import TabUs from "./components/TabUs.vue"
import BotUs from "./components/BotUs.vue"


const CurCom = ref("HomeUs") 
const Arr = ['HomeUs', 'TabUs', 'BotUs']
let idx = 0

function foo() {
  idx = (idx + 1) % Arr.length  // 简化循环逻辑
  CurCom.value = Arr[idx]
}
</script>

<style scoped>
button {
  margin-top: 20px;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #3aa876;
}
</style>