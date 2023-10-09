<template>
  <section class="container">
    <div class="text-center">
      <h2 class="text-4xl font-bold">Честные обзоры на Youtube</h2>

      <p class="text-gray mt-4">
        Проводим тест-драйв привезённых авто, даём объективную оценку новым
        автомобилям
      </p>
    </div>

    <div class="lg:flex gap-5 mt-15 font-bold">
      <div>
        <div class="">
          <iframe
            src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?controls=0"
            class="w-full h[360px]"
          ></iframe>

          <p class="my-4">
            ОБЗОР НА НОВЫЙ HONDA VEZEL 2021 e:HEV [ RV6 ] ДОРОГО
          </p>
        </div>

        <div class="lg:flex gap-2">
          <div class="basis-1/2">
            <iframe
              src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?controls=0"
              class="w-full h-100 lg:h-48"
            ></iframe>

            <p class="my-4">
              KIA CARNIVAL КРОССОВЕР ИЛИ "АВТОБУС" КОРЕЙЦЫ УМЕЮТ
            </p>
          </div>

          <div class="basis-1/2">
            <iframe
              src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?controls=0"
              class="w-full h-100 lg:h-48"
            ></iframe>

            <p class="my-4">
              NISSAN NOTE E-POWER ИЗ ЯПОНИИ ЧЕМ ЛУЧШЕ КОНКУРЕНТОВ
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="lg:flex gap-2">
          <div class="basis-1/2">
            <iframe
              src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?controls=0"
              class="w-full h-100 lg:h-48"
            ></iframe>

            <p class="my-4">
              ОБЗОР HONDA CR-V ГИБРИД [ RT6 ]e:HEV ЛУЧШЕ E-POWER...
            </p>
          </div>

          <div class="basis-1/2">
            <iframe
              src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY?controls=0"
              class="w-full h-100 lg:h-48"
            ></iframe>

            <p class="my-4">
              ОБЗОР NISSAN SERENA E-POWER ЭЛЕКТРИЧКА С ГЕНЕРАТОРОМ
            </p>
          </div>
        </div>

        <div class="p-7 font-normal b relative">
          <h2 class="text-4xl font-bold">Следим за контентом</h2>

          <p class="mt-4">
            Подпишись, чтобы не пропустить обзоры на автомобили, которые тебя
            интересуют
          </p>

          <NuxtPicture
            src="/images/s.png"
            class="absolute bottom-0 right-0 w-full h-70 -z-10"
            alt="Контент на Youtube"
          />

          <button
            class="flex bg-red text-white w-full mt-40 p-4 flex justify-center items-center text-xl gap-5"
          >
            <span class="font-bold">Перейти на канал SUNRISE Auto</span>

            <NuxtIcon name="socials/youtube" class="relative top-1 text-3xl" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
