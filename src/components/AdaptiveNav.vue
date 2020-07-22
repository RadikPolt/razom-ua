<template>
  <nav class="ba-nav-mob">
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
    <button class="ba-nav-mob__close" @click="toggleMenu">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="6.34307"
          y1="6.34314"
          x2="17.6568"
          y2="17.6569"
          stroke="#29B8FF"
          stroke-width="1.5"
        />
        <line
          x1="6.34308"
          y1="17.6569"
          x2="17.6568"
          y2="6.34316"
          stroke="#29B8FF"
          stroke-width="1.5"
        />
      </svg>
    </button>
    <ul class="menu vertical text-center medium-text-left">
      <li>
        <router-link class="ba-nav__link" to="/">
          <img src="../../public/img/home-page/syringe.png" alt="Потреби лікарень" />
          Потреби лікарень
        </router-link>
      </li>
      <li>
        <router-link class="ba-nav__link" to="/vikonano">
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
        <a class="ba-button" href="https://ubb.org.ua/ru/project/6050/" target="_blank">Марафон “Ти не один”</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  data() {
    return {
      isMenuOpen: false
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
.ba-nav-mob {
  .ba-logo {
    position: absolute;
    top: 16px;
    left: 16px;
    @include breakpoint(medium) {
      top: 14px;
      left: 40px;
    }
  }
  padding: 124px 0px 43px;
  @include breakpoint(medium) {
    padding: 72px 40px 43px;
  }
  @include breakpoint(large) {
    padding: 84px 40px 43px;
  }
  &__close {
    position: absolute;
    top: 18px;
    right: 16px;
    @include breakpoint(medium) {
      right: 37px;
      top: 22px;
    }
    cursor: pointer;
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
      transition: transform 0.3s ease-in;
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
    margin-top: 40px;
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
.menu li a {
  display: inline-block;
}
.menu.vertical {
  @include breakpoint(medium) {
    padding-top: 24px;
    border-top: 1px solid $primary-color;
  }
}
</style>