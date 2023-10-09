<script lang="ts" setup>
import { CatalogFooter } from "~/widgets/_catalog/CatalogHeader";
</script>

<template>
  <section class="bg-black text-white text-left container pt-10">
    <div class="w-full md:w-1/2">
      <h1 class="text-5xl font-bold leading-14">
        Автомобили из Японии, Кореи и Китая
      </h1>
      <p class="mt-4">
        Наши специалисты работают во всех странах привоза, оценивают авто и
        делают видеообзоры на этапе просмотра. Заказывая автомобиль через нашу
        компанию, вы получаете надёжный проверенный авто за минимальные сроки.
      </p>
    </div>

    <section class="pt-[224px] md:flex justify-between">
      <div class="flex gap-4">
        <button class="btn-red-filled p-3 px-15 h-13 w-full md:w-70 text-nowrap">
          Рассчитать стоимость
        </button>
      </div>

      <div class="flex items-center justify-center">
        <button
          class="bg-white text-black h-12 w-1/3 mt-4 md:(w-12 h-12) flex justify-center items-center border cursor-pointer"
        >
          <NuxtIcon name="arrow-left" />
        </button>
        <span
          class="bg-white text-black h-12 w-full mt-4 md:(w-16 h-12) flex justify-center items-center border"
          >01</span
        >
        <button
          class="bg-white text-black h-12 w-1/3 mt-4 md:(w-12 h-12) flex justify-center items-center border cursor-pointer"
        >
          <NuxtIcon name="arrow-right" />
        </button>
      </div>
    </section>

    <CatalogFooter class="mt-4" />
  </section>
</template>
