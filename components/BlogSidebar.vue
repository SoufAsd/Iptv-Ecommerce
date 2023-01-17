<template>
    <div class="blog-sidebar">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Search</h4>
            <div class="pro-sidebar-search mb-55 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="Search here...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Recent Projects</h4>
            <div class="sidebar-project-wrap mt-30">
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-1.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>Photography</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">A guide to latest trends product</n-link>
                        </h4>
                    </div>
                </div>
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-2.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>Branding</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">Five ways to lead a happy life</n-link>
                        </h4>
                    </div>
                </div>
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-3.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>Design</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">Tips on having a happy life</n-link>
                        </h4>
                    </div>
                </div>
                <div class="single-sidebar-blog">
                    <div class="sidebar-blog-img">
                        <n-link to="/blog/a-guide-to-latest-trends-product">
                            <img src="/img/blog/sidebar-1.jpg" alt="">
                        </n-link>
                    </div>
                    <div class="sidebar-blog-content">
                        <span>Photography</span>
                        <h4>
                            <n-link to="/blog/a-guide-to-latest-trends-product">New collection for this winter/blog</n-link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-widget mt-35">
            <h4 class="pro-sidebar-title">Categories</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        women
                        <span>8</span>
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        men
                        <span>5</span>
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        lifestyle
                        <span>10</span>
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link to="/blog/blog-without-sidebar">
                        <span class="check-mark"></span>
                        fashion
                        <span>15</span>
                    </n-link>
                </li>
            </ul>
        </div>
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Tag</h4>
            <div class="sidebar-widget-tag mt-25">
                <ul>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">Clothing</n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">Accessories</n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">For Men</n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">Women</n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-without-sidebar">Fashion</n-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>
