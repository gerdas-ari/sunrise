<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import AutoCard from "./AutoCard.vue";
</script>

<template>
  <section class="container">
    <section class="mt39 container">
      <div class="text-center">
        <h2 class="text-4xl font-bold">
          Сравните рыночную стоимость авто и цену аварийного
        </h2>

        <p class="text-gray mt-4">
          Аварийное авто будет стоить намного дешевле целого
        </p>
      </div>

      <ListWithPagination
        class="mt-7"
        :swiper-class="'bestFromJapan'"
        :slides-per-view="1"
      >
        <SwiperSlide v-for="car in 5">
          <div class="md:flex gap-2 my-2">
            <AutoCard class="my-2 md:my-0" />
            <AutoCard />
          </div>
        </SwiperSlide>
      </ListWithPagination>
    </section>
  </section>
</template>
