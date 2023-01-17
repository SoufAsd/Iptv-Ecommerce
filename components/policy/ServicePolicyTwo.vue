<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-4 col-sm-6 mt-30" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap-2 support-shape text-center">
                        <div class="support-content-2">
                            <img :src="policy.icon" :alt="policy.title">
                            <h5>{{ policy.title }}</h5>
                            <p>{{ policy.subTitle }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                policies: [
                    {
                        icon: "/img/icon-img/support-1.png",
                        title: "Free Shipping",
                        subTitle: "Free shipping on all order consectetu adipisicing elit sed"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Support 24/7",
                        subTitle: "Support 24 hours a day consectetu adipisicing elit sed"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Money Return",
                        subTitle: "30 days for free return consectetu adipisicing elit sed"
                    }
                ]
            }
        },
    };
</script>
