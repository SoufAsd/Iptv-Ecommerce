<template>
    <div class="instagram-area">
        <swiper :options="instagramOptions">
            <div class="swiper-slide single-instagram" v-for="(instagram, index) in instagramData" :key="index">
                <n-link to="/shop">
                    <img :src="instagram.imgSrc" alt="instagram image">
                </n-link>
            </div>
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                instagramOptions: {
                    loop: true,
                    speed: 1000,
                    breakpoints: {
                        360: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        },
                    },
                },

                instagramData: [
                    {
                        id: 1,
                        imgSrc: "/img/instagram/instagram-1.jpg"
                    },
                    {
                        id: 2,
                        imgSrc: "/img/instagram/instagram-2.jpg"
                    },
                    {
                        id: 3,
                        imgSrc: "/img/instagram/instagram-3.jpg"
                    },
                    {
                        id: 4,
                        imgSrc: "/img/instagram/instagram-4.jpg"
                    },
                    {
                        id: 5,
                        imgSrc: "/img/instagram/instagram-5.jpg"
                    }
                ]
            }
        },
    };
</script>
