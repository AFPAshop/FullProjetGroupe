<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
    this.$store.dispatch("getTvaAction");
    this.$store.dispatch("getCategoriesAction");
    this.$store.dispatch("getUserInfos");
  },
};
</script>

<style lang="scss">
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
