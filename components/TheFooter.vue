<template>
    
    <footer class="footer-area  pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-sm-4">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <n-link to="/">
                                <img src="/img/logo/logo.png" alt="logo">
                            </n-link>
                        </div>
                        <p>© 2022 <a href="#" target="_blank">Flone</a>.<br> All Rights Reserved</p>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-30">
                        <div class="footer-title">
                            <h3>ABOUT US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><n-link to="/about">About us</n-link></li>
                                <li><n-link to="/shop">Store location</n-link></li>
                                <li><n-link to="/contact">Contact</n-link></li>
                                <li><n-link to="/contact">Orders tracking</n-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="footer-widget mb-30 ml-50">
                        <div class="footer-title">
                            <h3>USEFUL LINKS</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><n-link to="/about">Returns</n-link></li>
                                <li><n-link to="/about">Support Policy</n-link></li>
                                <li><n-link to="/about">Size guide</n-link></li>
                                <li><n-link to="/about">FAQs</n-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="footer-widget mb-30 ml-75">
                        <div class="footer-title">
                            <h3>FOLLOW US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.youtube.com/" target="_blank">Youtube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="footer-widget mb-30 ml-70">
                        <div class="footer-title">
                            <h3>SUBSCRIBE</h3>
                        </div>
                        <div class="subscribe-style">
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div class="subscribe-form">
                                <form class="mc-form">
                                    <input class="email" type="email" required="" placeholder="Enter your email here.." name="email" >
                                    <button class="button" name="subscribe">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="custom-shape-divider-top-1675683003">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>    
    </footer>
    
</template>

<script>
    export default {

    };
</script>

<style>
.custom-shape-divider-top-1675683003 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1675683003 svg {
    position: relative;
    display: block;
    width: calc(219% + 1.3px);
    height: 248px;
}

.custom-shape-divider-top-1675683003 .shape-fill {
    fill: #FFFFFF;
}
footer {
    background: linear-gradient(312deg, rgba(101,9,121,0.9948354341736695) 31%, rgba(235,0,255,1) 100%);
}
</style>