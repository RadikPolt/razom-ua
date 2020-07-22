<template>
  <div class="ba-intro-intro ba-intro column small-16 medium-13 large-10">
    <div class="ba-intro__body " v-if="intro">
      <a :href="intro.image_link" target="_blank" rel="noopener" class="ba-intro__platform">
        <img :src="intro.image.url" :alt="intro.title" />
        <p>{{intro.content}}</p>
      </a>
      <h1 class="ba-intro__title">{{intro.title}}</h1>
      <ul class="ba-intro__list">
        <li v-for="(item, index) in intro.list" :key="index">{{intro.list[index].item}}</li>
      </ul>
      <a
        :href="intro.button_link.url"
        class="ba-button text-center"
        target="_blank"
        rel="noopener"
      >{{intro.button_link.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    intro: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.ba-intro {
  &__platform {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    @include breakpoint(medium) {
      margin-bottom: 32px;
    }
    img {
      width: 76px;
    }
    p {
      color: $medium-gray;
      font-size: 10px;
      margin: 0;
      margin-left: 8px;
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
    margin-bottom: 24px;
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
  .ba-button {
    @include breakpoint(small down) {
      width: 100%;
    }
    display: inline-block;
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