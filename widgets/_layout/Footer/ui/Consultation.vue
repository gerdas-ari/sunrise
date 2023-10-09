<script lang="ts" setup>
import { ConsultationForm } from "@/features/ConsultationForm";
</script>

<template>
  <section
    class="flex flex-col md:flex-row justify-center lg:justify-between container  gap-4 border-b b-dark"
  >
    <div class="py-10 lg:border-r b-dark lg:basis-3/4">
      <p class="text-4xl font-bold">Нужна консультация?</p>
      <p class="w-2/3 text-gray mt-5 basis-1/4">
        Укажите ваш телефон и мы свяжемся с вами, чтобы рассчитать стоимость и
        обсудить варианты покупки авто
      </p>
    </div>

    <ConsultationForm class="my-10" />
  </section>
</template>
