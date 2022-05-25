<template>
  <div class="disBlock">
    <carousel autoplay="3000" wrapAround="true" :items-to-show="3">
      <slide :key="prop" v-for="prop in res">
        <CardComponent :title="prop.title" :img="prop.img" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>

  <div class="disNone">
    <carousel autoplay="3000" wrapAround="true" :items-to-show="1">
      <slide :key="prop" v-for="prop in res">
        <CardComponent :title="prop.title" :img="prop.img" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CardComponent from "../Home/CardComponent.vue";
export default {
  inject: ["res"],
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
  .carousel__icon {
    fill: white;
  }
}

.disNone {
  display: none;
}
.disBlock {
  display: block;
}

@media screen and (max-width: 1023px) {
  .disNone {
    display: block;
  }
  .disBlock {
    display: none;
  }
}
</style>
