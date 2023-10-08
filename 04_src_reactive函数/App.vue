<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h3>职位：{{ person.job.type }}</h3>
  <h3>薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h4>测试数据:{{ person.job.a.b.c }}</h4>

  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  //暂时不考虑setup
  setup () {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['唱歌', '开车', '喝酒']
    })

    function changeInfo () {
      person.name = '李四'
      person.age = 19

      person.job.type = 'UI设计师',
        person.job.salary = '50k'
      person.job.a.b.c = 999
      person.hobby[0] = '跑酷'

    }
    return {
      changeInfo,
      person
    }

  }
}
</script>


