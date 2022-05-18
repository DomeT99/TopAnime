<template>
  <div class="txt-center container">
    <hr />
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1">
        <InputSearch @SendTxt="inputTxt = $event" />
      </div>
    </div>
    <hr />
    <div class="columns is-mobile" v-if="loading">
      <div class="column is-10 is-offset-1">
        <Loader />
      </div>
    </div>
    <div class="columns is-mobile" v-else>
      <div class="column is-10 is-offset-1">
        <TableAnime :inputTxtTab="inputTxt" />
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "../components/AppLoader.vue";
import InputSearch from "../components/SearchView/InputSearch.vue";
import TableAnime from "../components/SearchView/TableAnimeRes.vue"
export default {
  components: { Loader, InputSearch, TableAnime },
  data() {
    return {
      loading: false,
      inputTxt: "",
    };
  }
};
</script>
