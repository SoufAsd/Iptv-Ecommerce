<template>
    <div class="offcanvas-mobile-menu-wrapper">
        <div class="mobile-menu-overlay" @click="$emit('toggleAsideMenu')"></div>
        <div class="mobile-menu-inner">
            <button class="close-btn" @click="$emit('toggleAsideMenu')">
                <i class="pe-7s-close"></i>
            </button>
            <div class="mobile-menu-inner-wrapper">
                <div class="offcanvas-mobile-search">
                <form class="mobile-search-inner">
                    <input type="text" placeholder="Search here">
                    <button type="submit"><i class="pe-7s-search"></i></button>
                </form>
            </div>
            <div class="offcanvas-body-inner">
                <div class="menu-navigation">
                    <ResponsiveMobileMenu />
                </div>
                <div class="offcanvas-tools">
                    <div class="same-language-currency">
                        <span>Choose Language</span>
                        <select name="language">
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                    <div class="same-language-currency">
                        <span>Choose Currency</span>
                        <select name="currency">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="rup">Rup</option>
                        </select>
                    </div>
                </div>
                <div class="offcanvas-widget-area">
                    <ul>
                        <li>
                            <i class="fa fa-phone"></i>
                            <a href="callto:0123456789">0123456789</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ResponsiveMobileMenu: () => import('@/components/ResponsiveMobileMenu'),
        },
    };
</script>