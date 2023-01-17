<template>
    <div class="brand-logo-area pb-100 about-brand-logo">
        <div class="container">
            <div class="brand-logo-active">
                <swiper :options="brandLogoCarousel">
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/barnd-logo-1.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/barnd-logo-2.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/barnd-logo-3.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/barnd-logo-4.png" alt="">
                    </div>
                    <div class="single-brand-logo swiper-slide">
                        <img src="/img/brand-logo/barnd-logo-5.png" alt="">
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
                    spaceBetween: 30,
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