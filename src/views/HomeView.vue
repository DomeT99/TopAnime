<template>
  <div class="txt-center container">
    <hr />
    <h1 class="f-size-20 f-family-verdana">Hello!</h1>
    <h2 class="f-family-verdana">
      Passionate about anime? Here is a list of the best around!
    </h2>
    <hr />
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1">
        <SlideShow />
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from "../components/Home/SlideShow.vue";
export default {
  name: "HomeView",
  components: { SlideShow },
  data() {
    return {};
  },
  created() {
    this.callAnime();
  },
  methods: {
    async callAnime() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "top-anime.p.rapidapi.com",
          "X-RapidAPI-Key":
            "172d5540d9mshc7753ad9d75b090p173ef9jsn869109d78a2e",
        },
      };

      await fetch("https://top-anime.p.rapidapi.com/all", options)
        .then((response) => response.json())
        .then((response) => {console.log(response)})
        .catch((err) => console.error(err));
    },
  },
};
</script>
