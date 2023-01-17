<template>
    <div class="about-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="about us" />
        <WelcomeMessage class="pt-100 pb-95" />
        <BannerStyleOne class="pb-70" />
        <AboutMission />
        <FunFact />
        <TeamMembers />
        <BrandLogoCarousel />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'), 
            Breadcrumb: () => import('@/components/Breadcrumb'), 
            WelcomeMessage: () => import('@/components/WelcomeMessage'), 
            BannerStyleOne: () => import('@/components/banner/BannerStyleOne'), 
            AboutMission: () => import('@/components/AboutMission'), 
            FunFact: () => import('@/components/FunFact'), 
            TeamMembers: () => import('@/components/TeamMembers'), 
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'), 
            TheFooter: () => import('@/components/TheFooter'), 
        },
        head() {
            return {
                title: "About Us"
            }
        }
    };
</script>
