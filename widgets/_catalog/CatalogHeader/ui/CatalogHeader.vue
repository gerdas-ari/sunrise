<script lang="ts" setup>
import { ConsultationFormMini } from "~/features/ConsultationForm";

const props = defineProps<{
  title: string;
  description: string;
  imageSrc: string;
}>();
</script>

<template>
  <section class="container pt-10">
    <section class="relative">
      <div class="flex justify-between">
        <div>
          <h1 class="text-5xl font-bold">
            {{ title }}
          </h1>

          <p class="mt-5">
            {{ description }}
          </p>
        </div>

        <ConsultationFormMini
          :title="'Нужен авто в отличном состоянии из Японии?'"
        />
      </div>

      <slot name="button-group" />

      <div
        class="absolute right-0 top-0 -z-10 flex justify-center items-end w-full h-full"
      >
        <NuxtImg
          :src="imageSrc"
          alt="Автомобили с аукционов Японии"
          class="h-full"
        />
      </div>
    </section>

    <slot name="footer" />
  </section>
</template>
