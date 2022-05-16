<template>
  <div class="card scale">
    <div class="card-image">
      <figure class="image">
        <img
          src="https://cdn.anime-planet.com/anime/primary/spy-x-family-1-285x403.webp?t=1646636920"
          alt="Anime Cover"
        />
      </figure>
    </div>
    <div class="card-footer-item card-color" style="background-color: red">
      <button @click="openLink(link)" class="button is-black">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,

    image: {
      type: String,
      default: "src/assets/Image/LogoCut.webp",
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
  },
};
</script>

<style></style>
