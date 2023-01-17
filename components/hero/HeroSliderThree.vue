<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slider, index) in sliderData" :key="index" class="single-slider-2 slider-height-2 d-flex align-items-center bg-img" :style="{ backgroundImage:`url(${slider.backgroundImage})` }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-8 ms-auto">
                            <div class="slider-content-3 slider-animation-1 text-center">
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
                        id: 1,
                        subTitle: "Stylish",
                        title: "Male Clothes",
                        desc: "30% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-3-1.jpg"
                    },
                    {
                        id: 2,
                        subTitle: "Stylish",
                        title: "Women Clothes",
                        desc: "40% off Winter Vacation",
                        backgroundImage: "/img/slider/slider-2-2.jpg"
                    }
                ]
            }
        },
    };
</script>