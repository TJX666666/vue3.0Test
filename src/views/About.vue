<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <div>{{ str }}</div>
    <button @click="add">自增test</button>
  </div>
</template>
<script>
import { ref, watch, getCurrentInstance } from "vue";
export default {
  setup() {
    const count = ref(123);
    let add = () => {
      count.value++;
    };
    const str = ref("000");
    //watch监听多个参数
    watch([count, () => count.value], ([a, b]) => {
      console.log(`a is: ${a}`);
      console.log(`b is: ${b}`);
    });
    //ctx对象读取路由数据
    const { ctx } = getCurrentInstance();
    console.log(ctx.$router.currentRoute.value);
    return { count, add, str };
  },
};
</script>
