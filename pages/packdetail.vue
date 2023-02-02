<template>
     <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="$store.state.selectedPack.name"/>
        
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-details-slider">
                            <div class="product-details-img">
                                <div class="product-badges">
                                    <span class="product-label pink" >New</span>
                                    <span class="product-label purple" >-35%</span>
                                </div>
                                <swiper :options="swiperOptionTop" ref="swiperTop">
                                    <div class="large-img swiper-slide" >
                                        <img class="img-fluid" :src="baseURL+$store.state.selectedPack.image" :alt="$store.state.selectedPack.name">
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-content ml-70">
                            <h2>{{ $store.state.selectedPack.name }}</h2>
                            <div class="product-details-price">
                                <span>${{ $store.state.selectedPack.price.toFixed(2) }}</span>
                            </div>
                            <div class="pro-details-rating-wrap">
                                <div class="pro-details-rating" >
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                </div>
                            </div>
                            <p>{{ $store.state.selectedPack.description }}</p>
                            <div class="pro-details-quality">
                                <div class="cart-plus-minus">
                                    <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                    <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                    <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                                </div>
                                <div class="pro-details-cart btn-hover">
                                    <button @click="addToCart($store.state.selectedPack)">Add To Cart</button>
                                </div>
                             </div>
                            
                            <div class="pro-details-social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dribbble.com/" target="_blank">
                                            <i class="fa fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ProductDetailsDescriptionReview />
        <TheFooter />
    </div>
</template>

<script>
export default {
    data(){
            return {
                singleQuantity: 1,

                swiperOptionTop: {
                    loop: true,
                    slidesPerView : 1,
                    spaceBetween: 10,
                    effect: 'fade',
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },

                swiperOptionThumbs: {
                    loop: true,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: true,
                    loopedSlides: 4, // looped slides should be the same
                },
                baseURL:'http://127.0.0.1:8000',
            }
        },
    validate({params}){
        return !isNaN(params.id);
    },
    fetch({$axios,store,params}){
        if(store.state.selectedPack && store.state.selectedPack.id == params.id) return true
            return $axios.$get(`api/get_pack/${params.id}`)
            .then (response =>{
              store.commit('updateSelectedPack',response.packs)
            });
    },
    methods:{
            addToCart(pack){          
                const prod = {...pack, cartQuantity: this.singleQuantity}
                // for notification
                if (this.$store.state.cart.find(el => pack.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },
           

            increaseQuantity(){
                 this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },
    }
}
</script>

<style>
.pro-details-rating {
    display: flex;
}
.pro-details-rating::before {
   background-color: #d1d1d100 !important;
}
</style> 