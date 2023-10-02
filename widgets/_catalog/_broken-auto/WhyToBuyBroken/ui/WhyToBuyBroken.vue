<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>

<template>
  <section class="container">
    <div class="text-center">
      <h2 class="text-3xl font-bold">
        Зачем покупать и ввозить аварийное авто
      </h2>
      <p class="text-gray mt-4">Главный плюс - это экономия ваших денег</p>
    </div>

    <div class="flex mt-15 gap-5">
      <div class="w-200 b b-dark">
        <Slider :swiper-class="'whyBroken'">
          <SwiperSlide v-for="i in 3" :key="i">
            <NuxtImg src="/images/china.png" />
          </SwiperSlide>
        </Slider>
      </div>

      <div class="text-gray flex flex-col gap-4 b b-dark p-10">
        <p>
          Представьте ситуацию: у вас есть 2 млн рублей, а машина, которая вам
          нравится, стоит 2,5 миллиона. Чтобы заработать или накопить ещё денег,
          нужно время. Сам авто за это время может подорожать. Что делать?
        </p>

        <p>
          Не ждать и заказать авто с незначительными повреждениями в ваш бюджет.
          Стоимость битого авто из Японии вместе со стоимостью его ремонта в
          России будет значительно ниже, чем покупка целого такого же авто.
          Экономия может составить до 20-30%.
        </p>

        <p>
          После того, как мы привезём такой автомобиль в Россию, мы можем
          порекомендовать проверенные сервисы для восстановления авто.
        </p>
      </div>
    </div>
  </section>
</template>
