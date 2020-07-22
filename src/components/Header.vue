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
  z-index: 5;
  position: relative;
  p {
    font-size: 12px;
    color: $medium-gray;
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
.ba-logo--tablet {
  p {
    line-height: 0.6;
  }
}
.ba-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 5;
  background: $white;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px 16px 0;
  @include breakpoint(large) {
    padding: 20px 40px 14px;
  }

  @include breakpoint(medium) {
    padding: 15px 40px 0;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), #fff);
    height: 30px;
  }
}
</style>