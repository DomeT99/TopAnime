<template>
  <carousel autoplay="3000" wrapAround="true" :items-to-show="3">
    <slide v-for="slide in 20" :key="slide">
      <CardComponent />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CardComponent from "../Home/CardComponent.vue";
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
    CardComponent,
  },
};
</script>
<style lang="scss">
.carousel__prev,
.carousel__next {
  background-color: black !important;
  .carousel__icon{
    fill: white;
  }
}
</style>
