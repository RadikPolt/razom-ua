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
        <div class="ba-container-center">
          <button
            v-if="page < cardsData.length"
            class="ba-loading"
            v-on:click="loadMore"
          >Побачити більше</button>
        </div>
      </div>
      <!-- /.ba-card-container -->

      <!-- /.ba-container -->
    </section>
  </main>
</body>
</template>

<script>
import HospItem from "@/components/HospItem.vue";

export default {
  props: ["hosp"],
  components: {
    HospItem
  },
  data() {
    return {
      cards: [],
      cardsData: [],
      page: 10,
      perPage: 10
    };
  },
  methods: {
    loadMore() {
      this.page += this.perPage;
      this.showItem();
    },
    showItem() {
      this.cards = this.cardsData.slice(0, this.page);
    }
  },
  created() {
    fetch(`https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post`)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.cardsData = data;
        this.showItem();
      });
  }
};
</script>
<style lang="scss">
.ba-container-center {
  text-align: center;
  padding-bottom: 30px;
}
.ba-loading {
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #29b8ff;
  border: 2px solid #29b8ff;
  padding: 10px 18px;
  outline: none;
  background: transparent;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #29b8ff 50%,
    #29b8ff
  );
  background-position: 100% 0;
  background-size: 201% 100%;
  transition: all 0.5s ease-in;
  &:hover {
    background-position: 0 0;
    color: #fff;
    transition: 0.5s;
  }
}
</style>