<template>
    <div class="home-seven-wrapper">
        <HeaderWithTopbar containerClass="container-fluid" />
        <HeroSliderSeven />
        <ProductWrapperSeven />
        <BannerStyleThree />
        <DealWithCountdown />
        <ServicePolicyThree />
        <NewsletterStyleOne />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            HeroSliderSeven: () => import('@/components/hero/HeroSliderSeven'),
            ProductWrapperSeven: () => import('@/components/product/ProductWrapperSeven'),
            BannerStyleThree: () => import('@/components/banner/BannerStyleThree'),
            DealWithCountdown: () => import('@/components/DealWithCountdown'),
            ServicePolicyThree: () => import('@/components/policy/ServicePolicyThree'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'Home Fashion Seven'
            }
        },
    };
</script>



