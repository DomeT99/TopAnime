<template>
  <div class="txt-center">
    <hr />
    <h1 class="f-size-20 f-family-verdana">Hello!</h1>
    <h2 class="f-family-verdana">
      Passionate about anime? Here is a list of the best around!
    </h2>
    <hr />
    <div class="columns">
      <div class="column is-mobile is-3">
        <CardComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/Home/CardComponent.vue";
export default {
  name: "HomeView",
  components: { CardComponent },
};
</script>
