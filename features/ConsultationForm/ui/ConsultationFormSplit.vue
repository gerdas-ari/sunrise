<script lang="ts" setup>
const name = ref("");
const phone = ref("");

const additional = ref("");
</script>

<template>
  <form>
    <div class="md:flex gap-4">
      <input
        type="text"
        placeholder="Ваше имя"
        required
        v-model="name"
        class="input w-full"
      />
      <input
        type="tel"
        placeholder="Номер телефона"
        required
        v-model="phone"
        class="input w-full mt-4 md:mt-0"
      />
    </div>

    <textarea
      cols="30"
      class="input w-full mt-4"
      rows="5"
      placeholder="Пожелания к авто(марка, модель, год, объём, цвет и т.д.)"
      v-model="additional"
    ></textarea>

    <div class="md:flex items-center gap-4 mt-4">
      <button class="btn-red-filled w-full md:w-1/2">Отправить заявку</button>

      <p class="text-center text-gray text-sm mt-4 md:mt-0">
        Нажимая кнопку вы соглашаетесь <br />
        с политикой конфиденциальности
      </p>
    </div>
  </form>
</template>
