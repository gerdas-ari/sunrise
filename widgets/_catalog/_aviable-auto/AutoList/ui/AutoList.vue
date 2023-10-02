<script lang="ts" setup>
import { CarEntity } from "~/entities/Car";
</script>

<template>
  <section class="container">
    <div class="text-center">
      <h2 class="text-4xl font-bold">Авто в наличие</h2>

      <p class="text-gray mt-2">
        Все автомобили вы можете посмотреть на стоянке нашего офиса с 10:00 до
        18:00 по адресу: Пушкинская 109, офис 209
      </p>
    </div>

    <section class="grid grid-cols-3 gap-5 mt-15">
      <CarEntity v-for="car in 9" />
    </section>
  </section>
</template>
