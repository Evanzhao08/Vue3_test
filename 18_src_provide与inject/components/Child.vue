<template >
    <div class="child">
      <h3>我是Child组件,{{name}}--{{price}}</h3>
      <Son/>
    </div>

</template>

<script>
import Son from "@/components/Son";
// import {inject} from "vue";
export default {
  name: "Child",
  props:['car'],
  components:{Son},
  setup(props){
    // let car  = inject('car')
    console.log('Child组件',props)
    return {...props.car}
  }
}
</script>

<style scoped>
.child{
  background-color: skyblue;
}
</style>