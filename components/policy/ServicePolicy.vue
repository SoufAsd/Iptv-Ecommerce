<template>
    <div class="support-area pt-100 pb-90">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-lg-3 col-sm-6 mt-30" v-for="(policy, index) in policies" :key="index">
                    <div class="support-wrap support-1">
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
                    {
                        icon: "/img/icon-img/support-4.png",
                        title: "Order Discount",
                        subTitle: "10% off on your first order"
                    },
                ]
            }
        },
    };
</script>
