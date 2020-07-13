<template>
  <nav class="ba-nav-mob">
    <button class="ba-nav-mob__close">
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
        <router-link class="ba-nav__link" to="/vukonano">
          <img src="../../public/img/home-page/ok.png" alt="Виконано" />
          Виконано
        </router-link>
      </li>
      <li>
        <router-link class="ba-nav__link" to="#">
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
  </nav>
</template>

<script>
export default {};
</script>

<style  lang="scss">
.ba-nav-mob {
  padding: 124px 43px 43px;
  &__close {
    position: absolute;
    top: 43px;
    right: 16px;
    cursor: pointer;
  }
  &__link {
    font-size: 18px;
    color: $black;
    position: relative;
    transition: transform 0.5s ease-in;
    &:after {
      content: "";
      position: absolute;
      width: calc(100% - 30px);
      left: 30px;
      bottom: -3px;
      height: 1px;
      background-color: $black;
      transition: scale 0.5s;
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
    border: 1px solid $success-color;
    border-radius: 4px;
    color: #ffffff;
    background: $success-color;
    &:hover,
    &:active {
      background-color: #fff;
      color: $success-color;
    }
  }
}
</style>