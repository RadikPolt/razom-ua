<template>
  <div class="ba-section-done ba-done column small-16 medium-13 large-5">
    <div class="ba-done__body">
      <h3 class="ba-done__title">Виконано</h3>
      <article class="ba-done-block">
        <div class="ba-done-block__tags">
          <span>волонтерська допомога</span>
        </div>
        <a href="#" class="ba-done-block__link">
          <h5>Вінницька КНП «ВМКЛ №1»</h5>
        </a>
        <div class="ba-done-block__content">
          <p>Респіратори Бук 400 штук, Захисні окуляри штук 19, Захисний щиток багаторазовий штук 61, Халати штук 150, Комбінезон захисний штук 339</p>
        </div>
        <div class="ba-done-block__info">
          <span class="ba-done-block__date">12.04.2020</span>
          <span class="ba-done-block__time">| 13:45</span>
          <span class="ba-done-block__author">
            | Координатор
            <a href="#">Власюк Ірина</a>
          </span>
        </div>
      </article>
      <article class="ba-done-block">
        <div class="ba-done-block__tags">
          <span style="background: #D5F1FF">волонтерська допомога</span>
        </div>
        <a href="#" class="ba-done-block__link">
          <h5>Вінницька КНП «ВМКЛ №1»</h5>
        </a>
        <div class="ba-done-block__content">
          <p>Респіратори Бук 400 штук, Захисні окуляри штук 19, Захисний щиток багаторазовий штук 61, Халати штук 150, Комбінезон захисний штук 339</p>
        </div>
        <div class="ba-done-block__info">
          <span class="ba-done-block__date">12.04.2020</span>
          <span class="ba-done-block__time">| 13:45</span>
          <span class="ba-done-block__author">
            | Координатор
            <a href="#">Власюк Ірина</a>
          </span>
        </div>
      </article>
      <router-link to="/vukonano" class="ba-link">{{done.link.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["done"]
};
</script>

<style lang="scss">
.ba-done {
  margin-bottom: 40px;
  @include breakpoint(medium) {
    margin-bottom: 0;
  }
  &__title {
    padding-bottom: 16px;
    margin-top: 55px;
    margin-bottom: 16px;
    margin-bottom: 16px;
    @include breakpoint(large) {
      margin-top: 0;
    }
    position: relative;
    z-index: 0;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #9495a2;
      height: 1px;
    }
  }
}
.ba-done-block {
  margin-bottom: 32px;
  &__tags {
    margin-bottom: 8px;
    span {
      font-size: 12px;
      line-height: 16px;
      padding: 4px 6px;
      display: inline-block;
      font-weight: 500;
      border-radius: 2px;
      margin-bottom: 8px;
      background: $secondary-color;
    }
  }
  &__link {
    margin: 0;
    color: $black;
    h5 {
      margin: 0;
      line-height: 1.33;
    }
  }
  &__content {
    margin: 0;
    padding: 0;
    p {
      line-height: 1.4;
      margin-bottom: 16px;
    }
  }
  &__info {
    color: $medium-gray;
    font-size: 12px;
  }
  &__author {
    a {
      text-decoration: underline;
      &:hover {
        color: $success-color;
      }
    }
  }
}
</style>