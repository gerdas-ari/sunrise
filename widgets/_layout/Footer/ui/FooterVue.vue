<script lang="ts" setup>
import { Socials } from "~/widgets/_layout/Header";
import Consultation from "./Consultation.vue";
import Contacts from "./Contacts.vue";
import SummaryVue from "./SummaryVue.vue";
</script>

<template>
  <footer>
    <div class="flex justify-center b-y b-dark p-5">
      <NuxtImg src="/images/logo.png" />
    </div>

    <!-- <Socials /> -->
    <Consultation />
    <Contacts />
    <SummaryVue />
  </footer>
</template>
