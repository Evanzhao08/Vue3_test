<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
import { customRef } from "vue";

export default {
  name: "App",
  setup() {
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            track(); //告诉vue这个value值是需要被追踪的
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //告诉vue去更新界面
            }, delay);
          },
        };
      });
    }
    let keyword = myRef("hello", 500);
    return { keyword };
  },
};
</script>
