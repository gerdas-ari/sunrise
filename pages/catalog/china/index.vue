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
    title: "Улучшенное качество",
    description: `За последние несколько лет китайские автопроизводители заметно повысили качество сборки. Приведём статистику по авто, купленным в период с 2021 по 2022 год. По данным рейтинга J. D. Power, на основе опроса около 40 тысяч владельцев китайских авто, среди всех китайских брендов самым качественным оказался Changan. Он отстал от Toyota всего на один балл. Следом — Chery и GAC. Китайским маркам удалось опередить европейские, японские и американские бренды.`,
  },
  {
    title: "Огромный выбор электрокаров",
    description: `В Китае самый большой выбор электромобилей в мире. Есть возможность заказать авто из разных ценовых сегментов: от бюджетных до класса люкс.`,
  },
  {
    title: "Доступная цена",
    description: `Ведущие автопроизводители из КНР успешно конкурируют с лидерами мирового рынка, выпуская достойные авто по приемлемым ценам. Стоимость проходимых свежих кроссоверов в Китае начинается от 1 млн. руб. Точно такой же класс, но в Японии — от 2 млн. руб.`,
  },
];

const strings = ["MAZDA", "HONDA", "MITSUBISHI", "TOYOTA"];

const currentCategory = ref(categories[0]);
</script>

<template>
  <CatalogHeader
    :image-src="'/images/china.png'"
    :title="'Автомобили из Китая'"
    :description="'Наши специалисты в Корее снимают детальный видеообзор авто на этапе просмотра. Поможем с выбором, купим, привезём, доставим в любой город РФ.'"
    :form-title="'Нужен авто в отличном состоянии из Китая?'"
  >
    <template #button-group>
      <div class="flex gap-2 py-10">
        <button class="btn-red-filled px-15">Рассчитать стоимость</button>
        <button class="btn-red-outline px-15">Популярные авто</button>
      </div>
    </template>

    <template #footer>
      <CatalogFooter />
    </template>
  </CatalogHeader>

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Лучшие предложения из Китая</h2>
    <p class="text-center text-gray mt-4">Торгуется на маркетплейсах</p>

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

  <DeliveryInfo
    class="mt-50"
    :head="'К привозу доступны'"
    :title="'новые авто и авто с пробегом'"
    :additional="`Самые востребованные марки на Российском рынке: Chery, Haval и Geely.
Не знаете, что выбрать? Поможем вам определиться `"
  />

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Подборка ТОП-авто из Китая</h2>
    <p class="text-center text-gray mt-4">Интересные предложения на сегодня</p>

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
    :title="'Сколько стоит авто из Китая?'"
    :description="`Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами.`"
    :image-src="'free_consultation_3.png'"
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
