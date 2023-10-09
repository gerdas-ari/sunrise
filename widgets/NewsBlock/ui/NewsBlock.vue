<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import { ArticleSlide } from "~/entities/Article";

const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="container">
    <h2 class="text-4xl font-bold text-center">
      {{ title ?? "Новости и статьи" }}
    </h2>

    <ListWithPagination
      class="mt-15"
      :linkTitle="'Смотреть больше'"
      :swiper-class="'news'"
    >
      <SwiperSlide v-for="article in 5">
        <ArticleSlide />
      </SwiperSlide>
    </ListWithPagination>
  </section>
</template>
