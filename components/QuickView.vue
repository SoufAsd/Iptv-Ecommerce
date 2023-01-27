<template>
    <client-only>
        <modal name="quickview" @before-open="beforeOpen" width="50%" :scrollable="true" height=auto >
            <div class="quickview-wrapper row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">
                            <div class="product-badges">
                                <span class="product-label pink" >New</span>
                                <span class="product-label purple" >-25%</span>
                            </div>
                            <swiper :options="swiperOptionTop">
                                <div class="large-img swiper-slide" >
                                    <img class="img-fluid" :src="baseURL+product.image" :alt="product.name">
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="product-details-content">
                        <div slot="top-right">
                            <button @click="$modal.hide('quickview')" class="modal-close">
                                <i class="fa fa-times"></i>
                            </button>
                        </div>
                        <h2>{{ product.name }}</h2>
                        <div class="product-details-price">
                            <span>€{{ product.price }}</span>
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
                        <p>{{ product.description }}</p>
                     
                        <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">Add To Cart</button>
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
        </modal>
    </client-only>
</template>

<script>
    export default {
        data() {
            return {
                item: '',
                baseURL:'http://127.0.0.1:8000',
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
            }
        },

        computed: {
            product() {
                return this.item;
            }
        },

        methods: {
            beforeOpen ({params: product}) {
                this.item = product
            },

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

            discountedPrice(product) {
                return product.price
            },

            increaseQuantity(){
                 this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

          
        }
    };
</script>

<style lang="scss">
    .quickview-wrapper {
        .product-details-content {
            @media #{$xs-layout} {
                padding-top: 30px;
            }
            .pro-details-cart {
                &.btn-hover {
                    button {
                        @media #{$xxs-layout}{
                            padding: 23px 15px;
                        }
                    }
                }
            }
        }
    }
    .vm--overlay {
        background-color: rgba($dark, 0.8);
    }
    .vm--modal {
        padding: 15px;
        overflow-y: auto;
    }
    .modal-close {
        top: -20px;
        right: -20px;
        width: 40px;
        height: 40px;
        color: $white;
        font-size: 20px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid $theme-color;
        background-color: $theme-color;
    }
    .quickview-nav {
        color: $black;
        width: 40px;
        height: 40px;
        font-size: 40px;
        line-height: 40px;
        background-color: rgba($black, 0.2);
        transition: 0.4s;
        &:hover {
            color: $white;
            background-color: $theme-color;
        }
    }
    .vm--container.scrollable .vm--modal {
        width: 1000px !important;
        left: 50% !important;
        transform: translateX(-50%);
        overflow: unset;
        @media #{$md-layout}{
            width: 700px !important;
        }
        @media #{$xs-layout}{
            width: 320px !important;
            top: 30px !important;
        }
        @media only screen and (min-width: 480px) and (max-width: 579px){
            width: 420px !important;
        }
        @media #{$sm-layout}{
            width: 500px !important;
        }
    }
</style>    