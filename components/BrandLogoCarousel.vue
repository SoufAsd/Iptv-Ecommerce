<template>
    <div class="brand-logo-area  about-brand-logo pb-20 ">
        <div class="container">
            <div class="brand-logo-active">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/netflix.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/national-geographic.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/BeIN_Sports.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/marvel.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/Fox_Movies.png" alt="">
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                brandLogoCarousel: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 50,
                    slidesPerView: 5,
                    autoplay: true,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        }
                    }
                }
            }
        },
    };
</script>

<style>
.brand-logo-area{
 /* background: linear-gradient(-45deg, #f862df, #ce17b5, #22c8e5  , #23d5ab); */
    background: linear-gradient(312deg, rgba(101,9,121,0.9948354341736695) 31%, rgba(235,0,255,1) 100%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.single-brand-logo {
    filter:  brightness(0) invert(1);
    text-align: center;
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: 0px 0;
    display: flex;
    max-height: 85px;
    max-width: 160px;
    min-width: 150px;
    min-height: 80px;
}
.single-brand-logo img {
    filter: grayscale(0%) !important;
}
</style>