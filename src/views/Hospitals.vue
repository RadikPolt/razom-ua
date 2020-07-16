<template>
<body>
  <main>
    <section class="ba-hospitals">
      <div class="ba-container">
        <h1 class="ba-hospitals__title">
          Актуальна інформація щодо
          <br />постачання лікарень
        </h1>
        <h4 class="ba-hospitals__subtitle">Інформація оновлюється координаторами.</h4>
        <div class="ba-card__container" v-if="cards">
          <HospItem v-bind:hosp="hosp" v-for="(hosp, index) in cards" :key="index" />
        </div>
        <!-- /.ba-card-container -->
      </div>
      <!-- /.ba-container -->
    </section>
  </main>
</body>
</template>

<script>
import HospItem from "@/components/HospItem.vue";

export default {
  // props: ["cards"],
  name: "Hospitals",
  components: {
    HospItem
  },
  data() {
    return {
      title: "Hospitals",
      cards: []
    };
  },
  created() {
    fetch(`https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post`)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.cards = data;
      });
  }
};
</script>
<style lang="less">
</style>