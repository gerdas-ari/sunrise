<script lang="ts" setup>
const emit = defineEmits(["selectTab"]);

const props = defineProps<{
  categories: string[];
  activeCat: string;
}>();
</script>

<template>
  <ul class="flex">
    <li
      v-for="cat in categories"
      :key="cat"
      @click="emit('selectTab', cat)"
      class="cursor-pointer border b-dark p-4 w-full text-center transition"
      :class="{ 'btn-red-filled': activeCat === cat }"
    >
      {{ cat }}
    </li>
  </ul>
</template>
