<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="shop grid standard" />
        
        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <!-- shop top bar -->
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="shop-select">
                                    <select v-model="selectedPrice">
                                        <option value="default">Default</option>
                                        <option value="low2high">Price - Low to High</option>
                                        <option value="high2low">Price - High to Low</option>
                                    </select>
                                </div>
                                <p>Showing {{perPage * currentPage - perPage + 1}} to {{perPage * currentPage > filterItems.length ? filterItems.length : perPage * currentPage}} of {{filterItems.length}} result</p>
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
                            <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="filterItems.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <ShopSidebar classes="mr-30" />
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
                filterItems: [],
                prevSelectedCategoryName: '',
                prevSelectedTagName: '',
                prevSelectedSizeName: '',
                prevSelectedColorName: '',
                currentPage: 1,
                perPage: 9,
                selectedPrice: 'default'
            }
        },

        computed: {
            products() {
                return this.$store.getters.getProducts
            },

            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.filterItems.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.filterItems.length / this.perPage);
            },
        },

        mounted(){
            this.updateProductData()
        },

        methods: {
            paginateClickCallback(page) {
                this.currentPage = Number(page);
            },

            updateProductData(){
                this.paginateClickCallback(1);

                const categoryName = this.$route.query.category;
                const sizeName = this.$route.query.size;
                const colorName = this.$route.query.color;
                const tagName = this.$route.query.tag;
                
                if( Object.keys(this.$route.query).length === 0){
                    this.filterItems = [...this.products]
                }
                
                if(categoryName && this.prevSelectedCategoryName !== categoryName){
                    if(Boolean(categoryName) === false || categoryName === this.slugify("all categories")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products.filter((item) => this.slugify(item.category).includes(categoryName));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }
        
                if(colorName && this.prevSelectedColorName !== colorName){
                    if(Boolean(colorName) === false || colorName === this.slugify("all colors")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products.filter((item) => item.variation?.color.includes(colorName));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }

                if(sizeName && this.prevSelectedSizeName !== sizeName){
                    if(Boolean(sizeName) === false || sizeName === this.slugify("all sizes")){
                        this.filterItems = [...this.products]
                    }
                    else {
                        const resultData = this.products.filter((item) => item.variation?.sizes.includes(sizeName));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                }
            
                if(tagName && this.prevSelectedTagName !== tagName){
                    if(tagName){
                        const resultData = this.products.filter((item) => this.slugify(item.tag).includes(tagName));
                        this.filterItems = [];
                        this.filterItems.push(...resultData);
                    }
                    else {
                        this.filterItems = [...this.products]
                    } 
                }
                
                this.prevSelectedCategoryName = categoryName;
                this.prevSelectedColorName = colorName;
                this.prevSelectedSizeName = sizeName;
                this.prevSelectedTagName = tagName;
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            slugify(text) {
                return text
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-") // Replace spaces with -
                    .replace(/[^\w-]+/g, "") // Remove all non-word chars
                    .replace(/--+/g, "-") // Replace multiple - with single -
                    .replace(/^-+/, "") // Trim - from start of text
                    .replace(/-+$/, ""); // Trim - from end of text
            }
        },

        watch: {
            $route(){
                this.updateProductData()
            },

            selectedPrice(){
                switch (this.selectedPrice) {
                    case "low2high":
                        this.filterItems =  this.filterItems.sort((a, b)=> this.discountedPrice(a) - this.discountedPrice(b))
                        break;
                    case "high2low":
                        this.filterItems =  this.filterItems.sort((a, b)=> this.discountedPrice(b) -  this.discountedPrice(a))
                        break;
                    default:
                        this.filterItems = [...this.products]
                }
            }
        },

        head() {
            return {
                title: "Shop grid standard"
            }
        },
    };
</script>
