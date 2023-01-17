<template>
    <div class="home-three-wrapper">
        <TheHeader />
        <HeroSliderThree />
        <ServicePolicyTwo />
        <ProductWrapperThree />
        <BlogWrapper />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            HeroSliderThree: () => import('@/components/hero/HeroSliderThree'),
            ServicePolicyTwo: () => import('@/components/policy/ServicePolicyTwo'),
            ProductWrapperThree: () => import('@/components/product/ProductWrapperThree'),
            BlogWrapper: () => import('@/components/BlogWrapper'),
            TheFooter: () => import('@/components/TheFooter'),
        },
        head() {
            return {
                title: 'home-fashion-three'
            }
        },
    };
</script>


