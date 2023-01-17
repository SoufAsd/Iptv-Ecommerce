<template>
    <div>
        <header class="header-area sticky-bar header-padding-3 header-res-padding header-ptb-hm5 transparent-bar header-hm-6" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-3">
                        <div class="clickable-menu">
                            <button @click="navOpen = !navOpen">
                                <i class="pe-7s-menu"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-4 d-none d-md-block">
                        <div class="logo text-center logo-hm5">
                            <n-link to="/" class="sticky-none">
                                <img src="/img/logo/logo-2.png" alt="brand logo">
                            </n-link>
                            <n-link to="/" class="sticky-block">
                                <img src="/img/logo/logo.png" alt="brand logo">
                            </n-link>
                        </div>
                    </div>
                    <div class="col-md-4 col-9">
                        <div class="header-right-wrap header-right-wrap-white">
                            <div class="same-style header-search d-none d-lg-block">
                                <button class="search-active" @click="isOpenSearch = !isOpenSearch">
                                    <i class="pe-7s-search"></i>
                                </button>
                                <div class="search-content" :class="{ active:isOpenSearch }">
                                    <form>
                                        <input type="text" placeholder="Search" />
                                        <button class="button-search"><i class="pe-7s-search"></i></button>
                                    </form>
                                </div> 
                            </div>
                            <div class="same-style account-setting d-none d-lg-block">
                                <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings"><i class="pe-7s-user-female"></i></button>
                                <div class="account-dropdown" :class="{ active:isOpenAccountSettings }">
                                    <ul>
                                        <li><n-link to="/login-register">Login</n-link></li>
                                        <li><n-link to="/login-register">Register</n-link></li>
                                        <li><n-link to="/my-account">my account</n-link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="same-style header-compare">
                                <n-link to="/compare"><i class="pe-7s-shuffle"></i></n-link>
                                <span class="count-style">{{ compareItemCount }}</span>
                            </div>
                            <div class="same-style header-wishlist">
                                <n-link to="/wishlist"><i class="pe-7s-like"></i></n-link>
                                <span class="count-style">{{ wishlistItemCount }}</span>
                            </div>
                            <div class="same-style cart-wrap">
                                <button class="icon-cart" @click="openCart = !openCart">
                                    <i class="pe-7s-shopbag"></i>
                                    <span class="count-style">{{ cartItemCount }}</span>
                                </button>
                                <MiniCart :miniCart="{ visible:openCart }" @minicartClose="openCart = !openCart" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @toggleAsideMenu="navOpen = !navOpen" v-if="navOpen" />
    </div>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
            MiniCart: () => import("@/components/MiniCart"),
        },

        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount
            },
            wishlistItemCount() {
                return this.$store.getters.wishlistItemCount
            },
            compareItemCount() {
                return this.$store.getters.compareItemCount
            }
        },

        data() {
            return {
                isSticky: false,
                isOpenSearch: false,
                isOpenAccountSettings: false,
                openCart: false,
                navOpen: false
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY
                if(scroll >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>