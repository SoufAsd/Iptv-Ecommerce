<template>
    <div class="product-area pt-10 pb-90">
        <div class="container">
            <SectionTitleWithSubTitle title=" NOS PACKS!" classes="section-title"  />

            <div class="tab-content">
                <div class="tab-pane fade show active"  role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="pack in $store.state.pack" :key="pack.id">
                            <div class="product-wrap mb-30" data-aos="fade-left">
                                        <div class="product-img" >
                                            <nuxt-link :to="`/packdetail/${pack.id}` " >
                                                <span >
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
                                                <span >{{ pack.name }}
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
            </div>
        </div>
        <QuickView />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                layout: "twoColumn",
                baseURL:'http://127.0.0.1:8000',
            }
        },
        fetch({$axios,store}){
            return $axios.$get('api/get_all_pack_active')
            .then (response =>{
                console.log(response)
              store.commit('updatePack',response.packs)
            });
        },
        methods:{
            slugify(text){
                    return text;
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
            onClick(pack) {
                this.$modal.show('quickview', pack);
            },
        }
        
    }
</script>