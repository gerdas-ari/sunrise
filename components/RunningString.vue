<script lang="ts" setup>
const props = defineProps<{
  strings: string[];
}>();
</script>

<template>
  <marquee
    direction="right"
    scrollamount="15"
    truespeed="true"
    scrolldelay="50"
    class="b-y b-dark p-10"
  >
    <span v-for="string in strings" class="text-style m-10" :key="string">
      {{ string + " " }}
    </span>
  </marquee>
</template>

<style scoped>
.text-style {
  font-feature-settings: "clig" off, "liga" off;
  font-family: RF Dewi;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px; /* 100% */
  -webkit-text-stroke: 1px rgb(255, 255, 255);
  -webkit-text-fill-color: transparent;
}
</style>
