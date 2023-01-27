<template>
    <div class="cart-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="checkout" />
        
        <!-- checkout section start -->
        <div class="checkout-area pt-95 pb-100">
            <div class="container">
                <div class="row" v-if="products.length > 0">
                    <div class="col-lg-7">
                        <div ref="paypal"></div>
                    </div>
                    <div class="col-lg-5">
                        <div class="your-order-area">
                            <h3>Your order</h3>
                            <div class="your-order-wrap gray-bg-4">
                                <div class="your-order-product-info">
                                    <div class="your-order-top">
                                        <ul>
                                            <li>Product</li>
                                            <li>Total</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-middle">
                                        <ul>
                                            <li v-for="(product, index) in products" :key="index">
                                                <span class="order-middle-left">{{ product.title }}  X  {{ product.cartQuantity }}</span> <span class="order-price">${{ product.total.toFixed(2) }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="your-order-bottom">
                                        <ul>
                                            <li class="your-order-shipping">Shipping</li>
                                            <li>Free shipping</li>
                                        </ul>
                                    </div>
                                    <div class="your-order-total">
                                        <ul>
                                            <li class="order-total">Total</li>
                                            <li>${{ total.toFixed(2) }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="place-order mt-25">
                                <button class="btn-hover">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-12">
                        <div class="empty-cart text-center">
                            <div class="icon">
                                <i class="pe-7s-cash"></i>
                            </div>
                            <h4>No items found in cart to checkout</h4>
                            <n-link to="/shop" class="empty-cart__button">Shop Now</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- checkout section end -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data(){
            return{
                product: {
                    price: 777.77,
                    description: "leg lamp from that one movie",
                    img: "./assets/lamp.jpg"
                }
            }
        },
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            Breadcrumb: () => import("@/components/Breadcrumb"),
            TheFooter: () => import("@/components/TheFooter"),
        },
        mounted(){
            const script = document.createElement("script");
            script.src =
            "https://www.paypal.com/sdk/js?client-id=AZw3UEPNNxZ_SQx66wIlaPQRKhoY_i-GS7pY0pJOSfhz1g992kwvCf3H-E22OXzMqOibFaj_AZ7PHkB8&disable-funding=card";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        methods:{
            setLoaded: function() {
                this.loaded = true;
                window.paypal
                    .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                        purchase_units: [
                            {
                            description: this.product.description,
                            amount: {
                                currency_code: "USD",
                                value: this.total
                            }
                            }
                        ]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        this.paidFor = true;
                        console.log(order);
                    },
                    onError: err => {
                       
                    }
                    })
                    .render(this.$refs.paypal);
                }
        },
        computed: {
            products() {
                return this.$store.getters.getCart
            },

            total() {
                return this.$store.getters.getTotal
            },
        },

        head() {
            return {
                title: "Checkout"
            }
        },
    };
</script>
