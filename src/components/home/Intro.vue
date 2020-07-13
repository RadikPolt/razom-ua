<template>
  <div class="ba-section-intro ba-intro small-16 medium-13 large-10">
    <div class="ba-intro__body">
      <a href="https://iosj.org.ua/" target="_blank" rel="noopener" class="ba-intro__platform">
        <img src="@/assets/fond.png" alt="Громадська платформа РазомUA проти covid-19" />
        <p>Платформа організована спільно з Радою Волонтерів Міністерства Оборони України, волонтерами з усіх регіонів України за підтримки Офісу Президента України та Міністерства Охорони Здоров`я України.</p>
      </a>
      <h1 class="ba-intro__title">Громадська платформа РазомUA проти covid-19</h1>
      <ul class="ba-intro__list">
        <li>Інформуємо про наявні потреби лікарень України</li>
        <li>Допомагаємо збирати кошти на потреби лікарень</li>
        <li>Звітуємо про закриття потреб державою, волонтерами або гуманітарною допомогою</li>
      </ul>
      <a
        href="https://ubb.org.ua/ru/project/6050/"
        class="ba-button"
        target="_blank"
        rel="noopener"
      >Допомогти</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ba-intro {
  &__platform {
    display: flex;
    align-items: center;
    img {
      width: 76px;
    }
    p {
      color: $dark-gray;
      font-size: 10px;
      margin: 0;
      margin-left: 8px;
      max-width: 215px;
      @include breakpoint(medium) {
        max-width: 440px;
        font-size: 12px;
      }
      @include breakpoint(large) {
        max-width: 300px;
        font-size: 10px;
      }
    }
  }
  &__title {
    font-weight: 800;
    color: $primary-color;
  }
  &__list {
    list-style: none;
    margin: 0 0 40px;
    li {
      position: relative;
      margin-left: 32px;
    }
    li::before {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      left: -22px;
      top: 4px;
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 0H4V4H0V8H4V12H8V8H12V4H8V0Z' fill='%2329B8FF'/%3E%3C/svg%3E%0A");
    }
    li + li {
      margin-top: 16px;
    }
  }
}
.ba-button {
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  background: $primary-color;
  border-color: $primary-color;
  &:hover {
    color: $primary-color;
  }
}
</style>