<template>
    <div class="home-fashion-two">
        <TheHeader />
        <HeroSliderTwo />
        <BannerStyleOne class="pt-60 pb-95" />
        <ProductWrapperTwo />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSliderTwo: () => import('@/components/hero/HeroSliderTwo'),
            BannerStyleOne: () => import('@/components/banner/BannerStyleOne'),
            ProductWrapperTwo: () => import('@/components/product/ProductWrapperTwo'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion Two'
            }
        }
    };
</script>


