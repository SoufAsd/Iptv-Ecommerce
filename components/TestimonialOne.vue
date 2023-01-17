<template>
    <div class="testimonial-area pb-95">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 ms-auto me-auto">
                    <swiper :options="testimonialOption">
                        <div class="swiper-slide single-testimonial text-center" v-for="(testimonial, index) in testimonialData" :key="index">
                            <img :src="testimonial.imgSrc" :alt="testimonial.name">
                            <p>{{ testimonial.desc }}</p>
                            <div class="client-info">
                                <i class="fa fa-map-signs"></i>
                                <h5>{{ testimonial.name }}</h5>
                                <span>{{ testimonial.position }}</span>
                            </div>
                        </div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                testimonialOption: {
                    loop: true,
                    speed: 750,
                    autoplay: true,
                },
                testimonialData: [
                    {
                        id: 1,
                        name: "grace alvarado",
                        position: "customer",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
                        imgSrc: "/img/testimonial/testi-1.png"
                    },
                    {
                        id: 2,
                        name: "Maria Maya",
                        position: "customer",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
                        imgSrc: "/img/testimonial/testi-1.png"
                    }
                ]
            }
        },
    }
</script>