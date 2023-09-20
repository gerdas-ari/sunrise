<script lang="ts" setup>
const props = defineProps<{
  imageSrc: string;
  step: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <article
    class="mt-5 relative p-10 h-[500px] flex flex-col justify-center b items-center z-10"
  >
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-10 pointer-events-none"
    >
      <NuxtImg :src="'/images/' + imageSrc" :alt="title" />
    </div>

    <div class="text-center w-200 text-shadow-xl">
      <p>{{ step }}</p>

      <h3 class="text-5xl">{{ title }}</h3>

      <p>{{ description }}</p>
    </div>
  </article>
</template>
