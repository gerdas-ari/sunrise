<script lang="ts" setup>
const props = defineProps<{
  strings: string[];
}>();
</script>

<template>
  <section class="flex justify-between b-y b-dark gap-7 overflow-auto min-w-70">
    <div
      v-for="string in strings"
      :key="string"
      class="b-l b-dark basis-1/4 py-5 pb-20 text-lg min-w-60   md:text-2xl font-bold first:b-none p-4"
    >
      {{ string }}
    </div>
  </section>
</template>
