<script lang="ts" setup>
import {
  CatalogFooterRelative,
  CatalogHeader,
} from "~/widgets/_catalog/CatalogHeader";
import { ConsultationBlock } from "~/widgets/_catalog/ConsultationBlock";
import { WhatIsConstructor } from "~/widgets/_catalog/_constructor/WhatIsConstructor";
import { WhyConstructor } from "~/widgets/_catalog/_constructor/WhyConstructor";
import { HelpWithTruck } from "~/widgets/_catalog/_constructor/HelpWithTruck";
import { Advantages } from "~/widgets/_catalog/Advantages";
import { PrinciplesList } from "~/widgets/PrinciplesList";
import { DeliveryInfo } from "~/widgets/_catalog/DeliveryInfo";
import { DownLoadPDF } from "~/widgets/_catalog/DownloadPDF";
import { ClientReviews } from "~/widgets/ClientReviews";

const advantages = [
  "Хорошее состояние комплектующих",
  "Выгодная цена и небольшой пробег",
  "Можно заказать деталь, которую уже не производят",
  "Можно заработать на дальнейшей продаже запчастей",
];

const buyAdvantages = [
  {
    title: "Большой выбор",
    description: `На аукционах Японии ежедневно торгуются от 20 до 60 тысяч автомобилей. Помимо этого более 100 тысяч авто стоят на сток ярдах, где мы также можем купить авто. Широкий модельный ряд на любой вкус и бюджет. Выгоднее всего привозить проходные авто от 3 до 5 лет с даты выпуска.`,
  },
  {
    title: "Состояние авто",
    description: `Авто, выпущенные в Японии, по качеству сборки превосходят аналоги, собранные в России или Европе. Запчасти выпускаются непосредственно на заводах Японии со строгим контролем качества. Сколько бы японец не ездил на своей машине, она в любом случае будет в 10 раз лучше по техническому состоянию, чем авто, купленное в РФ. В Японии об автомобиле заботятся. Качественные дороги, качественное топливо и добросовестное отношение водителя сильно продлевают срок службы машины.`,
  },
  {
    title: "Чистая предыстория",
    description: `Вы покупаете авто с оригинальным аукционным листом и документами. Перед торгами проводится тщательная проверка каждого авто, чтобы ещё до покупки вы знали про все подробности о состоянии автомобиля.`,
  },
  {
    title: "Прогнозируемый бюджет",
    description: `Если вы рассчитаете на определённую сумму, вы сможете заранее узнать обо всех налогах
и окончательной ставке.`,
  },
];
</script>

<template>
  <CatalogHeader
    :image-src="'/images/constructor_car.png'"
    :title="'Автомобили с аукционов Японии'"
    :description="'Поможем с выбором, купим, привезём, доставим в любой город РФ.'"
    :form-title="'Как заказать авто под запчасти?'"
  >
    <template #button-group>
      <div class="md:flex gap-2 py-10">
        <button class="btn-red-filled px-15 w-full md:w-max my-2">
          Рассчитать стоимость
        </button>
        <button class="btn-red-outline px-15 w-full md:w-max my-2">
          Перейти на аукцион
        </button>
      </div>
    </template>

    <template #footer>
      <CatalogFooterRelative :strings="advantages" />
    </template>
  </CatalogHeader>

  <WhyConstructor class="mt-50" />

  <WhatIsConstructor class="mt-50" />

  <ConsultationBlock
    class="mt-5"
    :title="'Узнать стоимость конструктора в вашем городе'"
  />

  <HelpWithTruck class="mt-50" />

  <ConsultationBlock
    class="mt-5"
    :title="'Узнать стоимость грузовика в разбор в вашем городе'"
  />

  <Advantages
    :title="'Преимущества покупки авто из Кореи'"
    :advantages="buyAdvantages"
    class="mt-50"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />

  <DeliveryInfo
    class="mt-50"
    :title="'до 15 дней'"
    :description="'Далее организуем доставку в любой город РФ'"
    :additional="'(6-10 дней срок растаможки)'"
  />

  <DownLoadPDF class="mt-50" />

  <ClientReviews class="mt-50" :swiper-class="'ClientReviews'" />
</template>
