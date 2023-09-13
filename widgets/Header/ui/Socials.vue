<template>
  <section class="flex justify-between container border-y items-center">
    <ul class="flex gap-4">
      <li class="border-x p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/youtube"
        />
      </li>
      <li class="border-x p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/whatsapp"
        />
      </li>
      <li class="border-x p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/instagram"
        />
      </li>
      <li class="border-x p-4">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/telegram"
        />
      </li>
    </ul>

    <NuxtImg src="/images/logo.jpg" />

    <button
      class="border-x h-full p-4 font-bold px-15 transition hover:(bg-black text-white)"
    >
      Заказать звонок
    </button>
  </section>
</template>
