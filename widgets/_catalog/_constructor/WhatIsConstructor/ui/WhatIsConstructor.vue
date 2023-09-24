<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>

<template>
  <section class="container">
    <h2 class="text-3xl font-bold text-center">Что такое конструктор?</h2>

    <div class="mt-15 flex gap-5">
      <div class="w-150 b-y b-dark">
        <span class="text-gray text-sm">
          Такой автомобиль перед прохождением таможни разбирают на три основные
          части: двигатель, кузов и ходовую часть. На каждую из них оформляется
          отдельная таможенная декларация. После таможенных процедур авто заново
          собирается. На руки клиент получает только ГТД. На учёт поставить
          невозможно.
        </span>

        <Slider :swiper-class="'brokenAuto'" class="b b-dark mt-4">
          <SwiperSlide v-for="i in 3" :key="i">
            <img src="/assets/images/broken_car.png" alt="" class="w-full" />
          </SwiperSlide>
        </Slider>
      </div>

      <div class="b b-dark p10">
        <p class="text-2xl font-bold">Плюсы и минусы услуги</p>

        <div class="mt-10">
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Можно завести целый авто без документов по выгодной цене
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Автомобиль-конструктор используется как донор запчастей для старых
            или поломанных авто
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="plus" class="text-green-500" />

            Для рамных автомобилей конструктор используется для перестановки
            кузова и двигателя, в таком случае номер рамы остаётся прежним
          </div>
          <div class="flex items-center gap-4 bg-dark bg-opacity-40 p-4 my-4">
            <NuxtIcon name="minus" class="text-red" />

            Такой автомобиль нельзя поставить на учёт, потому что на него нет
            документов
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
