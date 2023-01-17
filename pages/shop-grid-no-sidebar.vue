<template>
    <div class="shop-no-sidebar-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="shop grid no sidebar" />
        
        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-12">
                        <!-- shop top bar -->
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="shop-select">
                                    <select>
                                        <option value="default">Default</option>
                                        <option value="low2high">Price - Low to High</option>
                                        <option value="high2low">Price - High to Low</option>
                                    </select>
                                </div>
                                <p>Showing {{perPage * currentPage - perPage + 1}} to {{perPage * currentPage > products.length ? products.length : perPage * currentPage}} of {{products.length}} result</p>
                            </div>
                            <div class="shop-tab">
                                <button @click="layout = 'twoColumn'" :class="{ active : layout === 'twoColumn' }">
                                    <i class="fa fa-th-large"></i>
                                </button>
                                <button @click="layout = 'threeColumn'" :class="{ active : layout === 'threeColumn' }">
                                    <i class="fa fa-th"></i>
                                </button>
                                <button @click="layout = 'list'" :class="{ active : layout === 'list' }">
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end shop top bar -->

                        <!-- shop product -->
                        <div class="shop-bottom-area mt-35">
                            <div class="row product-layout" :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                                <div class="col-xl-4 col-sm-6" v-for="(product, index) in getItems" :key="index" >
                                    <ProductGridItem :product="product" :layout="layout"  />
                                </div>
                            </div>
                        </div>
                        <!-- end shop product -->

                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="products.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end product items wrapper -->

        <QuickView />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            ProductGridItem: () => import('@/components/product/ProductGridItem'),
            QuickView: () => import('@/components/QuickView'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                layout: "threeColumn",
                currentPage: 1,
                perPage: 9,
            }
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },

            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.products.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.products.length / this.perPage);
            },
        },

        methods: {
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },
        },

        head() {
            return {
                title: "Shop grid no sidebar"
            }
        }
    };
</script>
