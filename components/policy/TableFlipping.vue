<template>
<div class=" support-area pt-70 pb-20">
  <div class="container">
        <section>
          <div class="card">
              <div class="card-info">
              <h1 id="card-info-title">{{ currentCard.title }}</h1>
              <p id="card-info-desc" v-for="item in currentCard.desc" :key="item">{{ item }}</p>
              </div>
              <div class="card-photo">
              <div id="mask-1" class="mask"></div>
              <div id="mask-2" class="mask"></div>
              
              <img :src="currentCard.photo">
              </div>
          </div>
        </section>
  </div>
</div>

</template>

<script>
export default {
  mounted: function () {
      this.timer = setInterval(() => {
        this.playFoward()
      }, 10000)
    },
    data(){
        return{
            cards: [
                {
                id: 1,
                title: "MEILLEUR ABONNEMENT IPTV",
                desc:[
                "- Mise à jour automatique des chaînes IPTV",
                "- Installation de l’abonnement IPTV gratuit",
                "- Support technique et commercial est disponible 24h / 24h et 7j / 7j. Email & WhatsApp.",
                "- Liste des chaines smart TV",
                "- IPTV compatible avec tout appareil"
                ],
                    
                photo:
                    "/img/banner/watchingtv.jpg"
                },
                {
                id: 2,
                title: "MAROC SMART",
                desc:[
                "- Mise à jour automatique des chaînes IPTV",
                "- Installation de l’abonnement IPTV gratuit",
                "- Support technique et commercial est disponible 24h / 24h et 7j / 7j. Email & WhatsApp.",
                "- Liste des chaines smart TV",
                "- IPTV compatible avec tout appareil"
                ],
                photo:
                    "/img/banner/watchingtv2.jpg"
                },
                {
                id: 3,
                title: "IPTV, Maroc",
                desc:[
                "- Mise à jour automatique des chaînes IPTV",
                "- Installation de l’abonnement IPTV gratuit",
                "- Support technique et commercial est disponible 24h / 24h et 7j / 7j. Email & WhatsApp.",
                "- Liste des chaines smart TV",
                "- IPTV compatible avec tout appareil"
                ],
                photo:
                    "/img/banner/watchingtv3.jpg"
                },
                {
                id: 4,
                title: "Programme Revendeur IPTV",
                desc:[
                "- Mise à jour automatique des chaînes IPTV",
                "- Installation de l’abonnement IPTV gratuit",
                "- Support technique et commercial est disponible 24h / 24h et 7j / 7j. Email & WhatsApp.",
                "- Liste des chaines smart TV",
                "- IPTV compatible avec tout appareil"
                ],
                photo:
                    "/img/banner/watchingtv4.jpg"
                }
            ],
            currentNum: 0
        }
    },
    computed: {
      currentCard() {
            return this.cards[this.currentNum];
        }
    },
  methods: {
    playFoward() {
         const gsap = this.$gsap
         let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      const gsap = this.$gsap
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}
</script>


<style scoped>

section {
  width: 100%;
  padding: 1em;
}

section h4 {
  opacity: 0.8;
}

li.active {
  color: var(--dark-green);
  border-bottom: 1px solid var(--dark-green);
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  background-color: var(--white);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 10px 40px -20px,
    rgba(0, 0, 0, 0.3) 0px 20px 40px -30px;
}

.card-info {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 1em 2em;
  height: 500px;
}
.card-info h1 {
  font-size: 2rem;
  text-align: center;
  align-self: center;
  font-weight: bold;
  color: #3bd7ed;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info p {
  align-self: center;
  font-size: 16px;
  line-height: 1.9em;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.card-info a {
  display: grid;
  grid-template-columns: max-content 20px;
  align-items: center;
  column-gap: 7px;
  color: var(--dark-green);
  font-size: 0.85rem;
  font-weight: bold;
  align-self: center;
  justify-self: flex-end;
  transform: translateX(0px);
  transition: transform 0.3s 0.1s ease-out;
}
.card-info a:hover {
  transform: translateX(5px);
}
.card-info a:hover svg {
  transform: translateX(5px);
}
.card-info svg {
  width: 20px;
  height: 10px;
  transform: translateX(0px);
  transition: transform 0.3s ease-out;
}
.card-info svg line {
  stroke: var(--dark-green);
}
.card{
  height: 500px;
  border:none;
}
.card-photo {
  width: 100%;
  height: 499px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  
}
.card-photo img {
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 5px 5px 0px;
}
.card-photo button {
  display: grid;
  grid-template-columns: max-content 20px;
  align-items: center;
  column-gap: 7px;
  color:#ffffff !important;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  align-self: flex-start;
  transform: translateX(0px);
  transition: transform 0.3s 0.1s ease-out;
  position: absolute;
  z-index: 10;
  bottom: 5%;
  right: 8%;
}
.card-photo button  p{
  color:#ffffff !important;
  margin-bottom: 0;
}
.card-photo button  svg{
  color:#ffffff !important;
}
.card-photo button:hover {
  transform: translateX(5px);
}
.card-photo button:hover svg {
  transform: translateX(5px);
}
.card-photo svg {
  width: 20px;
  height: 10px;
  transform: translateX(0px);
  transition: transform 0.3s ease-out;
}
.card-photo svg line {
  stroke: #ffffff !important;
  stroke-width: 2;
}
.card-photo .mask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  background-color: #ffffff !important;
}
#mask-1 {
  left: 0;
  transform: translateY(-100%);
}
#mask-2 {
  right: 0;
  transform: translateY(100%);
}

@media (max-width: 600px) {
  .card {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
    height: 100%;
  }

  .card-info {
    order: 2;
    height: 100%;
    width: 100%;
  }
  .card-photo {
    max-width: 100%;
    order: 1;
  }

  .card-photo img {
    max-width: 100%;
  }

  .card-photo .mask {
    height: 100%;
  }
}

@media (max-width: 500px) {
  header {
    padding: 1em;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
  }
  header ul {
    flex-direction: column;
  }
  header li {
    width: min-content;
    margin-right: 0;
  }
  .card-info h1 {
    font-size: 3rem;
  }
}
</style>