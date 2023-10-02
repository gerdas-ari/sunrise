<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  description?: string;
  additional?: string;
  head?: string;
}>();
</script>

<template>
  <section class="container relative">
    <div
      class="absolute w-full h-full flex flex-col gap-7 justify-center items-center"
    >
      <p>{{ head }}</p>

      <h2 class="text-6xl font-bold">{{ title }}</h2>

      <p class="text-3xl">{{ description }}</p>

      <p>{{ additional }}</p>
    </div>

    <NuxtImg
      src="images/frames/delivery_info.png"
      alt="Доставка"
      class="w-full h[500px]"
    />
  </section>
</template>
