<template>
  <header class="ba-header">
    <router-link class="ba-logo show-for-large hide-for-small" to="/">
      <img src="@/assets/logo.png" alt="РазомUA" />
      <p>За підтримки Фонду Соціальної Справедливості</p>
    </router-link>
    <router-link class="ba-logo ba-logo--tablet show-for-medium hide-for-large" to="/">
      <img src="@/assets/logo-tablet.png" alt="РазомUA" />
      <p>За підтримки Фонду Соціальної Справедливості</p>
    </router-link>
    <router-link class="ba-logo ba-logo--mobile show-for-small hide-for-medium" to="/">
      <img src="@/assets/logo-mobile.png" alt="РазомUA" />
    </router-link>
    <Nav />
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
.ba-logo {
  p {
    font-size: 12px;
    color: $black;
  }
  img {
    width: 205px;
    height: 36px;
    @include breakpoint(medium) {
      width: 166px;
      height: 32px;
    }
    @include breakpoint(large) {
      width: 232px;
      height: 40px;
    }
  }
}
.ba-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  padding: 32px 24px;
}
</style>