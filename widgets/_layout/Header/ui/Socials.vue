<template>
  <section
    class="flex justify-between md:px10 lg:px-[94px] border-y b-dark items-center"
  >
    <ul class="flex gap-4">
      <li class="border-x b-dark p-4 hidden lg:block">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/youtube"
        />
      </li>
      <li class="border-x b-dark p-4 hidden lg:block">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/whatsapp"
        />
      </li>
      <li class="border-x b-dark p-4 hidden lg:block">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/instagram"
        />
      </li>
      <li class="border-x b-dark p-4 hidden lg:block">
        <NuxtIcon
          class="text-xl cursor-pointer transition"
          name="socials/telegram"
        />
      </li>

      <li class="border-x b-dark p-4">
        <NuxtIcon class="text-xl cursor-pointer transition" name="phone" />
      </li>
    </ul>

    <NuxtLink to="/">
      <NuxtImg src="/images/logo.png" class="lg:w-fit" alt="Logo" />
    </NuxtLink>

    <button
      class="border-x b-dark h-full p-4 font-bold lg:px-15 transition hover:(bg-black text-white)"
    >
      <span class="hidden lg:block">Заказать звонок</span>

      <NuxtIcon
        class="text-xl cursor-pointer transition lg:hidden"
        name="menu"
      />
    </button>
  </section>
</template>
