<template>
    <div class="single-banner">
        <n-link to="/shop">
            <img :src="banner.imgSrc" :alt="banner.title">
        </n-link>
        <div class="banner-content">
            <h3>{{ banner.title }}</h3>
            <h4>Starting at <span>${{ banner.price.toFixed(2) }}</span></h4>
            <n-link to="/shop">
                <i class="fa fa-long-arrow-right"></i>
            </n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['banner']
    };
</script>
