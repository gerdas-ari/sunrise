<script lang="ts" setup>
const props = defineProps<{
  title: string;
  advantages: { title: string; description: string }[];
}>();
</script>

<template>
  <section>
    <h2 class="text-center text-4xl font-bold mb-15">{{ title }}</h2>

    <div class="lg:flex container  gap-5">
      <div class="lg:flex gap-5 basis-2/3">
        <div class="b p-7 my-5 md:my-0 pb-20">
          <p class="text-2xl font-bold mb-4">{{ advantages[0].title }}</p>

          <span class="text-gray">{{ advantages[0].description }}</span>
        </div>
        <div class="b p-7 my-5 md:my-0 pb-20">
          <p class="text-2xl font-bold mb-4">{{ advantages[1].title }}</p>

          <span class="text-gray">{{ advantages[1].description }}</span>
        </div>
      </div>

      <div
        class="md:(flex) lg:(flex flex-col) gap-5 mt-5 lg:(block mt-0) basis-1/3"
      >
        <div class="b p-7 pb-20">
          <p class="text-2xl font-bold mb-4">{{ advantages[2].title }}</p>

          <span class="text-gray">{{ advantages[2].description }}</span>
        </div>

        <div class="b p-7 pb-20 mt-4 md:mt-0">
          <p class="text-2xl font-bold mb-4">{{ advantages[3].title }}</p>

          <span class="text-gray">{{ advantages[3].description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
