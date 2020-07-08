<template>
  <header class="ba-header">
    <h4>Header</h4>
    <Nav/>
    <hr />
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style>
</style>