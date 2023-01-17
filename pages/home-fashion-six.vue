<template>
    <div class="fashion-six-wrapper">
        <HeaderOffcanvasMenuWithTransparent />
        <HeroSliderSix />
        <WelcomeMessage class="pt-95 pb-60" />
        <ProductWrapper />
        <NewsletterStyleOne />
        <InstagramPostWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOffcanvasMenuWithTransparent: () => import('@/components/HeaderOffcanvasMenuWithTransparent'),
            HeroSliderSix: () => import('@/components/hero/HeroSliderSix'),
            WelcomeMessage: () => import('@/components/WelcomeMessage'),
            ProductWrapper: () => import('@/components/product/ProductWrapper'),
            NewsletterStyleOne: () => import('@/components/NewsletterStyleOne'),
            InstagramPostWrapper: () => import('@/components/InstagramPostWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion Six'
            }
        },
    };
</script>


