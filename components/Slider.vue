<script lang="ts" setup>
import { Swiper } from "swiper/vue";

const props = defineProps<{
  swiperClass: string;
}>();

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function slideNext() {
  document?.querySelector("." + props.swiperClass)?.swiper.slideNext();
}

function slidePrev() {
  document?.querySelector("." + props.swiperClass)?.swiper.slidePrev();
}

const modules = [Pagination, Navigation];
</script>

<template>
  <section class="relative">
    <swiper
      :navigation="false"
      :modules="modules"
      :class="props.swiperClass"
      :slides-per-view="1"
    >
      <slot />
    </swiper>

    <section
      class="flex justify-between items-center z-10 absolute bottom-5 right-5"
    >
      <div class="flex gap-2 mt-4">
        <button
          @click="slidePrev()"
          class="p-3 btn-black-outline bg-black text-white transition"
        >
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button
          @click="slideNext()"
          class="p-3 btn-black-outline bg-black text-white transition"
        >
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>
    </section>
  </section>
</template>
