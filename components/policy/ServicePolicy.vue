<template>
    <div class="support-area pt-20 pb-90 pl-70">
        <div class="container">
            <div class="row">
                <div class="global col-lg-4 col-sm-6 mt-30" v-for="(policy, index) in policies" :key="index">
                    <div class="card"  data-aos="flip-right" >
                        <div class="face face1">
                            <div class="content">
                                <img :src="policy.icon" :alt="policy.title">
                                <h3>{{ policy.title }}</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
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
                        icon: "/img/icon-img/wifi.png",
                        title: "4K/FHD/HD/SD Quality",
                        subTitle: "La plupart de nos chaînes de télévision sont disponibles en qualité HD et certaines d'entre elles sont en 4K"
                    },
                    {
                        icon: "/img/icon-img/support-2.png",
                        title: "Support 24/7",
                        subTitle: "Support 24 hours a day"
                    },
                    {
                        icon: "/img/icon-img/support-3.png",
                        title: "Encrypted",
                        subTitle: "Paiements sécurisés - Aucun processus de facturation compliqué requis"
                    },
                ]
            }
        },
    };
</script>

<style>
    .global .card{
        position: relative;
        cursor: pointer;
        border: none;
        
    }
    
    .global .card .face{
       
        width: 300px;
        height: 200px;
        transition: 0.5s;
    }

    .global .card .face.face1{
        
        position: relative;
        background: #d72ae5;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        z-index: 1;
        transform: translateY(100px);
    }

    .global .card:hover .face.face1{
        background: rgb(34, 200, 229);
        transform: translateY(0);
    }

    .global .card .face.face1 .content{
        opacity: 1.2;
        transition: 0.5s;
        text-align: center;
    }

    .global .card:hover .face.face1 .content{
        opacity: 1;
    }

    .global .card .face.face1 .content img{
        max-width: 100px;
    }

    .global .card .face.face1 .content h3{
        margin: 10px 0 0;
        padding: 0;
        color: #fff;
        text-align: center;
        font-size: 1.5em;
    }

    .global .card .face.face2{
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 10px 25px rgb(0 0 0 / 31%);
        transform: translateY(-100px);
    }

    .global .card:hover .face.face2{
        transform: translateY(0);
    }

    .global .card .face.face2 .content p{
        margin: 0;
        padding: 0;
    }

    .global .card .face.face2 .content a{
        margin: 15px 0 0;
        display:  inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #333;
        padding: 5px;
        border: 1px solid #333;
    }

    .global .card .face.face2 .content a:hover{
        background: #333;
        color: #fff;
    }
</style>
