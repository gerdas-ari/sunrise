<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import { ArticleEntity } from "~/entities/Article";
</script>

<template>
  <section class="container">
    <h2 class="text-4xl font-bold text-center">Новости и статьи</h2>

    <ListWithPagination
      class="mt-15"
      :linkTitle="'Смотреть больше'"
      :swiper-class="'news'"
    >
      <SwiperSlide v-for="article in 5">
        <ArticleEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>
</template>
