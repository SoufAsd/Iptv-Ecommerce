<template>
    <div class="compare-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="compare" />
        
        <!-- Compare section start -->
        <div class="compare-page-wrapper pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Compare Page Content Start -->
                        <div class="compare-page-content-wrap" v-if="products.length > 0">
                            <div class="compare-table table-responsive">
                                <table class="table table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <td class="first-column">Product</td>
                                            <td class="product-image-title" v-for="(product, index) in products" :key="index">
                                                <n-link :to="`/product/${slugify(product.title)}`" class="image">
                                                    <img class="img-fluid" :src="product.images[0]" :alt="product.title">
                                                </n-link>
                                                <h4 class="title">
                                                    <n-link :to="`/product/${slugify(product.title)}`">{{ product.title }}</n-link>
                                                </h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Description</td>
                                            <td class="pro-desc" v-for="(product, index) in products" :key="index">
                                                <p>{{ product.description }}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Price</td>
                                            <td class="pro-price" v-for="(product, index) in products" :key="index">
                                                <span>${{ discountedPrice(product).toFixed(2) }}</span>
                                                <del class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</del>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Add to cart</td>
                                            <td v-for="(product, index) in products" :key="index">
                                                <button @click="addToCart(product)" class="btn">Add to Cart</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Rating</td>
                                            <td class="pro-ratting" v-for="(product, index) in products" :key="index">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="first-column">Remove</td>
                                            <td class="pro-remove" v-for="(product, index) in products" :key="index">
                                                <button @click="removeFromCompare(product)"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Compare Page Content End -->

                        <div class="empty-cart text-center" v-else>
                            <div class="icon">
                                <i class="pe-7s-shuffle"></i>
                            </div>
                            <h4>No items found in compare</h4>
                            <n-link to="/shop" class="empty-cart__button">Add Item</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Compare section end -->
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
                return this.$store.getters.getCompare
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

            removeFromCompare(product) {
                // for notification
                this.$notify({ title: 'Item remove from compare!'})
                this.$store.dispatch('removeFromCompare', product)
            },

            discountedPrice(product) {
                return product.price - (product.price *(product.discount)/100)
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
                title: "Compare"
            }
        },
    };
</script>
