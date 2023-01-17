<template>
    <div class="banner-area pb-95">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-6 mt-30" v-for="(banner, index) in banners" :key="index">
                    <BannerItem :banner="banner" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banners: [
                    {
                        id: 1,
                        price: 99.00,
                        title: "Eye Lashes",
                        imgSrc: "/img/banner/banner-16.png"
                    },
                    {
                        id: 2,
                        price: 79.00,
                        title: "Anti-Wrinkles",
                        imgSrc: "/img/banner/banner-17.png"
                    }
                ]
            }
        }
    }
</script>