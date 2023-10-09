<template>
  <section class="container">
    <section class="md:flex justify-between">
      <div>
        <p class="text-4xl font-bold">
          Владивосток, <br />
          Пушкинская 109, офис 209
        </p>
        <p class="text-gray text-xl mt-4">Ежедневно с 10:00 до 18:00</p>
      </div>

      <div>
        <span class="text-4xl font-bold">8 (800) 511-07-88</span>
        <p class="text-gray text-xl md:text-right mt-4">mail@sunrise-auto.ru</p>

        <div class="flex gap-4 md:float-right mt-5">
          <div
            class="p-1.5 bg-red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/youtube" class="text-xl" />
          </div>
          <div
            class="p-1.5 bg-red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/whatsapp" class="text-xl" />
          </div>
          <div
            class="p-1.5 bg-red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/instagram" class="text-xl" />
          </div>
          <div
            class="p-1.5 bg-red rounded-full flex justify-center items-center"
          >
            <NuxtIcon name="socials/telegram" class="text-xl" />
          </div>
        </div>
      </div>
    </section>

    <NuxtImg src="/images/map.png" class="w-full my-10" alt="Карта" />

    <div class="flex gap-4 items-center">
      <NuxtIcon name="location_point" class="text-red text-4xl" />

      <p class="text-3xl font-bold">Как к нам добраться?</p>
    </div>

    <p class="text-gray mt-2">
      Пушкинская 109, офис 209, вход через “Никодент”, 2 этаж.
    </p>
  </section>
</template>
