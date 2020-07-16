<template>
<div>
      <router-link to="/">На головну</router-link>
		<router-link to="/vikonano">Виконано</router-link>
    <router-view/>
	<Footer />
</div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Footer
	}
}
</script>

<style lang="scss">
@import "@/assets/scss/main";
</style>