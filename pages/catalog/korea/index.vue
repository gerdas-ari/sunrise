<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import { CarEntity } from "~/entities/Car";
import { AutoCategories } from "~/widgets/AutoCategories";
import { ClientReviews } from "~/widgets/ClientReviews";
import { FreeConsultation } from "~/widgets/FreeConsultation";
import { PrinciplesList } from "~/widgets/PrinciplesList";
import { YoutubeVideos } from "~/widgets/YoutubeVideos";
import { Advantages } from "~/widgets/_catalog/Advantages";
import { CatalogHeader, CatalogFooter } from "~/widgets/_catalog/CatalogHeader";
import { DeliveryInfo } from "~/widgets/_catalog/DeliveryInfo";
import { DownLoadPDF } from "~/widgets/_catalog/DownloadPDF";

const categories = [
  "Кей-кары",
  "Хэтчбеки",
  "Универсалы",
  "Минивены",
  "Седаны",
  "Кроссоверы и джипы",
];

const advantages = [
  {
    title: "Чистая предыстория",
    description: `Вы покупаете авто с оригинальными документами и нескрученным пробегом. Состояние автомобиля лично оценивает наш специалист на этапе просмотра и предоставляет детальный видеоотчёт.`,
  },
  {
    title: "Доступная цена и качество",
    description: `Цены на автомобили из Кореи значительно ниже, чем на те же, собранные в РФ.
А качество — выше. Детали для корейских авто производят либо в Южной Корее, либо в Германии.`,
  },
  {
    title: "Большой выбор",
    description: `Широкий модельный ряд под любой запрос
и бюджет. Из Кореи можно привезти не только корейские авто, но и автомобили европейских марок.`,
  },
  {
    title: "Широкие опции",
    description: `Комплектации у корейских авто намного богаче, чем у аналогов из России. Даже
в базовых комплектациях будет салон из
эко-кожи, подогревы руля, сидений и т.д.`,
  },
];

const strings = ["MAZDA", "HONDA", "MITSUBISHI", "TOYOTA"];

const currentCategory = ref(categories[0]);
</script>

<template>
  <CatalogHeader
    :image-src="'/images/korea.png'"
    :title="'Автомобили из Кореи'"
    :description="'Наши специалисты в Корее снимают детальный видеообзор авто на этапе просмотра. Поможем с выбором, купим, привезём, доставим в любой город РФ.'"
    :form-title="'Нужен авто в отличном состоянии из Кореи?'"
  >
    <template #button-group>
      <div class="md:flex gap-2 py-10 px-4 md:px-0">
        <button class="btn-red-filled px-15 w-full my2 md:w-80">
          Рассчитать стоимость
        </button>
        <button class="btn-red-outline px-15 w-full my2 md:w-80">
          Перейти на аукцион
        </button>
      </div>
    </template>

    <template #footer>
      <CatalogFooter />
    </template>
  </CatalogHeader>

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Лучшие предложения из Кореи</h2>
    <p class="text-center text-gray mt-4">Торгуется на аукционах</p>

    <AutoCategories
      class="mt-15"
      :categories="categories"
      @selectTab="currentCategory = $event"
      :activeCat="currentCategory"
    />

    <ListWithPagination
      class="mt-7"
      :linkTitle="'Больше на маркетплейсе'"
      :swiper-class="'bestFromJapan'"
    >
      <SwiperSlide v-for="car in 5">
        <CarEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Подборка ТОП-авто</h2>
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
      :swiper-class="'topAuto'"
    >
      <SwiperSlide v-for="car in 5">
        <CarEntity />
      </SwiperSlide>
    </ListWithPagination>
  </section>

  <FreeConsultation
    class="mt-50"
    :title="'Сколько стоит авто из Кореи?'"
    :description="`Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами.`"
    :image-src="'free_consultation_2.png'"
  />

  <Advantages
    :title="'Преимущества покупки авто из Кореи'"
    :advantages="advantages"
    class="mt-50"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />

  <DeliveryInfo
    class="mt-50"
    :title="'до 10 дней'"
    :description="'Среднее время покупки и доставки авто из Кореи'"
    :additional="'(6-10 дней срок растаможки)'"
  />

  <DownLoadPDF class="mt-50" />

  <YoutubeVideos class="mt-50" />

  <ClientReviews class="mt-50" :swiper-class="'ClientReviews'" />
</template>
