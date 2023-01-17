<template>
    <div class="error404">
        <div class="container text-center">
            <div class="error-image">
                <img class="img-fluid" src="/img/page-404-image.png" alt="Not Found Image">
            </div>
            <h1 class="error-404-title text-white" v-if="error.statusCode === 404">Oops! Page not found!</h1>
            <h1 class="error-404-title text-white" v-else>An error occurred</h1>
            <div class="error-buttons">
                <button @click="$router.go(-1)" class="btn btn-primary btn-hover-dark">
                    <span class="button-text">Go Back Previous Page</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }
    .error-404-title {
        font-weight: 500;
        padding-top: 40px;
        margin-bottom: 30px;
    }
</style>