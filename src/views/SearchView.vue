<template>
  <div class="txt-center container">
    <hr />
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1">
        <InputSearch @SendTxt="dataRec = $event" />
      </div>
    </div>
    <hr />
    <div class="columns is-mobile">
      <div class="column is-10 is-offset-1">
        <TableAnime @ClearString="dataRec.inputString = $event" @StopLoad="dataRec.load = $event"
          :activeLoad="dataRec.load" :inputTxtTab="dataRec.inputString" />
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "../components/SearchView/InputSearch.vue";
import TableAnime from "../components/SearchView/TableAnimeRes.vue"
export default {
  components: { InputSearch, TableAnime },
  data() {
    return {
      dataRec: {
        inputString: "",
        load: false
      },

    };
  }
};
</script>
