<template>
    <div>
        <div class="product-area hm5-section-padding pt-100 pb-90">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in products.slice(0, 8)" :key="index">
                        <ProductGridStyleThree :product="product" />
                    </div>
                    <div class="view-more text-center mt-20 toggle-btn2 col-12">
                        <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
                    </div>
                </div>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        components: {
            ProductGridStyleThree: () => import('@/components/product/ProductGridStyleThree'),
            QuickView: () => import('@/components/QuickView'),
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },
        },
    };
</script>