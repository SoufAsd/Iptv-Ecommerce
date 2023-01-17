<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="product affiliate" />
        
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-details-slider">
                            <div class="product-details-img">
                                <div class="product-badges">
                                    <span class="product-label pink" v-if="product.new">New</span>
                                    <span class="product-label purple" v-if="product.discount">-{{ product.discount }}%</span>
                                </div>
                                <swiper :options="swiperOptionTop" ref="swiperTop">
                                    <div class="large-img swiper-slide" v-for="(image, index) in product.images" :key="index">
                                        <img class="img-fluid" :src="image" :alt="product.title">
                                    </div>
                                    <div class="quickview-nav swiper-button-prev">
                                        <i class="pe-7s-angle-left"></i>
                                    </div>
                                    <div class="quickview-nav swiper-button-next">
                                        <i class="pe-7s-angle-right"></i>
                                    </div>
                                </swiper>
                                <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                    <div class="thumb-img swiper-slide" v-for="(image, index) in product.images" :key="index">
                                        <img class="img-fluid" :src="image" :alt="product.title">
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-details-content ml-70">
                            <h2>{{ product.title }}</h2>
                            <div class="product-details-price">
                                <span>${{ discountedPrice(product).toFixed(2) }}</span>
                                <span class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</span>
                            </div>
                            <div class="pro-details-rating-wrap">
                                <div class="pro-details-rating" v-if="product.rating == 5">
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                </div>
                                <div class="pro-details-rating" v-if="product.rating == 4">
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-details-rating" v-if="product.rating == 3">
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-details-rating" v-if="product.rating == 2">
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-details-rating" v-if="product.rating == 1">
                                    <i class="fa fa-star-o yellow"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <span><a href="#">{{ product.rating }} Reviews</a></span>
                            </div>
                            <p>{{ product.description }}</p>
                            <div class="pro-details-cart mt-20 mb-20">
                                <a class="empty-cart__button" href="https://www.amazon.com/" target="_blank">Buy Now</a>
                            </div>
                            <div class="pro-details-meta">
                                <span class="label">Categories:</span>
                                <ul>
                                    <li v-for="(category, index) in product.category" :key="index">
                                        <n-link :to="`/shop?category=${category}`">{{ category }},</n-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="pro-details-meta">
                                <span class="label">Tag:</span>
                                <ul>
                                    <li v-for="(tag, index) in product.tag" :key="index">
                                        <n-link :to="`/shop?tag=${tag}`">{{ tag }},</n-link>
                                    </li>
                                </ul>
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
        data() {
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
            }
        },

        computed: {
            product() {
                return this.$store.getters.getProducts[1];
            },
        },

        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        },

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: this.singleQuantity}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }
                this.$store.dispatch('addToCartItem', prod)
            },

            discountedPrice(product) {
                return product.price - (product.price * product.discount / 100)
            },

            increaseQuantity(){
                if(this.product.quantity > this.singleQuantity) this.singleQuantity++
            },

            decreaseQuantity() {
                if(this.singleQuantity > 1) this.singleQuantity--
            },

            addToWishlist(product) {
                // for notification
                if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to wishlist!' })
                } else {
                    this.$notify({ title: 'Add to wishlist successfully!'})
                }
                this.$store.dispatch('addToWishlist', product)
            },

            addToCompare(product) {
                // for notification
                if (this.$store.state.compare.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to compare!' })
                } else {
                    this.$notify({ title: 'Add to compare successfully!'})
                }
                this.$store.dispatch('addToCompare', product)
            }
        },

        head() {
            return {
                title: "Product Affiliate"
            }
        },
    };
</script>
