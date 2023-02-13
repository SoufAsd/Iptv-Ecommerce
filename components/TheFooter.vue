<template>
    
    <footer class="footer-area  pt-70 ">
        <div class="container">
            <div class="row pt-70">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="copyright mb-30">
                        <div class="footer-logo">
                            <n-link to="/">
                                <img src="/img/logo/logo.png" alt="logo">
                            </n-link>
                        </div>
                        <p>© 2023 <a href="#" target="_blank">Digital Land</a>.<br> All Rights Reserved</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="footer-widget mb-30 ml-30">
                        <div class="footer-title">
                            <h3>ABOUT US</h3>
                        </div>
                        <div class="footer-list">
                            <ul>
                                <li><n-link to="/about">About us</n-link></li>
                                <li><n-link to="/pack">Nos Abonnements</n-link></li>
                                <li><n-link to="/contact">Contact</n-link></li>
                            </ul>
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
.footer-logo img{
    filter: brightness(0) invert(1);
    max-width: 33%;
}
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
.footer-widget {
    display: grid;
    align-items: end;
    justify-content: center;
    align-content: stretch;
}
</style>