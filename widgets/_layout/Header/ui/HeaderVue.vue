<script lang="ts" setup>
import AutoCategories from "./AutoCategories.vue";
import Links from "./Links.vue";
import Socials from "./Socials.vue";
</script>

<template>
  <header>
    <Links class="hidden lg:flex" />
    <Socials />
    <AutoCategories class="hidden lg:block" />
  </header>
</template>
