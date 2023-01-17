<template>
    <div class="home-cosmetics">
        <TheHeader />
        <HeroSliderCosmetics />
        <ProductWrapperCosmetics />
        <ServicePolicyFour />
        <TestimonialOne />
        <BannerStyleFour />
        <BrandLogoCarousel />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSliderCosmetics: () => import('@/components/hero/HeroSliderCosmetics'),
            ProductWrapperCosmetics: () => import('@/components/product/ProductWrapperCosmetics'),
            ServicePolicyFour: () => import('@/components/policy/ServicePolicyFour'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Cosmetics'
            }
        }
    };
</script>


