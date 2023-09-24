<template>
  <section class="flex justify-between px-[94px] border-y b-dark items-center">
    <ul class="flex gap-4">
      <li class="border-x b-dark p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/youtube"
        />
      </li>
      <li class="border-x b-dark p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/whatsapp"
        />
      </li>
      <li class="border-x b-dark p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/instagram"
        />
      </li>
      <li class="border-x b-dark p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/telegram"
        />
      </li>
    </ul>

    <NuxtImg src="/images/logo.png" />

    <button
      class="border-x b-dark h-full p-4 font-bold px-15 transition hover:(bg-black text-white)"
    >
      Заказать звонок
    </button>
  </section>
</template>
