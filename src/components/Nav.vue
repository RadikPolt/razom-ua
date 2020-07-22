<template>
  <nav class="ba-nav">
    <ul class="menu show-for-xlarge">
      <li>
        <router-link class="ba-nav__link" to="/">
          <img src="../../public/img/home-page/syringe.png" alt="Потреби лікарень" />
          Потреби лікарень
        </router-link>
      </li>
      <li>
        <router-link class="ba-nav__link" to="/vukonano">
          <img src="../../public/img/home-page/ok.png" alt="Виконано" />
          Виконано
        </router-link>
      </li>
      <li>
        <router-link class="ba-nav__link" to="/pronas">
          <img src="../../public/img/home-page/hi.png" alt="Про нас" />
          Про нас
        </router-link>
      </li>
      <li>
        <router-link class="ba-nav__link" to="#">
          <img src="../../public/img/home-page/heart.png" alt="Координатори" />
          Координатори
        </router-link>
      </li>
      <li>
        <router-link class="ba-button" to="#">Марафон “Ти не один”</router-link>
      </li>
    </ul>
    <button class="menu-icon hide-for-xlarge" @click="toggleMenu"></button>
  </nav>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  name: "Nav",
  data() {
    return {
      isMenuOpen: true
    };
  },
  methods: {
    toggleMenu() {
      eventBus.$emit("toggleMenu");
    }
  }
};
</script>

<style  lang="scss">
.ba-nav {
  //   position: relative;
  .menu-icon {
    position: absolute;
    z-index: 5;
    top: 22px;
    right: 20px;
    @include breakpoint(medium) {
      right: 40px;
      top: 28px;
    }
    width: 16px;
    height: 14px;
    &::after,
    &:hover::after {
      height: 2px;
      background: $primary-color;
      box-shadow: 0 6px 0 $primary-color, 0 12px 0$primary-color;
    }
  }
  &__link {
    font-size: 18px;
    color: $black;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: calc(100% - 30px);
      left: 30px;
      bottom: -3px;
      height: 1px;
      background-color: $black;
      transition: transform 0.3s;
      transform: scaleX(0);
    }
    &:hover,
    &:focus {
      color: $black;
    }
    &:hover,
    &:focus,
    &.router-link-exact-active {
      &:after {
        transform: scaleX(1);
      }
    }
  }
  li + li {
    margin-left: 32px;
  }
  .ba-button {
    padding: 16px;
    border-color: $success-color;
    background: $success-color;
    &:hover,
    &:active {
      background-color: #fff;
      color: $success-color;
    }
  }
}
.menu {
  @include breakpoint(1260px) {
    display: flex;
    align-items: center;
  }
}
</style>