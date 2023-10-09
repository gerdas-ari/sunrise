<script lang="ts" setup>
const name = ref("");
const phone = ref("");

const experience = ref("");
</script>

<template>
  <form class="flex flex-col gap-3 ">
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

    <textarea
      cols="30"
      class="input"
      rows="5"
      placeholder="Опыт работы"
      v-model="experience"
    ></textarea>

    <button class="btn-red-filled">Отправить резюме</button>

    <p class="text-center text-gray-400 text-sm">
      Нажимая кнопку вы соглашаетесь с политикой конфиденциальности
    </p>
  </form>
</template>
