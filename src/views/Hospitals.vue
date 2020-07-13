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
          <article class="ba-card" v-for="(card, index) in cards" :key="index">
            <div class="ba-card__donate">
              <span class="blue">волонтерська допомога</span>
            </div>
            <a class="ba-card__title" href="#" v-bind:key="card.post_title">{{card.post_title }}</a>
            <div class="ba-card__content" >
              <p class="ba-card__needs" v-bind:key="card.post_content" v-html="card.post_content"> {{card.post_content}}</p>
            </div>
            <div class="ba-card__information">
              <span class="ba-card__date" v-bind:key="card.post_date">{{card.post_date}}</span>
              <span class="ba-card__author">
                Координатор
                <a href="#">Власюк Таня</a>
              </span>
            </div>
          </article>
          <!-- /.ba-card -->
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
export default {
  name: "Hospitals",
  components: {
    Footer
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