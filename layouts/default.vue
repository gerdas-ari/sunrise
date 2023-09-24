<script lang="ts" setup>
import { FooterVue } from "~/widgets/_layout/Footer";
import { HeaderVue } from "~/widgets/_layout/Header";
</script>

<template>
  <HeaderVue />

  <main class="mb-40">
    <NuxtPage />
  </main>

  <FooterVue />
</template>
