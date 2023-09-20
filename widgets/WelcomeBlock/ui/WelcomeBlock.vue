<script lang="ts" setup>
import Advantages from "./Advantages.vue";
</script>

<template>
  <section class="bg-black text-white text-left container pt-10">
    <div class="w-1/3">
      <h1 class="text-5xl font-bold leading-14">
        Автомобили из Японии, Кореи и Китая
      </h1>
      <p class="mt-4">
        Наши специалисты работают во всех странах привоза, оценивают авто и
        делают видеообзоры на этапе просмотра. Заказывая автомобиль через нашу
        компанию, вы получаете надёжный проверенный авто за минимальные сроки.
      </p>
    </div>

    <section class="pt-[224px] flex justify-between">
      <div class="flex gap-4">
        <button class="btn-red-filled p-3 px-10">Подробнее</button>
        <button class="btn-red-filled p-3 px-15">Рассчитать стоимость</button>
      </div>

      <div class="flex items-center justify-center">
        <button
          class="bg-white text-black w-12 h-12 flex justify-center items-center border cursor-pointer"
        >
          <NuxtIcon name="arrow-left" />
        </button>
        <span
          class="bg-white text-black w-16 h-12 flex justify-center items-center border"
          >01</span
        >
        <button
          class="bg-white text-black w-12 h-12 flex justify-center items-center border cursor-pointer"
        >
          <NuxtIcon name="arrow-right" />
        </button>
      </div>
    </section>

    <Advantages class="mt-7" />
  </section>
</template>
