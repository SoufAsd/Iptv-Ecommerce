<template>
    <div class="slider-area ml-70 mr-70 nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img pt-0" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-7 ms-auto">
                            <div class="slider-content-2 slider-animation-1">
                                <h3>{{ slider.subTitle }}</h3>
                                <h1 v-html="slider.title"></h1>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">SHOP NOW</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            
            <!-- Swiper Navigation Start -->
            <div class="hero-slider-nav swiper-button-prev">
                <i class="pe-7s-angle-left"></i>
            </div>
            <div class="hero-slider-nav swiper-button-next">
                <i class="pe-7s-angle-right"></i>
            </div>
            <!-- Swiper Navigation End -->
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    speed: 750,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 6000
                    },
                    effect: "fade",
                    fadeEffect: { 
                        crossFade: true 
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                sliderData: [
                    {
                        subTitle: "Sale Off 40%",
                        title: "Summer Offer <br> 2022 Collection",
                        backgroundImage: "/img/slider/slider-2-1.jpg"
                    },
                    {
                        subTitle: "Sale Off 20%",
                        title: "Winter Offer <br> New Collection",
                        backgroundImage: "/img/slider/slider-2-2.jpg"
                    }
                ]
            }
        },
    };
</script>