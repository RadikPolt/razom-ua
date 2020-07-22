<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
