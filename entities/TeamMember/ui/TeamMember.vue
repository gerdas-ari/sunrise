<script lang="ts" setup>
const props = defineProps<{
  imgSrc: string;
  name: string;
  position: string;
}>();
</script>

<template>
  <article class="flex flex-col gap-2 b b-dark">
    <NuxtImg :src="imgSrc" />

    <div class="p-4">
      <p class="text-xl font-bold">{{ name }}</p>

      <p class="text-gray my-2">{{ position }}</p>

      <button class="btn-red-filled w-full mt-4">Написать мне</button>
    </div>
  </article>
</template>
