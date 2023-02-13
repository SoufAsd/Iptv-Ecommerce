<template>
    <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div class="container">
            <div class="breadcrumb-content text-center">
                <ul>
                    <li>
                        <n-link to="/">Accueil</n-link>
                    </li>
                    <li class="active">{{ pageTitle }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["pageTitle"]
    };
</script>

<style>
.breadcrumb-area.pt-35.pb-35.bg-gray-3 {
    background: linear-gradient(312deg, rgba(101,9,121,0.9948354341736695) 31%, rgba(235,0,255,1) 100%);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}
.breadcrumb-content.text-center ul li {
    color: white !important;
}
.breadcrumb-content.text-center ul li a{
    color: white !important;
}
.breadcrumb-content.text-center ul li::before {
    background-color: white !important;
}
</style>