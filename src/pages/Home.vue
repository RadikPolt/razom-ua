<template>
  <div class="home" v-if="sections">
    <div class="ba-section-content row column">
      <div class="ba-content row">
        <Intro v-bind:intro="sections.intro" />
        <Done v-bind:done="sections.intro" />
      </div>
    </div>
    <Needs v-bind:needs="sections.intro" v-bind:filters="sections.map" />
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Done from "@/components/home/Done.vue";
import Needs from "@/components/home/Needs.vue";

export default {
  data() {
    return {
      title: "Home page",
      cards: [],
      sections: null,
    };
  },
  components: {
    Intro,
    Done,
    Needs,
  },
  created() {
    fetch("https://razomua.flywheelstaging.com/wp-json/home/v1/post")
      .then((result) => result.json())
      .then((data) => {
        this.sections = data[0].acf;
        console.log(this.sections);
      });
  },
  created() {
    fetch(`https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        this.cards = data;
      });
  },
};
</script>

<style lang="scss">
.ba-content {
  padding-top: 100px;
  @include breakpoint(medium) {
    padding: 136px 0 0 40px;
    margin-bottom: 64px;
  }
  @include breakpoint(large) {
    padding: 176px 72px 0 72px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 147px;
  }
}
</style>