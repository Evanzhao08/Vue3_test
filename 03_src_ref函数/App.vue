<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h3>职位：{{ job.type }}</h3>
  <h3>薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  //暂时不考虑setup
  setup () {
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    function changeInfo () {
      name.value = '李四'
      age.value = 19
      job.value.type = 'java工程师'
      job.value.salary = '32k'
      console.log(name)
      console.log(job)
    }
    return {
      name,
      age,
      changeInfo,
      job
    }

  }
}
</script>


