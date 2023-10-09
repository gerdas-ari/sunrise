<script lang="ts" setup>
import { CatalogHeader } from "~/widgets/_catalog/CatalogHeader";
import { AutoList } from "~/widgets/_catalog/_aviable-auto/AutoList/ui";
</script>

<template>
  <CatalogHeader
    :image-src="'/images/supra.png'"
    :title="'Подержанные и новые автомобили в наличие во Владивостоке'"
    :description="'С 2016 года мы привезли 1000+ авто из Японии, Кореи и Китая'"
    :form-title="'Нужен авто в отличном состоянии?'"
  >
    <template #button-group>
      <div class="md:flex gap-2 py-10 px-4 md:px-0">
        <button class="btn-red-filled px-15 w-full my2 md:w-80">
          Написать в WhatsApp
        </button>
      </div>
    </template>

    <template #footer>
      <section class="flex justify-between b-y b-dark overflow-auto">
        <article class="b-dark p10 min-w-70">
          <NuxtIcon name="stars" class="text-red text-3xl" />
          <p class="text-xl font-bold pt-2">Самые популярные модели</p>
        </article>
        <article class="b-l b-dark p10 min-w-70">
          <NuxtIcon name="wallet" class="text-red text-3xl" />
          <p class="text-xl font-bold pt-2">Под любой запрос и бюджет</p>
        </article>
        <article class="b-l b-dark p10 min-w-70">
          <NuxtIcon name="eye" class="text-red text-3xl" />
          <p class="text-xl font-bold pt-2">Личный осмотр</p>
        </article>
        <article class="b-l b-dark p10 min-w-70">
          <NuxtIcon name="map_point" class="text-red text-3xl" />
          <p class="text-xl font-bold pt-2">
            Быстрая доставка во все города РФ
          </p>
        </article>
      </section>
    </template>
  </CatalogHeader>

  <AutoList class="mt-50" />
</template>
