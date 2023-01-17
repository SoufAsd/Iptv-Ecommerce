<template>
    <div class="product-area pb-90 section-padding-1">
        <div class="container-fluid">
            <SectionTitleWithSubTitle classes="section-title-2 mb-60" title="New Arrival" subTitle="There are some new arrival collections on this winter" />
            <div class="custom-row">
                <div class="custom-col-5" v-for="(product, index) in products.slice(0, 10)" :key="index">
                    <ProductGridItemTwo :product="product" />
                </div>
                <div class="view-more text-center mt-20 toggle-btn2 col-12">
                    <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
                </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
            QuickView: () => import('@/components/QuickView'),
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },
        },
    };
</script>