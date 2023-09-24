<script lang="ts" setup>
const props = defineProps<{
  strings: string[];
}>();
</script>

<template>
  <section class="flex justify-between b-y b-dark gap-7">
    <div
      v-for="string in strings"
      :key="string"
      class="b-r b-dark basis-1/4 py-5 pb-20 text-2xl font-bold last:b-none"
    >
      {{ string }}
    </div>
  </section>
</template>
