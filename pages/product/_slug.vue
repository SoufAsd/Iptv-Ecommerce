<template>
    <div class="product-details-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb :pageTitle="product.title" />
        <ProductDetailsWrapper :product="product" />
        <ProductDetailsDescriptionReview />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slug: this.$route.params.slug,
            }
        },

        computed: {
            product() {
                return this.$store.getters.getProducts.find(product => this.slugify(product.title) == this.slug);
            },
        },

        head() {
            return {
                title: this.product.title
            }
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
    };
</script>
