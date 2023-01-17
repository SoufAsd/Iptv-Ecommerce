<template>
    <div class="slider-area nav-style-1">
        <swiper :options="swiperOption">
            <swiper-slide class="single-slider-3 slider-height-3 bg-gray-2 d-flex align-items-center slider-height-res-hm4" v-for="(hero, index) in heroData" :key="index">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-sm-6">
                            <div class="slider-content-3 slider-content-5 text-center slider-animation-1">
                                <h3>{{ hero.subTitle }}</h3>
                                <h1>{{ hero.title }}</h1>
                                <p>{{ hero.desc }}</p>
                                <div class="slider-btn btn-hover">
                                    <n-link to="/shop">SHOP NOW</n-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-sm-6">
                            <div class="single-slider-img4">
                                <div class="single-slider-img4-inner slider-img-animation">
                                    <img :src="hero.imgSrc" :alt="hero.title">
                                </div>
                                <div class="single-price-wrap">
                                    <img src="/img/icon-img/slider-shape.png" alt="icon">
                                    <div class="single-price">
                                        <span>Sale</span>
                                        <span class="dollar">${{ hero.salePrice }}</span>
                                    </div>
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
                heroData: [
                    {
                        id: 1,
                        subTitle: "Stylish",
                        title: "Male Shoes",
                        desc: "30% off Winter Vacation",
                        imgSrc: "/img/slider/slider-5-1.png",
                        salePrice: "99.00"
                    },
                    {
                        id: 2,
                        subTitle: "Stylish",
                        title: "Women Shoes",
                        desc: "40% off Summer Vacation",
                        imgSrc: "/img/slider/slider-5-2.png",
                        salePrice: "79.00"
                    }
                ]
            }
        }
    }
</script>