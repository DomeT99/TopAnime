<template>
  <div class="columns">
    <div class="column is-10">
      <input v-model="inputString" class="input is-rounded" type="text" placeholder="Search your favorite anime!" />
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
      inputString: "",
    };
  },
  methods: {
    sendText() {
      this.$emit("SendTxt", this.inputString)
    }
  }
};
</script>
