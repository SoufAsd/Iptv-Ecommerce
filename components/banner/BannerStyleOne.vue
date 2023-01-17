<template>
    <div class="banner-area">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-4 mt-30" v-for="(banner, index) in banners" :key="index">
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
                    title: "Watches",
                    price: 99,
                    imgSrc: "/img/banner/banner-1.jpg"
                },
                {
                    id: 2,
                    title: "Plo Bag",
                    price: 80,
                    imgSrc: "/img/banner/banner-2.jpg"
                },
                {
                    id: 3,
                    title: "Sunglass",
                    price: 79,
                    imgSrc: "/img/banner/banner-3.jpg"
                }
            ]
        };
    },
};
</script>