<template>
    <div class="blog-area pb-55">
        <div class="container">
            <SectionTitleWithSubTitle title="OUR BLOG" classes="section-title mb-55" />
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(blog, index) in blogData.slice(0, 3)" :key="index">
                    <BlogItem :blog="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import blogData from "@/data/blog.json";

    export default {
        components: {
            BlogItem: () => import('@/components/BlogItem')
        },

        data() {
            return {
                blogData
            }
        },
    };
</script>