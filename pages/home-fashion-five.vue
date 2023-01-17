<template>
    <div class="home-sidebar-right">
        <HeroSliderFive />
        <BannerStyleTwo />
        <ProductWrapperFive />
        <NewsletterStyleTwo />
        <TheFooter class="hm4-footer-padding" />
    </div>
</template>

<script>
    export default {
        layout: "HomeSidebarMenu",
        components: {
            HeroSliderFive: () => import("@/components/hero/HeroSliderFive"),
            BannerStyleTwo: () => import("@/components/banner/BannerStyleTwo"),
            ProductWrapperFive: () => import("@/components/product/ProductWrapperFive"),
        },
        head() {
            return {
                title: 'Home Fashion Five'
            }
        },
    };
</script>


