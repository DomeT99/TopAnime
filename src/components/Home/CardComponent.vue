<template>
  <div class="card scale">
    <header class="card-header card-color">
      <p class="card-header-title"><!-- {{ title }} -->aaaaa</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-image">
      <figure class="image">
        <img :src="image" alt="Anime Cover" />
      </figure>
    </div>
    <div class="card-footer-item card-color">
      <button @click="openLink(link)" class="button is-black">Open</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    link: String,
  },
  methods: {
    openLink(linkAnime) {
      window.open(linkAnime);
    },
  },
};
</script>

<style></style>
