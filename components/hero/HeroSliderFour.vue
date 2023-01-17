<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="slider-height-4 d-flex align-items-center bg-img" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="slider-content-4 slider-animation-1 text-center">
                                <h3>{{ slider.subTitle }}</h3>
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
                        subTitle: "New Arrival",
                        title: "Final Sale",
                        desc: "30% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-4-1.jpg"
                    },
                    {
                        subTitle: "New Arrival",
                        title: "Final Sale",
                        desc: "40% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-4-2.jpg"
                    }
                ]
            }
        },
    };
</script>