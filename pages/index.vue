<template>
    <div class="home-page-wrapper">
        <TheHeader />
        <HeroSlider />
        <PolicyServicePolicyTwo />
        <ChainnesChaineInfo />
        <ProductWrapper :packs="$store.state.pack"  />
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
<style>
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
</style>

