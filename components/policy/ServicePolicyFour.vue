<template>
    <div class="support-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap-2 support-padding-2 support-shape-3 mb-30 text-center">
                        <div class="support-content-2">
                            <div class="support-icon">
                                <img class="animated" :src="policy.icon" :alt="policy.title">
                            </div>
                            <div class="support-content">
                                <h5>{{ policy.title }}</h5>
                                <p>{{ policy.subTitle }}</p>
                            </div>
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
                        subTitle: "Free shipping on all order"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Support 24/7",
                        subTitle: "Support 24 hours a day"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Money Return",
                        subTitle: "30 days for free return"
                    },
                ]
            }
        },
    };
</script>
