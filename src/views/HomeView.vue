<template>
  <div class="txt-center container">
    <hr />
    <Banner :titleBanner="'Hello!'">Passionate about anime? Here is a list of the best around!</Banner>
    <hr />
    <div class="columns is-mobile" v-if="loading">
      <div class="column is-10 is-offset-1">
        <Loader />
      </div>
    </div>
    <div class="columns is-mobile" v-else>
      <div class="column is-10 is-offset-1">
        <SlideShow />
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from "../components/Home/SlideShow.vue";
import Loader from "../components/AppLoader.vue";
import Banner from "../components/Home/HomeBanner.vue";
import { optionsHome } from "@/assets/JS/options"
export default {
  name: "HomeView",
  components: { SlideShow, Loader, Banner },

  data() {
    return {
      res: [
        {
          title: "",
          img: "",
        },
      ],
      loading: true,
    };
  },
  provide() {
    return {
      res: this.res,
    };
  },
  async created() {
    let result = await this.callAnime();

    if (result) {
      this.loading = false;
    }
  },
  methods: {
    async callAnime() {

      await fetch("https://animes3.p.rapidapi.com/", optionsHome)
        .then((response) => response.json())
        .then((response) => {
          response.forEach((el) => {
            this.res.push(el);
          });
        })
        .catch((err) => console.error(err));

      return this.res;
    },
  },
};
</script>
