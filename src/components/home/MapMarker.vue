<template>
  <div></div>
</template>
<script>
export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    hosp: {
      type: Object,
      required: true
    }
  },
  created() {
    const { Marker } = this.google.maps;

    new Marker({
      position: {
        lat: +this.hosp.acf.google_map.lat,
        lng: +this.hosp.acf.google_map.lng
      },
      map: this.map,
      icon: {
        path:
          "M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z",
        anchor: new google.maps.Point(16, 30),
        size: new google.maps.Size(16, 20),
        strokeOpacity: 1,
        strokeWeight: 1,
        strokeColor: this.hosp.acf.help,
        fillColor: this.hosp.acf.help,
        fillOpacity: 1,
        scale: 0.8
      }
    });
  }
};
</script>
