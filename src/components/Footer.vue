<template>
	<footer class="ba-footer">
		<div class="ba-tablet-footer desktop-hiden">
			<div class="ba-tablet-footer__wrapper mobile-hiden">
				<p class="ba-footerRight__copyright">2020 RazomUkraine.com</p>
				<a href="#" class="ba-footerRight__policy">Політика конфіденційності</a>
			</div>
			<!-- /.ba-tablet-footer__wrapper -->
			<div class="ba-mobile-footer">
				<a href="#">Контактна інформація</a>
				<div class="ba-languages">
					<a href="#">УКР</a>
	<a href="#">ENG</a>
						</div>
					</div>
		</div>
		<!-- /.ba-tablet-footer -->	
		<div class="ba-footer__wrapper">
<div class="ba-footerLeft">
<p class="ba-footerLeft__copyright tablet-hiden">2020 RazomUkraine.com</p>
<a href="#" class="ba-footerLeft__policy tablet-hiden">Політика конфіденційності</a>
<p class="ba-bachoo">Зроблено <a href="#" class="ba-bachoo__link">Bachoo Design Studio</a></p>
</div>
<div class="ba-footerRight">
	<div class="ba-languages mobile-hiden tablet-hiden">
<a href="#" class="ba-languages__ua">УКР</a>
<a href="#" class="ba-languages__eng">ENG</a>
	</div>
	<a href="#" class="ba-footerRight__contacts mobile-hiden tablet-hiden desktop-hiden">Контактна інформація</a>
	<a class="ba-footer__socials tablet-hiden desktop-hiden" href="https://razomukraine.com/contact-us/" target="_blank" rel="noopener noreferrer"><svg class="icon-facebook"><use xlink:href="#icon-facebook"></use></svg></a>
	<a href="tel:+380994691943" class="ba-footerRight__phone"><span class="ba-footerRight__text">Гаряча лінія +380994691943</span></a>
	<a href="#" class="ba-footerRight__contacts mobile-hiden tablet-hiden">Контактна інформація</a>
	<a class="ba-footer__socials mobile-hiden" href="https://razomukraine.com/contact-us/" target="_blank" rel="noopener noreferrer"><svg class="icon-facebook"><use xlink:href="#icon-facebook"></use></svg></a>
</div>
</div>
<!-- /.ba-footer__wrapper -->
<svg class="hiden">
<defs>
<symbol id="icon-facebook" viewBox="0 0 32 32">
<path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
</symbol></defs></svg>
</footer>
</template>

<script>
export default {
name: "Footer",
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap");
p{
	@media screen and (min-width:640px){
		margin:0;
	}
}
.ba-footer {
	background-color: #32323e;
	font: 400 12px/16px "Fira Sans", sans-serif;
	color: #ffffff;
	width:100%;
	@media screen and (min-width:1025px){
		font: 400 14px/20px "Fira Sans", sans-serif;
		padding: 0 20px;
	}
  &__wrapper {
	display: flex;
	flex-wrap: wrap;
	@media screen and (min-width:640px){
		justify-content: space-between;
		margin: 0 40px;
		padding:0;
	}
	@media screen and (min-width:1025px){
		padding: 0;
		justify-content: space-between;
		margin: 0 auto;
		align-items: baseline;
	}
  }
  a {
	text-decoration: none;
	color: #ffffff;
	text-decoration: underline;
  
  &:hover, &:active {
	color: red;
  }
}
  &__socials{
	display: inline-block;
height:52px;
width:60px;
background-color: #4469B0;
text-align: center;
@media screen and (min-width:640px){
	height:40px;
	width:39px;
	margin: 12px 0;
}
@media screen and (min-width:1025px){
	height:48px;
	width:48px;
	margin: 0;
}
  }

}
.ba-footerLeft{
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #ffffff;
  margin:0 16px;
  &__copyright{
	padding-bottom:12px;
	@media screen and (min-width:640px){
		padding-bottom:0;
	}

}
  &__policy{
	@media screen and (min-width:640px){
		padding-top:8px;
	}
	@media screen and (min-width:1025px){
	padding:0;
	}
  }
  @media screen and (min-width:640px){
	width: 50%;
	margin:0;
	flex-direction: row;
}
@media screen and (min-width:1025px){
	width:39%;
	justify-content: space-between;
}

}
.ba-bachoo{
	color: #9495A2;
	padding-top: 8px;
	padding-bottom: 20px;
	margin: 0;
	@media screen and (min-width:640px){
		padding: 24px 0;
		margin:0;
	}
	@media screen and (min-width:1025px){
		padding:0;
	}
	a {
	color: #9495A2;
	}
}
.ba-languages{

	&__ua{
		padding-right: 10px;
	}
	@media screen and (min-width:1025px){
		margin:12px 0;
	}
	
}
.ba-footerRight {
  display: flex;
  width: 100%;
  padding:0;
  justify-content: flex-end;
  @media screen and (min-width:640px){
  width:40%;
padding:0;
justify-content: flex-end;
  }
  @media screen and (min-width:1025px){
	flex-direction: row;
	justify-content: space-between;
	width:35%;
  }
  &__phone{
	display: inline-block;
	text-align: center;
	height:52px;
	width:calc(100% - 60px);
  background-color: #EA291D;
  @media screen and (min-width:640px){
  height:40px;
width:fit-content;
margin: 12px 0;
  }
  @media screen and (min-width:1025px){
	height:48px;
	margin: 0;
  }
 }
 &__text{
	display: inline-block;
	padding:16px 42px;
	font-size: 14px;
line-height: 20px;
color: #ffffff;
@media screen and (min-width:640px){
	padding:10px;
}
@media screen and (min-width:1025px){
	padding:14px 16px;
}
  }
  &__contacts{
	@media screen and (min-width:1025px){
		margin:12px 0;
	}
  }
}
//adaptive top part
.ba-tablet-footer{
	display: flex;
	justify-content: space-between;
	background-color: #32323e;
	border-bottom: 1px solid rgba(216, 217, 231, 0.2);
	color: #ffffff;
	@media screen and (min-width:640px){
		width: calc(100% - 80px);
			padding: 20px 0;
	margin:0 40px;
	}
	&__wrapper{
		display: flex;
		flex-direction: column;
		text-align: left;
		justify-content: space-between;
	}
}
.ba-mobile-footer {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 32px);
  background-color: #32323e;
  padding: 20px 0;
  margin:0 16px;
  color: #ffffff;
  font: 400 14px/1.4 "Fira Sans", sans-serif;
@media screen and (min-width:640px){
	width:22%;
	flex-direction: column-reverse;
	justify-content: space-between;
	text-align: right;
	padding: 0;
	margin:0;
}
  @media screen and (min-width: 1025px) {
	display: none;
  }

}
//hide elements
.mobile-hiden{
	display: none;
	@media screen and (min-width:640px){
		display: flex;
	}
}
.tablet-hiden{
	@media screen and (min-width:640px){
		display: none;
	}
	@media screen and (min-width:1025px){
		display: flex;
	}
}
.desktop-hiden{
	@media screen and (min-width:1025px){
		display: none;
	}
}
//social icon
.icon-facebook{
	height:35px;
	width: 49px;
fill: #fff;
margin:8px 5px;
@media screen and (min-width:640px){
	height:25px;
	width: 25px;
}
@media screen and (min-width:1025px){
	height:28px;
	width: 28px;
	margin:10px 10px;
}}
.hiden{
	display: none;
}
</style>