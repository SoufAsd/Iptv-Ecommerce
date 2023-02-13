<template>
    <div class="home-page-wrapper">
        <TheHeader />
        <HeroSlider />
        <PolicyTableFlipping />
        <PolicyServicePolicy />
        <ProductWrapper :packs="$store.state.pack"  />
        <BrandLogoCarousel />
        <FunFact/>
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
        data(){
            return {
                baseURL:'http://127.0.0.1:8000',
                
            }
        },
        fetch({$axios,store}){
            return $axios.$get('api/get_all_pack_active')
            .then (response =>{
              store.commit('updatePack',response.packs)
            });
        },
    };
</script>
<style >
.section-title h2 {
    color: #f7345e;
    transform: skewX(-10deg);
    position: relative;
    font-size: 3.8em;
    line-height: 1em;
    font-weight: 700;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media only screen and (max-width: 500px) {
    .section-title h2 {
        font-size: 1.8em !important;
    }
}
@media only screen and (max-device-width: 767px) and (min-device-width: 500px)
{
    .section-title h2 {
    font-size: 2.2em !important;
    }
}
</style>

