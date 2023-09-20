<template>
  <article class="flex justify-between b">
    <div class="">
      <div class="border-b b-dark p-4 flex items-center gap-2">
        <div class="w-6 h-6 bg-gray"></div>
        <span class="font-bold">Mister Client</span>
      </div>

      <div class="p-7">
        <div class="flex gap-2">
          <NuxtIcon name="star" class="text-red text-xl" v-for="star in 5" />
        </div>

        <p class="font-bold text-2xl mt-5">
          Парни тачку то привезли, мне ваще нравится! Самое крутое, что привезли
          тачку именно ту, что я хотел!! ЕЗЖУ ТЕПЕРЬ !! Блин теперь тачки только
          у вас заказывать буду!
        </p>

        <p class="mt-35">18.07.2023</p>
      </div>
    </div>

    <NuxtImg src="/images/reviews/user.png" alt="Отзыв" />
  </article>
</template>
