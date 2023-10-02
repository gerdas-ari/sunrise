<script lang="ts" setup>
const props = defineProps<{
  title: string;
  imgSrc: string;
  href: string;
}>();
</script>

<template>
  <NuxtLink
    class="relative b h-80 block hover:border-red transition duration-250"
    :to="href"
  >
    <div class="w-full h-full absolute left-0 top-0 justify-center">
      <NuxtImg :src="imgSrc" :alt="title" class="h-full w-full object-cover" />
    </div>

    <h2
      class="absolute bottom-5 text-xl font-bold text-shadow-xl w-full text-center"
    >
      {{ title }}
    </h2>
  </NuxtLink>
</template>
