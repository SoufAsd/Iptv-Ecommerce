<template>
    <div class="terms-conditions-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="terms & conditions" />

        <!-- privacy policy content start -->
        <section class="terms-conditions-inner">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="terms-condition">
                            <h1 class="terms-condition-title">Terms & Conditions</h1>
                            <h5>When we’re saying you in this page, we’re referring to a buyer. When we’re saying “We” in this page, we’re referring to the flone authority.</h5>
                            <p># If you’re under 13 years, then do not visit/use our website.</p>
                            <p># To be a member/user of our website, you need to be 18 years old or more.</p>
                            <p># You need to provide true and correct information</p>
                            <p># When you will purchase an item, then confirm that you agree to our terms & conditions.</p>
                            <p># Your payment will be processed through PayPal or other third-party websites.</p>
                            <p># Images showing in the preview is demo purpose only. We don’t provide image copyright. You need to replace the images included in the demo content.</p>
                            <p># If you face any problem to download your item after purchasing, then you can send an email from our contact page.</p>
                            <p># We Will refund only if the product is broken. To make sure the product is broken or not, you need to contact us.</p>
                            <p># We have the right to change the policy, terms & Conditions, packages, price, features or any other things on this website.</p>
                            <p># As a customer or user of this website, you will need to agree with the terms & conditions.</p>
                            <p># If we make any change in terms & conditions, we will post here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- privacy policy content end -->
        <TheFooter />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            TheFooter: () => import('@/components/TheFooter')
        },
        head() {
            return {
                title: "Terms & Conditions"
            }
        }
    };
</script>

<style lang="scss" scoped>
    .terms-conditions-inner {
        padding: 96px 0 95px;
        @media #{$xs-layout} {
            padding: 60px 0;
        }
    }
    .terms-condition {
        .terms-condition-title {
            margin-bottom: 15px;
        }
        h5 {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 15px;
        }
        p:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    .policy-title {
        font-weight: 500;
    }
</style>
