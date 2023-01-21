<template>
    <div class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Search</h4>
            <div class="pro-sidebar-search mb-50 mt-25">
                <form class="pro-sidebar-search-form">
                    <input type="text" placeholder="Search here...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Abonnement</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" >
                    <n-link :to="`?category=${slugify('24 Mois')}`">
                        <span class="check-mark"></span>
                        24 Mois
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link :to="`?category=${slugify('12 Mois')}`">
                        <span class="check-mark"></span>
                        12 Mois
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link :to="`?category=${slugify('6 Mois')}`">
                        <span class="check-mark"></span>
                        6 Mois
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left">
                    <n-link :to="`?category=${slugify('1 ans')}`">
                        <span class="check-mark"></span>
                        1 ans
                    </n-link>
                </li> 
            </ul>
        </div>

        <!-- color widget  -->
        <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Comptabilité </h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" >
                    <n-link :to="`?color=${slugify('Box Android')}`">
                        <span class="check-mark"></span>
                        Box Android
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left" >
                    <n-link :to="`?color=${slugify('iPhone')}`">
                        <span class="check-mark"></span>
                        iPhone
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left" >
                    <n-link :to="`?color=${slugify('PC / MAC')}`">
                        <span class="check-mark"></span>
                        PC / MAC
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left" >
                    <n-link :to="`?color=${slugify('Smartphone Android')}`">
                        <span class="check-mark"></span>
                        Smartphone Android
                    </n-link>
                </li>
            </ul>
        </div>

  
    </div>
</template>

<script>
    export default {
        props: ["classes"],
        computed: {
            categoryList() {
                return this.$store.getters.categoryList
            },
            sizeList() {
                return this.$store.getters.sizeList
            },
            colorList() {
                return this.$store.getters.colorList
            },
            tagList() {
                return this.$store.getters.tagList
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
        }
    };
</script>