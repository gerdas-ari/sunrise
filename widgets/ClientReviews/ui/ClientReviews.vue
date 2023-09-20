<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ReviewEntity } from "~/entities/Review";

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
  <section class="container">
    <swiper
      :direction="'horizontal'"
      :slides-per-view="1"
      :pagination="{
        type: 'progressbar',
      }"
      :navigation="false"
      :modules="modules"
      :class="props.swiperClass"
    >
      <SwiperSlide v-for="review in 5">
        <ReviewEntity />
      </SwiperSlide>
    </swiper>

    <section class="flex justify-center items-center">
      <div>
        <button
          @click="slidePrev()"
          class="p-3 b m-4 hover:(bg-black text-white) transition"
        >
          <NuxtIcon name="arrow-left-smooth" />
        </button>

        <button
          @click="slideNext()"
          class="p-3 b m-4 hover:(bg-black text-white) transition"
        >
          <NuxtIcon name="arrow-right-smooth" />
        </button>
      </div>
    </section>
  </section>
</template>
