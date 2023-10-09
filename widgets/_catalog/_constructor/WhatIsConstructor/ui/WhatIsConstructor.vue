<script lang="ts" setup>
import {
  ConsultationForm,
  ConsultationFormSplit,
} from "~/features/ConsultationForm";
import { ConsultationBlock } from "~/widgets/_catalog/ConsultationBlock";
</script>

<template>
  <section class="container">
    <h2 class="text-3xl font-bold text-center">Что такое конструктор?</h2>

    <div class="mt-15 lg:flex gap-5">
      <div class="w-full b-y b-dark">
        <span class="text-gray text-sm">
          Такой автомобиль перед прохождением таможни разбирают на три основные
          части: двигатель, кузов и ходовую часть. На каждую из них оформляется
          отдельная таможенная декларация. После таможенных процедур авто заново
          собирается. На руки клиент получает только ГТД. На учёт поставить
          невозможно.
        </span>

        <NuxtPicture
          src="/images/mother_plate.png"
          class="w-full h-100 mt-4 object-cover"
          alt="Изображение комплектующих авто"
        />
      </div>

      <div class="b b-dark p10 text-sm lg:text-base">
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
