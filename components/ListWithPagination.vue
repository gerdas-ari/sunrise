<script lang="ts" setup>
import { Swiper } from "swiper/vue";

const props = defineProps<{
  linkTitle?: string;
  linkHref?: string;
  swiperClass: string;
  slidesPerView?: number;
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

const breakPoints = computed(() => {
  if (props.slidesPerView) {
    return null;
  } else {
    return {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    };
  }
});
</script>

<template>
  <section>
    <swiper
      :space-between="70"
      :direction="'horizontal'"
      :slides-per-view="slidesPerView ?? 3"
      :pagination="{
        type: 'progressbar',
      }"
      :breakpoints="breakPoints"
      :navigation="false"
      :modules="modules"
      :class="props.swiperClass"
    >
      <slot />
    </swiper>

    <section class="flex justify-between items-center">
      <div class="flex gap-2">
        <button
          @click="slidePrev()"
          class="p-3 btn-black-outline mt-2"
        >
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button
          @click="slideNext()"
          class="p-3 btn-black-outline mt-2"
        >
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>

      <button
        class="btn-red-outline my-2 flex justify-center items-center gap-2"
        v-if="linkTitle"
      >
        {{ linkTitle }}

        <NuxtIcon name="arrow-right-smooth" class="mt-1" />
      </button>
    </section>
  </section>
</template>

<style>
.swiper-wrapper {
}

.swiper-pagination {
  position: absolute;
  background: #d9d9d9;
}

.swiper-pagination-progressbar-fill {
  background: #000 !important;
}
</style>
