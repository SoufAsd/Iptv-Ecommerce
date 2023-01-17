<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="blog.title" />

        <div class="Blog-details-inner pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <div class="blog-details-wrapper ml-20">
                            <div class="blog-details-top">
                                <div class="blog-details-img">
                                    <img :src="blog.imgSrc" :alt="blog.title">
                                </div>
                                <div class="blog-details-content">
                                    <div class="blog-meta-2">
                                        <ul>
                                            <li>{{ blog.date }}</li>
                                            <li>
                                                <a href="#"><i class="fa fa-comments-o"></i> {{ blog.comment }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3>{{ blog.title }}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p>
                                    <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div class="tag-share">
                                <div class="dec-tag">
                                    <ul>
                                        <li><a href="#">lifestyle ,</a></li>
                                        <li><a href="#">interior ,</a></li>
                                        <li><a href="#">outdoor</a></li>
                                    </ul>
                                </div>
                                <div class="blog-share">
                                    <span>share:</span>
                                    <div class="share-social">
                                        <ul>
                                            <li>
                                                <a class="facebook" href="#">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="twitter" href="#">
                                                <i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="instagram" href="#">
                                                    <i class="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="next-previous-post">
                                <a href="#"> <i class="fa fa-angle-left"></i> prev post</a>
                                <a href="#">next post <i class="fa fa-angle-right"></i></a>
                            </div>
                            <div class="blog-comment-wrapper mt-55">
                                <h4 class="blog-dec-title">comments : 02</h4>
                                <div class="single-comment-wrapper mt-35">
                                    <div class="blog-comment-img">
                                        <img src="/img/blog/comment-1.jpg" alt="">
                                    </div>
                                    <div class="blog-comment-content">
                                        <h4>Anthony Stephens</h4>
                                        <span>October 14, 2018 </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p>
                                        <button class="reply-btn">Reply</button>
                                    </div>
                                </div>
                                <div class="single-comment-wrapper mt-50 ml-60">
                                    <div class="blog-comment-img">
                                        <img src="/img/blog/comment-2.jpg" alt="">
                                    </div>
                                    <div class="blog-comment-content">
                                        <h4>DX Joxova</h4>
                                        <span>October 14, 2018 </span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p>
                                        <button class="reply-btn">Reply</button>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-reply-wrapper mt-55">
                                <h4 class="blog-dec-title">post a comment</h4>
                                <form class="blog-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="leave-form">
                                                <input type="text" placeholder="Full Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="leave-form">
                                                <input type="email" placeholder="Email Address ">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="text-leave">
                                                <textarea placeholder="Message"></textarea>
                                                <button type="submit">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    import blog from "@/data/blog.json";

    export default {
        data() {
            return {
                blog,
                slug: this.$route.params.slug
            }
        },

        mounted () {
            this.blog = blog.find(blog => this.slugify(blog.title) === this.slug);
        },

        methods: {
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
                title: this.blog.title
            }
        },
    };
</script>
