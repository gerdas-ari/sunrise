<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import { CarEntity } from "~/entities/Car";
import { AutoCategories } from "~/widgets/AutoCategories";
import { ClientReviews } from "~/widgets/ClientReviews";
import { FreeConsultation } from "~/widgets/FreeConsultation";
import { NewsBlock } from "~/widgets/NewsBlock";
import { PrinciplesList } from "~/widgets/PrinciplesList";
import { StockBlock } from "~/widgets/StockBlock";
import { WorkSteps } from "~/widgets/WorkSteps";
import { YoutubeVideos } from "~/widgets/YoutubeVideos";
import { WelcomeBlock } from "~/widgets/WelcomeBlock";

const categories = [
  "Кей-кары",
  "Хэтчбеки",
  "Универсалы",
  "Минивены",
  "Седаны",
  "Кроссоверы и джипы",
];

const currentCategory = ref(categories[0]);
</script>

<template>
  <WelcomeBlock />
  <StockBlock class="mt-25" />

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Лучшие предложения из Японии</h2>
    <p class="text-center text-gray mt-4">Торгуется на аукционах</p>

    <AutoCategories
      class="mt-15"
      :categories="categories"
      @selectTab="currentCategory = $event"
      :activeCat="currentCategory"
    />

    <ListWithPagination
      class="mt-7"
      :linkTitle="'Больше на аукционе'"
      :swiper-class="'bestFromJapan'"
    >
      <SwiperSlide v-for="car in 5">
        <CarEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">
      Авто в наличие во Владивостоке
    </h2>
    <p class="text-center text-gray mt-4">
      Оцените авто при личном осмотре, или мы сделаем для вас видеообзор. Все
      авто в отличном состоянии, <br />
      полый пакет документов. Поможем с выбором и доставим в любой город РФ.
    </p>

    <ListWithPagination
      class="mt-7"
      :linkTitle="'Больше вариантов'"
      :swiper-class="'aviableAuto'"
    >
      <SwiperSlide v-for="car in 5">
        <CarEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <FreeConsultation
    class="mt-50"
    :title="'Бесплатная консультация'"
    :description="`Подберем для вас лучший вариант автомобиля, вышлем актуальную
стоимость, расскажем о сроках доставки и схеме работы.`"
    :image-src="'free_consultation.png'"
  />

  <YoutubeVideos class="mt-50" />

  <PrinciplesList class="mt-50" />

  <WorkSteps class="mt-50" />

  <NewsBlock class="mt-50" />

  <ClientReviews class="mt-50" :swiper-class="'ClientReviews'" />
</template>
