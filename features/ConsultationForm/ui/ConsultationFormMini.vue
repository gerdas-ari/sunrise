<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();

const name = ref("");
const phone = ref("");
</script>

<template>
  <form class="flex flex-col gap-3 w-90 b p-7">
    <p class="text-xl font-bold">{{ title }}</p>

    <p class="text-gray">Оставьте свой номер для бесплатной консультации</p>

    <input
      type="text"
      placeholder="Ваше имя"
      required
      v-model="name"
      class="input"
    />
    <input
      type="tel"
      placeholder="Номер телефона"
      required
      v-model="phone"
      class="input"
    />

    <button class="btn-red-filled mt-2">Отправить</button>
  </form>
</template>
