<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
import { CarEntity } from "~/entities/Car";
import { ClientReviews } from "~/widgets/ClientReviews";
import { FreeConsultation } from "~/widgets/FreeConsultation";
import { PrinciplesList } from "~/widgets/PrinciplesList";
import { Advantages } from "~/widgets/_catalog/Advantages";
import {
  CatalogFooterRelative,
  CatalogHeader,
} from "~/widgets/_catalog/CatalogHeader";

const buyAdvantages = [
  "Дешевле, чем в России",
  "Большой выбор байков с минимальным пробегом в отличном состоянии",
  "Быстрая покупка и безопасная доставка",
];

const advantages = [
  {
    title: "Чистая предыстория",
    description: `Вы покупаете авто с оригинальными документами и нескрученным пробегом. Состояние автомобиля лично оценивает наш специалист на этапе просмотра и предоставляет детальный видеоотчёт.`,
  },
  {
    title: "Дешевле, чем в России",
    description: `В Японии при окончании гарантийного срока на мотоцикл налог на него существенно возрастает, поэтому местным дешевле купить новый байк, а свой старый выставить на торги. Но этот «старый» выглядит так, как будто его практически не эксплуатировали. Его не нужно ремонтировать, можно смело покупать и наслаждаться ездой ещё много лет. Чего не скажешь о пробежных мотоциклах в РФ.`,
  },
  {
    title: "Большой выбор",
    description: `На японских аукционах в сутки продаются от
1 500 до 5 000 байков. Широкий модельный ряд под любой запрос и бюджет. При этом все данные, указанные в карточке лота, совпадают с действительностью. Нет риска, как в России, купить кота в мешке.`,
  },
  {
    title: "Реальная оценка",
    description: `Перед торгами проводится тщательная проверка каждого байка, чтобы ещё
до покупки вы знали все подробности
о состоянии мотоцикла.`,
  },
];
</script>

<template>
  <CatalogHeader
    :image-src="'/images/motorcycle.png'"
    :title="'Мотоциклы из Японии'"
    :description="'Поможем с выбором, купим, привезём, доставим в любой город РФ.'"
    :form-title="'Нужен мотоцикл в отличном состоянии?'"
  >
    <template #button-group>
      <div class="md:flex gap-2 py-10 px-4 md:px-0">
        <button class="btn-red-filled px-15 w-full my2 md:w-80">
          Рассчитать стоимость
        </button>
      </div>
    </template>

    <template #footer>
      <CatalogFooterRelative :strings="buyAdvantages" />
    </template>
  </CatalogHeader>

  <section class="mt39 container">
    <h2 class="text-4xl font-bold text-center">Лучшие предложения из Японии</h2>
    <p class="text-center text-gray mt-4">Торгуется на аукционах</p>

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
    <h2 class="text-4xl font-bold text-center">ТОП-мотоциклы из Японии</h2>
    <p class="text-center text-gray mt-4">Торгуется на аукционах</p>

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

  <FreeConsultation
    class="mt-50"
    :title="'Сколько стоит авто из Японии?'"
    :description="`Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами.`"
    :image-src="'free_consultation_4.png'"
  />

  <Advantages
    :title="'Преимущества покупки мотоцикла из Японии'"
    :advantages="advantages"
    class="mt-50"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />

  <ClientReviews class="mt-50" :swiper-class="'ClientReviews'" />
</template>
