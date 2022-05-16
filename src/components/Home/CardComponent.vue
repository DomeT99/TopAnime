<template>
  <div class="card scale">
    <div class="card-image">
      <figure style="width: 256px; height: 350px" class="image">
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
