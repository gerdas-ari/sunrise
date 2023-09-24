<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>

<template>
  <section class="container">
    <h2 class="text-3xl font-bold text-center">
      Поможем привести грузовик в разбор
    </h2>

    <div class="mt-15 flex gap-5">
      <div class="b b-dark p-10 flex flex-col gap-5 text-gray">
        <p>
          На аукционах Японии огромный выбор грузовиков в любом исполнении
          шасси:
          <span class="text-white"
            >самосвалы, рефрижераторы, манипуляторы и прочее</span
          >.
        </p>

        <p>
          Грузовик-конструктор заказывают для ремонта, восстановления или
          обновления уже имеющихся грузовиков.
        </p>

        <p>
          Вы можете поменять кабину, двигатель, коробки, рамы, борта и другие
          оригинальные конструкции.
        </p>

        <div class="text-white">
          <p class="text-xl font-bold">Какие документы вы получите:</p>

          <ul class="flex flex-col gap-2 mt-2">
            <li>- ГТД на двигатель</li>
            <li>- ГТД на кабину</li>
            <li>- ГТД на раму</li>
          </ul>
        </div>
      </div>

      <div class="w-200">
        <Slider :swiper-class="'truck'" class="b b-dark">
          <SwiperSlide v-for="i in 3" :key="i">
            <img src="/assets/images/broken_car.png" alt="" class="w-full" />
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  </section>
</template>
