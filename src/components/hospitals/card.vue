<template>
		<article class="ba-card" >
					<div class="ba-card__donate">
							<span class="blue">волонтерська допомога</span>
		</div>
				<a class="ba-card__title" href="#">{{ ba_hospitals.post_title }}</a>
					<div class="ba-card__content">
	<p class="ba-card__needs">{{ ba_hospitals.post_content }}</p>
			</div>
							<div class="ba-card__information">	
	<span class="ba-card__date">{{ ba_hospitals.post_date }}</span>
			<span class="ba-card__author">Координатор <a href="#">Власюк Таня</a></span>
					</div>
	</article>
				<!-- /.ba-card -->
</template>

<script>
export default {
name: "Card",
 props: ['ba_hospitals'],
}
</script>

<style>

</style>