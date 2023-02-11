<template>
  <div class="slider-area nav-style-1">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slider,idx) in sliders" :key="idx" class="single-slider slider-height-1 bg-image">
        
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-10">
              <div class="slider-content slider-animation-1">
                <!-- <h3>{{slider.category}}</h3> -->
                <h1>{{slider.title}} - {{slider.subTitle}}</h1>
                <div class="slider-btn">
                  <n-link to="/shop">{{slider.button}}</n-link>
                </div>
              </div>
            </div>
            <!-- <div class="col-sm-6">
              <div class="slider-single-img slider-img-animation">
                <img src="/img/slider/Family-on-couch-cropped-soccer-scaled.jpg" alt="image" />
              </div>
            </div> -->
          </div>
        </div>
        
      </swiper-slide>
      
      <!-- Swiper Navigation Start -->
      <div class="hero-slider-nav swiper-button-prev">
        <i class="pe-7s-angle-left"></i>
      </div>
      <div class="hero-slider-nav swiper-button-next">
        <i class="pe-7s-angle-right"></i>
      </div>
      <!-- Swiper Navigation End -->
    </swiper>
    <div class="card-box">
      <div class="box col-sm-5 col-md-8 bg-white">
      <div class="single-brand-box swiper-slide">
           <img src="/img/icon-img/Android-Logo-PNG-Image.png" alt="">
      </div>
      <div class="single-brand-box swiper-slide">
           <img src="/img/icon-img/appel.png" alt="">
      </div>
      <div class="single-brand-box swiper-slide">
           <img src="/img/icon-img/Amazon_Fire_TV_Stick_logo.png" alt="">
      </div>
      <div class="single-brand-box swiper-slide">
           <img src="/img/icon-img/windows.png" alt="">
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          category: "Iptv",
          title: "Smart Iptv",
          subTitle: "Pack Collections",
          button: "SHOP NOW",
        },
      ],
      swiperOption: {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 6000,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style>
.bg-image{
  background:linear-gradient(rgb(232 1 255 / 50%), 10%, rgb(126 18 150 / 50%)),url("/img/slider/hero.jpg");
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;

}
.box {
  position: absolute;
    z-index: 9;
    display: flex;
    justify-content: space-evenly;
    border-radius: 48px;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 25%);
}
.card-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.single-brand-box{
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  max-height: 70px;
    max-width: 88px;
    min-width: 68px;
    min-height: 60px;
    padding: 22px 0Px;
}
</style>
