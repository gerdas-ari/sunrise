<script lang="ts" setup>
import { HireForm } from "~/features/HireForm";
</script>

<template>
  <section class="flex justify-between gap-4 container">
    <div class="b b-dark p-10">
      <h2 class="text-5xl font-bold leading-15">
        Хочешь к нам в команду? <br />
        Напиши нам
      </h2>
      <p class="mt-4 ">
        В нашей команде работают целеустремлённые и ответственные люди. Если ты
        хочешь быть одним из нас, готовы предложить лучшие условия для
        комфортного внедрения в автомобильный бизнес: обучение, много интересных
        задач и хорошую заработную плату.
      </p>
    </div>

    <div class="b b-dark p-10">
      <p class="text-2xl font-bold">Отправить резюме</p>

      <HireForm class="mt-7 " />
    </div>
  </section>
</template>
