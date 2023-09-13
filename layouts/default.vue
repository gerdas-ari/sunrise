<script lang="ts" setup>
import { FooterVue } from "~/widgets/Footer";
import { HeaderVue } from "~/widgets/Header";
</script>

<template>
  <HeaderVue />

  <main class="mb-40">
    <NuxtPage />
  </main>

  <FooterVue />
</template>
