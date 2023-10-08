<template>
  <Demo @hello="showHelloMsg" msg="你好啊" school="爱学习">
    <template v-slot:qqq>
      <span>Vue3学习</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup () {
    function showHelloMsg (value) {
      alert(`你好啊，您触发了hello事件，我收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }

}
</script>


