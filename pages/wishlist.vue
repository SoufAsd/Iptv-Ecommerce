<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="wishlist" />
        
        <!-- wishlist section start -->
        <div class="cart-main-area pt-90 pb-100">
            <div class="container">
                <div class="row" v-if="products.length > 0">
                    <div class="col-12">
                        <h3 class="cart-page-title">Your wishlist items</h3>
                        <div class="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Add To Cart</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td class="product-thumbnail">
                                            <n-link :to="`/product/${slugify(product.title)}`">
                                                <img :src="product.images[0]" :alt="product.title">
                                            </n-link>
                                        </td>
                                        <td class="product-name">
                                            <n-link :to="`/product/${slugify(product.title)}`">{{ product.title }}</n-link>
                                        </td>
                                        <td class="product-price-cart">
                                            <span class="amount">${{ discountedPrice(product).toFixed(2) }}</span>
                                            <del class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</del>
                                        </td>
                                        <td class="product-wishlist-cart">
                                            <button @click="addToCart(product)">add to cart</button>
                                        </td>
                                        <td class="product-remove">
                                            <button @click="removeProductFromWishlist(product)"><i class="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-like"></i>
                            </div>
                            <h4>No items found in wishlist</h4>
                            <n-link to="/shop" class="empty-cart__button">Add Item</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- wishlist section end -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
        computed: {
            products() {
                return this.$store.getters.getWishlist
            },
        },

        methods: {
            addToCart(product) {
                const prod = {...product, cartQuantity: 1}
                // for notification
                if (this.$store.state.cart.find(el => product.id === el.id)) {
                    this.$notify({ title: 'Already added to cart update with one' })
                } else {
                    this.$notify({ title: 'Add to cart successfully!'})
                }

                this.$store.dispatch('addToCartItem', prod)
            },

            removeProductFromWishlist(product) {
                // for notification
                this.$notify({ title: 'Remove item from wishlist!'})
                
                this.$store.dispatch('removeProductFromWishlist', product)
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

        head() {
            return {
                title: "Wishlist"
            }
        },
    };
</script>
