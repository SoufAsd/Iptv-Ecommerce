<template>
    <div class="wrapper-four">
        <HeaderLogoCenterWithTransparent />
        <HeroSliderFour />
        <ProductWrapperFour />
        <NewsletterStyleOne />
        <FooterStyleTwo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderLogoCenterWithTransparent: () => import('@/components/HeaderLogoCenterWithTransparent'),
            HeroSliderFour: () => import('@/components/hero/HeroSliderFour'),
            ProductWrapperFour: () => import('@/components/product/ProductWrapperFour'),
            NewsletterStyleOne: () => import('@/components/NewsletterStyleOne'),
            FooterStyleTwo: () => import('@/components/FooterStyleTwo'),
        },
        head() {
            return {
                title: 'Home Fashion Four'
            }
        },
    };
</script>

<style lang="scss">
    .wrapper-four {
        margin: 20px 20px;
        @media #{$xs-layout}{
            margin: 0px 0px;
        }
    }
</style>


