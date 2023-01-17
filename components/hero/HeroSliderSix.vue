<template>
    <div class="slider-area nav-style-1 nav-style-3">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="slider-height-5 d-flex align-items-center bg-img" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-4 slider-content-6 slider-animation-1 text-center">
                                <h1>{{ slider.title }}</h1>
                                <p>{{ slider.desc }}</p>
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
                        title: "Welcome to Flone",
                        desc: "30% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-6-1.jpg"
                    },
                    {
                        title: "Welcome to Flone",
                        desc: "40% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-6-2.jpg"
                    }
                ]
            }
        }
    };
</script>