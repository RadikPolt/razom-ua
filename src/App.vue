<template>
  <div class="off-canvas-wrapper">
    <div
      v-bind:class="{ 'is-open' : isMenuOpen }"
      class="off-canvas position-left"
      id="offCanvas"
      data-off-canvas
    >
      <AdaptiveNav />
      <!-- Your menu or Off-canvas content goes here -->
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <Header />
      <router-view />
      <Footer />
      <!-- Your page content lives here -->
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AdaptiveNav from "@/components/AdaptiveNav.vue";

import { eventBus } from "@/main.js";

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  components: {
    Header,
    Footer,
    AdaptiveNav
  },
  created() {
    eventBus.$on("toggleMenu", () => {
      this.isMenuOpen = !this.isMenuOpen;
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>

