<template>
    <div class="about-mission-area pb-70">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="(item, index) in items" :key="index">
                    <div class="single-mission mb-30">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.desc }}</p>
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
                items: [
                    {
                        id: 1,
                        title: "Our vision",
                        desc: "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."
                    },
                    {
                        id: 2,
                        title: "Our mission",
                        desc: "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."
                    },
                    {
                        id: 3,
                        title: "Our goal",
                        desc: "Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."
                    }
                ]
            }
        },
    };
</script>
