<template>
    <div class="minicart-wrapper" :class="miniCart">
        <div class="shopping-cart-content" v-if="products">
            <ul>
                <li class="single-shopping-cart" v-for="(pack, index) in products" :key="index">
                    <div class="shopping-cart-img">
                        <nuxt-link :to="`/packdetail/${pack.id}`">
                            <img :src="baseURL+pack.image" :alt="pack.name">
                        </nuxt-link>
                    </div>
                    <div class="shopping-cart-title">
                        <h4>
                            <nuxt-link :to="`/packdetail/${pack.id}`">{{ pack.name }}</nuxt-link>
                        </h4>
                        <h6>Qty: {{ pack.cartQuantity }}</h6>
                        <span>${{ pack.price.toFixed(2) }}</span>
                    </div>
                    <div class="shopping-cart-delete">
                        <button @click="removeProduct(pack)">
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
        data(){
            return {
                baseURL:'http://127.0.0.1:8000',
            }
        },
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