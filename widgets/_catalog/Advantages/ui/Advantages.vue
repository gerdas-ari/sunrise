<script lang="ts" setup>
const props = defineProps<{
  title: string;
  advantages: { title: string; description: string }[];
}>();
</script>

<template>
  <section>
    <h2 class="text-center text-4xl font-bold mb-15">{{ title }}</h2>

    <div class="flex container gap-5">
      <div class="b p-7 pb-20 basis-3/4">
        <p class="text-2xl font-bold mb-4">{{ advantages[0].title }}</p>

        <span class="text-gray">{{ advantages[0].description }}</span>
      </div>
      <div class="b p-7 pb-20 basis-4/5">
        <p class="text-2xl font-bold mb-4">{{ advantages[1].title }}</p>

        <span class="text-gray">{{ advantages[1].description }}</span>
      </div>

      <div>
        <div class="b p-7 pb-20 mb-5">
          <p class="text-2xl font-bold mb-4">{{ advantages[2].title }}</p>

          <span class="text-gray">{{ advantages[2].description }}</span>
        </div>

        <div class="b p-7 pb-20">
          <p class="text-2xl font-bold mb-4">{{ advantages[3].title }}</p>

          <span class="text-gray">{{ advantages[3].description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
