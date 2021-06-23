<template>
  <div class="slider">
    <slider ref="slider" :options="options">
      <slideritem v-for="(item, index) in someList" :key="index">
        <div :class="`image i${index}`">
        </div>
      </slideritem>
      <div slot="loading">LOADING...</div>
    </slider>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";

export default {
  data() {
    return {
      someList: [
        {
          msg: "slide1",
        },
        {
          msg: "slide2",
        },
        {
          msg: "slide3",
        },
      ],
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        speed: 2000,
        timingFunction: 'ease-in-out',
        autoplay: 6000,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: {
    slider,
    slideritem,
  },
};
</script>

<style scoped>
div.slider {
  width: 100%;
  margin: 0px auto;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div.image {
  width: 100%;
  height: 100%;
  background-size: cover;
}
div.i0 {
  background-image: url("https://cnnespanol.cnn.com/wp-content/uploads/2019/11/mona-lisa.jpg?quality=100&strip=info");
  background-position-y: -100px;
}
div.i1 {
  background-image: url("https://totenart.com/noticias/wp-content/uploads/2015/11/Salvador-Dal%C3%AD-La-persistencia-de-la-memoria-noticias-totenart-1024x768.jpg");
}
div.i2 {
  background-image: url("https://guiauniversitaria.mx/wp-content/uploads/2020/04/secretos-en-las-pinturas.jpg");
}
</style>