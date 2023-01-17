<template>
    <div class="team-area pt-95 pb-70">
        <div class="container">
            <div class="section-title-2 text-center mb-60">
                <h2>Team Members</h2>
                <p>There are few team members for our company</p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(member, index) in teamMemberData" :key="index">
                    <div class="team-wrapper mb-30">
                        <div class="team-img">
                            <img :src="member.imgSrc" :alt="member.name">
                            <div class="team-action">
                                <a :href="social.url" v-for="(social, index) in member.socialLink" :key="index">
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                        <div class="team-content text-center">
                            <h4>{{ member.name }}</h4>
                            <span>{{ member.designation }}</span>
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
                teamMemberData: [
                    {
                        imgSrc: "/img/team/team-1.jpg",
                        name: "Stephen Fleming",
                        designation: "Manager",
                        socialLink: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fa fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fa fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fa fa-instagram"
                            }
                        ]
                    },
                    {
                        imgSrc: "/img/team/team-2.jpg",
                        name: "Jonti Rodes",
                        designation: "Marketing Manager",
                        socialLink: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fa fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fa fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fa fa-instagram"
                            }
                        ]
                    },
                    {
                        imgSrc: "/img/team/team-3.jpg",
                        name: "Robart Carlos",
                        designation: "Chief Designer",
                        socialLink: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fa fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fa fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fa fa-instagram"
                            }
                        ]
                    },
                    {
                        imgSrc: "/img/team/team-4.jpg",
                        name: "Shan Williams",
                        designation: "Engineer",
                        socialLink: [
                            {
                                url: "https://www.facebook.com/",
                                icon: "fa fa-facebook"
                            },
                            {
                                url: "https://twitter.com/",
                                icon: "fa fa-twitter"
                            },
                            {
                                url: "https://www.instagram.com/",
                                icon: "fa fa-instagram"
                            }
                        ]
                    }
                ]
            }
        }
    };
</script>
