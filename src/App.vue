<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "../src/components/AppNavBar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
