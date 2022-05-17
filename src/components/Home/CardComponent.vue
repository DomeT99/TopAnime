<template>
  <div class="card scale">
    <div class="card-image">
      <figure class="image card-measure">
        <img :src="img" alt="Anime Cover" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
  },
};
</script>

<style></style>
