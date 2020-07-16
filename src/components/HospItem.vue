<template>
  <article class="ba-card">
    <div class="ba-card__donate">
      <span class="blue">волонтерська допомога</span>
    </div>
    <a class="ba-card__title" href="#" v-bind:key="hosp.post_title">{{ hosp.post_title }}</a>
    <div class="ba-card__content">
      <button class="ba-card__button" v-on:click="show = !show">Надана допомога</button>
      <transition name="fade">
        <div v-if="show">
          <p
            class="ba-card__needs"
            v-html="hosp.post_content"
            v-if="hosp.post_content.length"
            v-bind:key="hosp.post_content"
          >{{ hosp.post_content }}</p>
        </div>
      </transition>
    </div>

    <div class="ba-card__information">
      <span class="ba-card__date" v-bind:key="hosp.post_date">{{ hosp.post_date }}</span>
      <span class="ba-card__author">
        Координатор
        <a href="#">Власюк Таня</a>
      </span>
    </div>
  </article>
  <!-- /.ba-card -->
</template>

<script>
export default {
  name: "HospItem",
  props: ["hosp"],
  data: function() {
    return {
      show: false
    };
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>