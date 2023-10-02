<script lang="ts" setup>
import { FreeConsultation } from "~/widgets/FreeConsultation";
import { PrinciplesList } from "~/widgets/PrinciplesList";
import {
  CatalogFooterRelative,
  CatalogHeader,
} from "~/widgets/_catalog/CatalogHeader";
import { AutoComparison } from "~/widgets/_catalog/_broken-auto/AutoComparison";
import { WhyToBuyBroken } from "~/widgets/_catalog/_broken-auto/WhyToBuyBroken";

const buyAdvantages = [
  "Авто с минимальным пробегом до 1 000 км по адекватной цене",
  "Можно заранее оценить ремонт и понять процент выгоды",
  "Экономия 20-30% с учётом восстановления авто",
  "Выгодная покупка авто под запчасти. Дешевле, чем в России",
];
</script>

<template>
  <CatalogHeader
    :image-src="'/images/camry.png'"
    :title="'Битые авто из Японии'"
    :description="'Поможем выбрать и привезти аварийное авто для восстановления или под запчасти.'"
    :form-title="'Как заказать авто под запчасти?'"
  >
    <template #button-group>
      <div class="flex gap-2 py-10">
        <button class="btn-red-filled px-15">Рассчитать стоимость</button>
        <button class="btn-red-outline px-15">Перейти на аукцион</button>
      </div>
    </template>

    <template #footer>
      <CatalogFooterRelative :strings="buyAdvantages" />
    </template>
  </CatalogHeader>

  <AutoComparison class="mt-50" />

  <WhyToBuyBroken class="mt-50" />

  <FreeConsultation
    class="mt-50"
    :title="'Сколько стоит авто из Японии?'"
    :description="`Укажите пожелания по авто и ваши контактные данные. Мы рассчитаем
актуальную стоимость автомобиля и свяжемся с вами.`"
    :image-src="'free_consultation.png'"
  />

  <PrinciplesList class="mt-50" :is-button-visible="true" />
</template>
