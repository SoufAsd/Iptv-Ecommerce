<template>
    <div class="product-area product-mb-xs pt-100 pb-100">
        <div class="container">
            <SectionTitleWithSubTitle classes="section-title-6" title="New Arrivals" />
            <ul class="product-tab-list nav justify-content-center pt-25 pb-60">
                <li v-for="(cat, index) in filterCategory" :key="index" @click="filterHandler(cat)" class="nav-item">
                    <button :class="{'active': cat === selectedCategory}">{{ cat }}</button>
                </li>
            </ul>
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(product, index) in filterData.slice(0, 8)" :key="index">
                    <ProductGridItemTwo :product="product" />
                </div>
            </div>
            <div class="discover-more-btn btn-hover text-center mt-20 col-12">
                <n-link to="/shop">Discover More</n-link>
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                filterData: [],
                selectedCategory: ''
            }
        },

        components: {
            ProductGridItemTwo: () => import('@/components/product/ProductGridItemTwo'),
            QuickView: () => import('@/components/QuickView'),
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },

            filterCategory() {
                return ['all',...new Set(this.products.map((elem) => elem.category).flat())]
            }
        },

        methods: {
            filterHandler(cat) {
                this.selectedCategory = cat;
                if(this.selectedCategory === "all"){
                    this.filterData = this.products
                } else {
                    let filterResult = this.products.filter((item) => item.category.includes(cat));
                    this.filterData = [];
                    this.filterData.push(...filterResult)
                }
            }  
        },

        mounted () {
            this.filterData.push(...this.products)
        },
    };
</script>