<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="Abonnement IPTV" />
        
        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div class="shop-select">
                                    <select >
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
                        <div class="shop-bottom-area mt-35">
                            <div class="row product-layout"  :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }" >
                                <div class="col-xl-4 col-sm-6" v-for="pack in $store.state.pack" :key="pack.id">
                                   <div class="product-wrap mb-30" >
                                        <div class="product-img" >
                                            <nuxt-link :to="`/packdetail/${pack.id}` " >
                                                <span @click="updateSelectedPack(pack)">
                                                    <img class="default-img" :src="baseURL+pack.image" :alt="pack.name">
                                                    <img class="hover-img" :src="baseURL+pack.image" :alt="pack.name">
                                                </span>
                                            </nuxt-link>
                                            <div class="product-badges">
                                                <span class="product-label pink" >New</span>
                                                
                                            </div>
                                            <div class="product-action" >
                                                <div class="pro-same-action pro-wishlist">
                                                    <button class="btn" title="Wishlist" @click="addToWishlist(pack)"> 
                                                        <i class="pe-7s-like"></i>
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-cart">
                                                    <button class="btn" title="Add To Cart" @click="addToCart(pack)">
                                                        <i class="pe-7s-cart"></i> 
                                                        Add to cart
                                                    </button>
                                                </div>
                                                <div class="pro-same-action pro-quickview">
                                                    <button class="btn" title="Quick View" @click="onClick(pack)">
                                                        <i class="pe-7s-look"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3>
                                                <nuxt-link :to="`/packdetail/${pack.id}` " >
                                                <span @click="updateSelectedPack(pack)">{{ pack.name }}
                                                </span>
                                                </nuxt-link>
                                            </h3>
                                            <div class="product-rating" >
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                                <i class="fa fa-star-o yellow"></i>
                                            </div>
                                        
                                            <div class="product-price">
                                                <span>€{{ pack.price.toFixed(2) }}</span>
                                            </div>
                                             <div class="product-content__list-view" v-if="layout === 'list'">
                                                <p>{{ pack.description }}</p>
                                                <div class="pro-action d-flex align-items-center" >
                                                    <div class="pro-cart btn-hover">
                                                        <n-link :to="`/product/${slugify(pack.name)}`" class="btn" v-if="pack.variation">
                                                            select option
                                                        </n-link>
                                                        <button class="btn" title="Add To Cart" @click="addToCart(pack)" v-else>
                                                            <i class="pe-7s-cart"></i> 
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                    <div class="pro-wishlist">
                                                        <button @click="addToWishlist(pack)">
                                                            <i class="fa fa-heart-o"></i>
                                                        </button>
                                                    </div>
                                                    <div class="pro-compare">
                                                        <button @click="addToCompare(pack)">
                                                            <i class="pe-7s-shuffle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>

                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="filterItems.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <!-- <ShopSidebar classes="mr-30" /> -->
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
    import HeaderWithTopbar from '../components/HeaderWithTopbar'
    import Breadcrumb from '../components/Breadcrumb'
    import QuickView from '../components/QuickView'
    import TheFooter from '../components/TheFooter'
    import axios from "axios"

    export default {
        
        data(){
            return {
                perPage : 9,
                filterItems:[],
                prevSelectedCategoryName: '',
                prevSelectedTagName: '',
                prevSelectedSizeName: '',
                prevSelectedColorName: '',
                currentPage: 2,
                layout:'grid two-column',
                baseURL:'http://127.0.0.1:8000',
            }
        },
        fetch({$axios,store}){
            return $axios.$get('api/get_all_pack_active')
            .then (response =>{
              store.commit('updatePack',response.packs)
            });
        },
        methods:{
            slugify(text){
                    return text;
            },
            getPaginateCount(){
                    return Math.ceil(this.filterItems.value.length / perPage.value);
            },
            addToCart(pack){          
                const prod = {...pack, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => pack.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },
            updateSelectedPack(pack){
                this.$store.commit('updateSelectedPack',pack)
            },
            onClick(pack) {
                this.$modal.show('quickview', pack);
            },
        }
    }
</script>