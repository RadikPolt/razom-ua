<template>
  <div class="home">
    <div class="ba-section-content row column">
      <div class="ba-content">
        <Intro />
        <Done />
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Done from "@/components/home/Done.vue";

export default {
  name: "Home",
  components: {
    Intro,
    Done
  }
};
</script>

<style lang="scss">
.ba-content {
  display: flex;
  flex-wrap: wrap;
}
</style>