<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      cards: [],
    };
  },
  created() {
    fetch(`https://razomua.flywheelstaging.com/wp-json/hospitals/v1/post`)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.cards = data;
      });
  },
};
</script>
