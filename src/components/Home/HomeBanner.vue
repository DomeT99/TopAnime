<template>
  <h1 class="f-size-20 f-family-verdana">{{titleBanner}}</h1>
  <h2 class="f-family-verdana">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  props:{titleBanner:String}
};
</script>
