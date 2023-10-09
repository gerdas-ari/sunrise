<script lang="ts" setup>
const emit = defineEmits(["selectTab"]);

const props = defineProps<{
  categories: string[];
  activeCat: string;
}>();

function next() {}

function past() {}
</script>

<template>
  <div>
    <ul class="hidden lg:flex mt-4">
      <li
        v-for="cat in categories"
        :key="cat"
        @click="emit('selectTab', cat)"
        class="cursor-pointer border b-dark p-4 w-full text-center transition flex justify-center items-center"
        :class="{ 'btn-red-filled': activeCat === cat }"
      >
        {{ cat }}
      </li>
    </ul>

    <div class="flex justify-between lg:hidden mt-4">
      <button class="btn-black-outline" @click="past">
        <NuxtIcon name="arrow-left-smooth" />
      </button>
      <span
        class="b b-dark p-3 flex justify-center items-center text-lg w-full"
        >{{ props.activeCat }}</span
      >

      <button class="btn-black-outline" @click="next">
        <NuxtIcon name="arrow-right-smooth" />
      </button>
    </div>
  </div>
</template>
