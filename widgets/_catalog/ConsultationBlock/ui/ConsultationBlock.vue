<script lang="ts" setup>
import { ConsultationFormSplit } from "~/features/ConsultationForm";

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="container flex justify-between b b-dark p-10 gap-10">
    <h2 class="text-3xl font-bold">{{ title }}</h2>

    <ConsultationFormSplit />
  </section>
</template>
