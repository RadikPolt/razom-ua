<template>
  <div class="ba-section-map column small-16 medium-16 large-11 medium-collapse" v-if="hosps">
    <MapLoader
      class="ba-map"
      :mapConfig="mapConfig"
      apiKey=""
    >
      // insert your google maps api key to render styled map
      <template slot-scope="{ google, map }">
        <MapMarker
          v-for="(hosp, i) in hosps"
          :key="i"
          :google="google"
          :map="map"
          :hosp="hosp"
        />
      </template>
    </MapLoader>
  </div>
</template>

<script>
import MapLoader from "@/components/home/MapLoader.vue";
import MapMarker from "@/components/home/MapMarker.vue";

import { mapSettings } from "@/constants/mapSettings.js";

export default {
  props: {
    hosps: {
      type: Array,
      required: true
    }
  },
  components: {
    MapLoader,
    MapMarker
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: { lat: 49.0139, lng: 31.2858 }
      };
    }
  }
};
</script>


<style lang="scss">
.ba-section-map {
  @include breakpoint(medium down) {
    padding: 0;
  }
}
.ba-map {
  height: 260px;
  @include breakpoint(medium) {
    height: 640px;
  }
}
</style>
