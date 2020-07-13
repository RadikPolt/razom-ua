<template>
<div>
      <router-link to="/">На головну</router-link>
		<router-link to="/potreby-likaren">Потреби лікарень</router-link>
    <router-view/>
	<Footer />
</div>
</template>
<script>
export default {
	
}
</script>

<style lang="scss">
@import "@/assets/scss/main";
</style>
