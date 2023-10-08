<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  //暂时不考虑setup
  setup () {
    let name = '张三'
    let age = 18

    function sayHello () {
      alert(`我叫${name},我${age}了`)
    }

    return {
      name,
      age,
      sayHello
    }
    /*    return () => {
         return h('h1', 'Vue3')
       } */
  }
}
</script>


