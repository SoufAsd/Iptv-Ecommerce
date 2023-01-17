<template>
    <div class="banner-area banner-area-2 pt-10 pb-85">
        <div class="container-fluid">
            <div class="custom-row-2 row">
                <div class="col-xl-3 col-md-6 mb-10" v-for="(banner, index) in banners" :key="index">
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
                    price: 99.00,
                    imgSrc: "/img/banner/banner-1.jpg"
                },
                {
                    id: 2,
                    title: "Plo Bag",
                    price: 80.00,
                    imgSrc: "/img/banner/banner-2.jpg"
                },
                {
                    id: 3,
                    title: "Sunglass",
                    price: 79.00,
                    imgSrc: "/img/banner/banner-3.jpg"
                },
                {
                    id: 4,
                    title: "Sun Hat",
                    price: 50.00,
                    imgSrc: "/img/banner/banner-4.jpg"
                }
            ]
        };
    },
};
</script>