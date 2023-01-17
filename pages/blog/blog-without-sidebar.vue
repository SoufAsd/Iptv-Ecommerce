<template>
    <div class="blog-without-sidebar">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="blog without sidebar" />
        
        <div class="blog-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="ml-20">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12" v-for="(blog, index) in getItems" :key="index">
                                    <BlogItemStyleTwo :blog="blog" />
                                </div>
                            </div>
                        </div>

                        <div v-if="getPaginateCount > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage" :per-page="perPage" :records="blogData.length" @paginate="paginateClickCallback" :page-count="getPaginateCount" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    import blogData from "@/data/blog.json";
    export default {
        components: {
            HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
            BlogItemStyleTwo: () => import("@/components/BlogItemStyleTwo"),
            TheFooter: () => import("@/components/TheFooter")
        },
        data() {
            return {
                blogData,
                currentPage: 1,
                perPage: 6,
            }
        },
        computed: {
            getItems() {
                let start = (this.currentPage - 1) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.slice(start, end);
            },
            getPaginateCount() {
                return Math.ceil(this.blogData.length / this.perPage);
            },
        },
        methods: {
            paginateClickCallback(pageNum) {
                this.currentPage = Number(pageNum);
            },
        },
        head() {
            return {
                title: "Blog Without Sidebar"
            }
        }
    };
</script>
