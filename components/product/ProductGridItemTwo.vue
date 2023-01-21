<template>
    <div class="product-wrap-2 mb-25">
        <div class="product-img">
            <n-link :to="`/product/${slugify(product.name)}`">
                <img class="default-img" :src="product.image" :alt="product.name">
                <img class="hover-img" :src="product.image" :alt="product.name">
            </n-link>
            <div class="product-badges">
                <span class="product-label pink" >New</span>
                
            </div>
            <div class="product-action-2">
                <button class="btn" title="Compare" @click="addToCompare(product)"> 
                    <i class="pe-7s-shuffle"></i>
                </button>
                <button class="btn" title="Add To Cart" @click="addToCart(product)">
                    <i class="pe-7s-cart"></i>
                </button>
                <button class="btn" title="Quick View" @click="onClick(product)">
                    <i class="pe-7s-look"></i>
                </button>
            </div>
        </div>
        <div class="product-content-2">
            <div class="title-price-wrap-2">
                <h3>
                    <n-link :to="`/product/${slugify(product.name)}`">{{ product.name }}</n-link>
                </h3>
                <div class="price-2">
                    <span>${{ discountedPrice(product).toFixed(2) }}</span>
                    <span class="old">${{ product.price.toFixed(2) }}</span>
                </div>
            </div>
            <div class="pro-wishlist-2">
                <button @click="addToWishlist(product)"><i class="pe-7s-like"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"],

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

            discountedPrice(product) {
                return product.price 
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
            },

            onClick(product) {
                this.$modal.show('quickview', product);
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
    };
</script>