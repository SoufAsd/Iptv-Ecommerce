<template>
    <div class="blog-wrap-2 mb-30">
        <div class="blog-img-2">
            <n-link :to="`/blog/${slugify(blog.title)}`">
                <img :src="blog.imgSrc" :alt="blog.title">
            </n-link>
        </div>
        <div class="blog-content-2">
            <div class="blog-meta-2">
                <ul>
                    <li>{{ blog.date }}</li>
                    <li>
                        <a href="#"><i class="fa fa-comments-o"></i> {{ blog.comment }} </a>
                    </li>
                </ul>
            </div>
            <h4>
                <n-link :to="`/blog/${slugify(blog.title)}`">{{ blog.title }}</n-link>
            </h4>
            <p>{{ blog.desc }}</p>
            <div class="blog-share-comment">
                <div class="blog-btn-2">
                    <n-link :to="`/blog/${slugify(blog.title)}`">Read More</n-link>
                </div>
                <div class="blog-share">
                    <span>share:</span>
                    <div class="share-social">
                        <ul>
                            <li>
                                <a class="facebook" href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a class="twitter" href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a class="instagram" href="#" target="_blank"><i class="fa fa-instagram"></i></a>
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
        props: ["blog"],

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
    };
</script>