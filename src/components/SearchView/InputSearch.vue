<template>
  <div class="columns">
    <div class="column is-10">
      <input v-model="dataSend.inputString" class="input is-rounded" type="text"
        placeholder="Search your favorite anime!" />
    </div>
    <div class="column is-2">
      <button @click="sendText" class="button is-black">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSend: {
        inputString: "",
        load: true,
      }
    };
  },
  methods: {
    sendText() {
      if (this.dataSend.inputString == "") {

        this.$emit("AlertPopup", true)
      } else {
        this.$emit("SendTxt", this.dataSend)
      }

    }
  }
};
</script>
