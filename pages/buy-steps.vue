<template>
  <h1 class="text-center text-4xl font-bold mt-10">
    Простая схема покупки авто
  </h1>

  <section class="container mt-15">
    <article class="relative b h-130 my-4">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг первый</p>

          <h2 class="text-4xl font-bold text-shadow-xl">Заявка</h2>

          <p class="w-2/3">
            Позвоните, напишите или оставьте заявку на сайте. Мы вышлем варианты
            со стоимостью, расскажем об этапах покупки, сроках и доставки до
            Владивостока.
          </p>

          <button class="btn-red-filled w-70">Оставить заявку</button>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center">
        <NuxtImg src="/images/steps/wheel.png" alt="Шаг" class="object-cover" />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг второй</p>

          <h2 class="text-4xl font-bold text-shadow-xl">
            Двусторонний договор
          </h2>

          <p class="w-2/3">
            Заключаем двусторонний договор, вы вносите гарантийный взнос. Это
            можно сделать онлайн или лично у нас в офисе.
          </p>

          <button class="btn-red-filled w-70 gap-4">
            <NuxtIcon name="download" class="text-xl" />
            Скачать договор
          </button>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center">
        <NuxtImg src="/images/steps/paper_clip_1.png" alt="Шаг"  class="object-cover"/>
        <NuxtImg src="/images/steps/paper_clip_2.png" alt="Шаг"  class="object-cover"/>
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг третий</p>

          <h2 class="text-4xl font-bold text-shadow-xl">
            Подбор и покупка авто
          </h2>

          <p class="w-2/3">
            После заключения договора мы приступаем к поиску нужного для вас
            автомобиля. Мы закрепляем с вами менеджера, с которым вы будете в
            постоянном контакте. Ставки на конкретный авто делаем после вашего
            согласования.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-end items-center">
        <NuxtImg
          src="/images/steps/car.png"
          alt="Шаг"
          class="w-full h-full object-cover"
        />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг четвёртый</p>

          <h2 class="text-4xl font-bold text-shadow-xl">Оплата инвойса</h2>

          <p class="w-2/3">
            Вы оплачиваете расходы по Японии, Корее или Китаю через выгодный для
            вас банк. Мы подготавливаем авто к отправке в Россию.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-between">
        <NuxtImg src="/images/steps/coin_1.png" alt="Шаг" class="object-cover" />
        <NuxtImg src="/images/steps/coin_2.png" alt="Шаг" class="object-cover" />
      </div>
    </article>

    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг пятый</p>

          <h2 class="text-4xl font-bold text-shadow-xl">Растаможка авто</h2>

          <p class="w-2/3">
            Когда автомобиль прибудет во Владивосток, вы оплачиваете пошлину и
            комиссию компании. Со всеми клиентами после оплаты связывается наш
            логист и помогает подготовить все необходимые документы и действия
            для быстрой растаможки автомобилей.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center items-start">
        <NuxtImg src="/images/constructor_car.png" alt="Шаг" class="object-cover h-full " />
      </div>
    </article>
    <article class="relative b h-130 my-4 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <div class="flex flex-col items-center gap-4 text-center p-10">
          <p>Шаг шестой</p>

          <h2 class="text-4xl font-bold text-shadow-xl">
            Доставка и передача авто
          </h2>

          <p class="w-2/3">
            Вы можете забрать автомобиль с нашей стоянки во Владивостоке, или мы
            организуем доставку в любой город РФ.
          </p>
        </div>
      </div>

      <!-- Img -->

      <div class="w-full h-full flex justify-center items-start">
        <NuxtImg src="/images/shipping.png" alt="Шаг" class="h-full object-contain" />
      </div>
    </article>
  </section>
</template>
