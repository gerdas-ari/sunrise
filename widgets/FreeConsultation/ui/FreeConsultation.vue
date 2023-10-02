<script lang="ts" setup>
import { ConsultationForm } from "~/features/ConsultationForm";

const props = defineProps<{
  title: string;
  description: string;
  imageSrc: string;
}>();
</script>

<template>
  <section class="flex justify-between container gap-5">
    <div class="bg-black text-white relative p-10 z-10 basis-2/3 b">
      <div class="z-20">
        <h2 class="text-4xl font-bold">{{ title }}</h2>

        <p class="mt-4">{{ description }}</p>
      </div>

      <div
        v-if="imageSrc"
        class="w-full h-full absolute top-0 left-0 h-full flex items-end justify-end -z-10 box-shadow"
      >
        <NuxtImg
          :src="/images/ + imageSrc"
          class="select-none pointer-events-none w-1/2 h-2/3"
        />
      </div>
    </div>

    <div class="basis-1/3 bg-black flex justify-center items-center p-7 b">
      <div class="w-full h-full">
        <p class="text-white text-2xl font-bold">
          Поможем подобрать <br />
          автомобиль
        </p>

        <ConsultationForm class="w-full mt-7" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.box-shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 20%);
}
</style>
