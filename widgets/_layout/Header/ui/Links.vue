<template>
  <section
    class="bg-black text-white py-4 items-center container justify-between text-sm"
  >
    <ul class="flex gap-5">
      <li>
        <NuxtLink class="hover:text-red transition" to="/about"
          >О компании</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="hover:text-red transition" to="/buy-steps"
          >Как заказать</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="hover:text-red transition" to="/news"
          >Новости и статьи</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="hover:text-red transition" to="/FAQ">FAQ</NuxtLink>
      </li>
      <li>
        <NuxtLink class="hover:text-red transition" to="/delivery"
          >Доставка по РФ</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="hover:text-red transition" to="/contacts"
          >Контакты</NuxtLink
        >
      </li>
    </ul>

    <span class="flex gap-2 items-center cursor-pointer">
      <div><NuxtIcon class="w-8 h-8" name="phone" /></div>
      <div>8 800 234-23-50</div>
    </span>
  </section>
</template>
