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
          <Card v-bind:ba_hospitals="cards" />
        </div>
        <!-- /.ba-card-container -->
      </div>
      <!-- /.ba-container -->
    </section>
  </main>

  <Footer />
</body>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Card from "@/components/hospitals/card.vue";
export default {
  name: "Hospitals",
  components: {
    Footer,
    Card
  },
  data() {
    return {
  title : 'Hospitals',
  cards: {},
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