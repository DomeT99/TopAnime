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
        <div v-if="openValue = dataRec.openPopup">
          <AlertPopup @ClosePopup="dataRec.openPopup = $event" :titleModal="'WARNING'">
            Please enter a value
          </AlertPopup>
        </div>
        <div v-else>
          <TableAnime @StopLoad="dataRec.load = $event" :activeLoad="dataRec.load" :inputTxtTab="dataRec.inputString" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputSearch from "../components/SearchView/InputSearch.vue";
import TableAnime from "../components/SearchView/TableAnimeRes.vue"
import AlertPopup from "../components/AlertPopup.vue"
export default {
  components: { InputSearch, TableAnime, AlertPopup },
  data() {
    return {
      dataRec: {
        inputString: "",
        load: false,
        openPopup: false
      },
      openValue: false
    };
  }
};
</script>
