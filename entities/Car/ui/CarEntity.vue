<template>
  <article class="border b-dark p-5">
    <div class="flex justify-center">
      <img
        src="/assets/images/auto_mock.png"
        alt="Изображение автомобиля"
        class=""
      />
    </div>

    <h3 class="text-2xl font-bold my-5">TOYOTA SUPRA A90</h3>

    <ul>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Год выпуска</span>
        <span>2019</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Объём двигателя </span>
        <span>3 998 см³</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Мощность</span>
        <span>340 л.с.</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Топливо</span>
        <span>Бензин</span>
      </li>
      <li class="flex justify-between border b-dark p-3">
        <span class="text-gray">Пробег</span>
        <span>10 000 км</span>
      </li>
    </ul>

    <p class="text-2xl my-5 font-bold">4 000 000 ₽</p>

    <NuxtLink :to="'/catalog/aviable/1'">
      <button class="btn-red-filled w-full">Хочу такой же</button>
    </NuxtLink>
  </article>
</template>
