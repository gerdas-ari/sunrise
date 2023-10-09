<script lang="ts" setup>
import { ConsultationFormSplit } from "~/features/ConsultationForm";

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="lg:flex justify-between gap-15 b mt-4 p-10 container">
    <p class="text-3xl font-bold basis-2/4">
      {{ title }}
    </p>

    <ConsultationFormSplit class="mt-10 lg:mt-0 lg:w-1/2" />
  </section>
</template>
