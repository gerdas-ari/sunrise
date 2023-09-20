<script lang="ts" setup>
const props = defineProps<{
  imageSrc: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <article class="b p-5">
    <div class="h-60">
      <img :src="'/assets/images/' + imageSrc" alt="Преимущество" />
    </div>

    <p class="text-2xl font-semibold">{{ title }}</p>

    <p class="mt-4">{{ description }}</p>
  </article>
</template>
