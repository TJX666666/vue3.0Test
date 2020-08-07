<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>尝试ref数据绑定：</h3>
    <div>{{ count }}</div>
    <button @click="add">自增test</button>

    <div>{{ str }}</div>
    <h3>尝试vuex:</h3>
    <div>{{ a }}</div>
    <button @click="update">update a</button>
  </div>
</template>
<script>
import { ref, computed, watch, getCurrentInstance } from "vue";
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
    //读取vuex的数据
    const a = computed(() => ctx.$store.state.test.a);
    let update = () => {
      ctx.$store.commit("setTestA", count);
    };
    return { count, add, str, a, update };
  }
  //总结下哈：

  //   vue3.0都写在setup里，以前的所有数据状态都写在data里，

  // 所有方法都写在methods里，而现在可以根据功能模块把状态和方法等划分在一起，更利于模块化，

  // 不过这样对代码习惯和质量要求更高了，初学者用3.0可能会写的更混乱
};
</script>
