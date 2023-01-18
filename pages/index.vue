<template>
    <div class="home-page-wrapper">
        <TheHeader />
        <HeroSlider />
        <PolicyServicePolicy />
        <ProductWrapper :isSectionTitle=true />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Home Fashion One'
            }
        },
    };
</script>


