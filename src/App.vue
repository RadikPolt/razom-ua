<template>
  <div>
    <Header />
    <router-link to="/">На головну</router-link>
    <router-link to="/vikonano">Виконано</router-link>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main";
</style>

