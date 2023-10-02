<script lang="ts" setup>
import ServiceCard from "./ServiceCard.vue";

const config = [
  {
    title: "Авто из Японии под полную пошлину",
    imgSrc: "/images/camry.png",
    href: "/catalog/japan/full-duty",
  },
  {
    title: "Авто из Кореи",
    imgSrc: "/images/korea.png",
    href: "/catalog/korea",
  },
  {
    title: "Авто из Китая",
    imgSrc: "/images/china.png",
    href: "/catalog/china",
  },
  {
    title: "Мотоциклы",
    imgSrc: "/images/motorcycle.png",

    href: "/catalog/motorcycle",
  },
  {
    title: "Коммерческие",
    imgSrc: "/images/truck.png",

    href: "/catalog/commercial",
  },
  {
    title: "Авто в наличии",
    imgSrc: "/images/supra.png",

    href: "/catalog/aviable",
  },
  {
    title: "Авто из Японии конструкторы",
    imgSrc: "/images/camry.png",

    href: "/catalog/japan/constructor",
  },
  {
    title: "Битые авто из Японии",
    imgSrc: "/images/services/wheel.png",
    href: "/catalog/japan/broken-auto",
  },
  {
    title: "Доставка по РФ",
    imgSrc: "/images/planet.png",
    href: "/delivery",
  },
];
</script>

<template>
  <section class="container">
    <h1 class="text-center text-4xl font-bold my-10">Сервисы</h1>

    <div class="grid grid-cols-3 gap-5 mt-10">
      <ServiceCard
        v-for="item in config"
        :title="item.title"
        :img-src="item.imgSrc"
        :href="item.href"
      />
    </div>
  </section>
</template>
