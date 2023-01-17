<template>
    <div class="minicart-wrapper" :class="miniCart">
        <div class="shopping-cart-content" v-if="products.length > 0">
            <ul>
                <li class="single-shopping-cart" v-for="(product, index) in products" :key="index">
                    <div class="shopping-cart-img">
                        <n-link :to="`/product/${slugify(product.title)}`">
                            <img :src="product.images[0]" :alt="product.title">
                        </n-link>
                    </div>
                    <div class="shopping-cart-title">
                        <h4>
                            <n-link :to="`/product/${slugify(product.title)}`">{{ product.title }}</n-link>
                        </h4>
                        <h6>Qty: {{ product.cartQuantity }}</h6>
                        <span>${{ discountedPrice(product).toFixed(2) }}</span>
                    </div>
                    <div class="shopping-cart-delete">
                        <button @click="removeProduct(product)">
                            <i class="fa fa-times-circle"></i>
                        </button>
                    </div>
                </li>
            </ul>
            <div class="shopping-cart-total">
                <h4>Total : <span class="shop-total">${{ total.toFixed(2) }}</span></h4>
            </div>
            <div class="shopping-cart-btn btn-hover text-center" @click="$emit('minicartClose')">
                <n-link to="/cart" class="default-btn">view cart</n-link>
                <n-link to="/checkout" class="default-btn">checkout</n-link>
            </div>
        </div>
        <div class="shopping-cart-content text-center" v-else>
            <p>No items added to cart</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["miniCart"],

        computed: {
            products() {
                return this.$store.getters.getCart
            },
            total() {
                return this.$store.getters.getTotal
            }
        },

        methods: {
            removeProduct(product) {
                // for notification
                this.$notify({ title: 'Item remove from cart!'})
                this.$store.dispatch('removeProductFromCart', product)
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
    };
</script>