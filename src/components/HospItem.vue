/* eslint-disable vue/valid-v-model */
<template>
  <article class="ba-card">
    <div class="ba-card__donate">
      <span class="blue">волонтерська допомога</span>
    </div>
    <h3 class="ba-card__title" v-bind:key="hosp.post_title">{{ hosp.post_title }}</h3>
    <div class="ba-card__content">
      <button
        class="ba-card__button"
        v-on:click="show = !show"
        v-if="hosp.post_content.length"
      >{{show?'Згорнути':'Детальніше'}}</button>
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
      <span
        class="ba-card__date"
        v-bind:key="hosp.post_date"
      >{{ new Date(hosp.post_date) | formatDate }}</span>
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
  data() {
    return {
		show: false,
    };
  },
  filters: {
  formatDate: d => [
    [
      `0${d.getDate()}`.slice(-2),
      `0${d.getMonth() + 1}`.slice(-2),
      d.getFullYear(),
    ].join('.') + ` | `,
    [
      `0${d.getHours()}`.slice(-2),
      `0${d.getMinutes()}`.slice(-2),
    ].join(':'),
  ].join(' ') + ` | `,
},
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