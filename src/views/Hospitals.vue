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
        <div class="ba-card__container">
          <article id="vuecard" class="ba-card">
            <div class="ba-card__donate">
              <span class="blue">волонтерська допомога</span>
            </div>
            <a class="ba-card__title" href="#">Вінницька КНП «ВМКЛ №1»</a>
            <div class="ba-card__content">
              <p
                class="ba-card__needs"
              >Респіратори Бук 400 штук, Захисні окуляри штук 19, Захисний щиток багаторазовий штук 61, Халати штук 150, Комбінезон захисний штук 339</p>
            </div>
            <div class="ba-card__information">
              <span class="ba-card__date">12.04.2020 |</span>
              <span class="ba-card__time">13:45 |</span>
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
  name: "Потреби лікарень",
  components: {
    Footer
  },

  created() {
    fetch("https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post")
      .then(result => result.json())
      .then(data => console.log(data));
  }
};
</script>
<style lang="less">
</style>