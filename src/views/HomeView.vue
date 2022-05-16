<template>
  <div class="txt-center container">
    <hr />
    <h1 class="f-size-20 f-family-verdana">Hello!</h1>
    <h2 class="f-family-verdana">
      Passionate about anime? Here is a list of the best around!
    </h2>
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
export default {
  name: "HomeView",
  components: { SlideShow, Loader },

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
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "animes3.p.rapidapi.com",
          "X-RapidAPI-Key":
            "172d5540d9mshc7753ad9d75b090p173ef9jsn869109d78a2e",
        },
      };

      await fetch("https://animes3.p.rapidapi.com/", options)
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
